<?php

use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/menu/{restaurant}', function () {
    return Inertia::render('Menu', [
        "products" => Product::with("category")->get(),
        "categories" => Category::all()
    ]);
});

Route::match(["GET", "POST"], "/checkout", function (Request $request) {
    if ($request->isMethod('POST')) {
        session()->put("cart", $request->cart);
    }
    return Inertia::render('Checkout', [
        "cart" => session()->get("cart"),
    ]);
});

Route::get("/profile", function () {
    return Inertia::render("Profile/Index");
})->middleware("auth");

Route::post('/devis', [\App\Http\Controllers\DevisController::class, "store"])->name("devis.store");
Route::post('/order/checkout', [\App\Http\Controllers\OrderController::class, "store"])->name("traiteur.success");

Route::inertia('/thank-you', "ThankYou")->name("thank-you");
Route::inertia('/traiteur', "Traiteur/Index")->name("traiteur");
Route::inertia('/traiteur/success', "Traiteur/Success");


require __DIR__ . '/auth.php';
