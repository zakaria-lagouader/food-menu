<?php

use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Coupon;
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

Route::get('/menu/{restaurant}', function ($restaurant) {
    return Inertia::render('Menu', [
        "products" => Product::where("restaurant", $restaurant)->with("category")->get(),
        "categories" => Category::all(),
        "restaurant" => $restaurant
    ]);
});

Route::match(["GET", "POST"], "/checkout", function (Request $request) {
    if ($request->isMethod('POST')) {
        session()->put("cart", $request->cart);
    }
    if (count(session()->get("cart") ?? []) == 0) {
        return redirect("/");
    }
    return Inertia::render('Checkout', [
        "cart" => session()->get("cart"),
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get("/profile", function () {
        return Inertia::render("Profile/Index", [
            "coupons" => auth()->user()->coupons,
            "orders_count" => auth()->user()->orders()->count()
        ]);
    });
    Route::post('/profile/coupon', [\App\Http\Controllers\ProfileController::class, "createCoupon"]);
    Route::get("/profile/order/history", [\App\Http\Controllers\OrderController::class, "index"]);
});


Route::post('/devis', [\App\Http\Controllers\DevisController::class, "store"])->name("devis.store");

Route::post('/order/checkout', [\App\Http\Controllers\OrderController::class, "store"]);
Route::get("/order/{num}/details", [\App\Http\Controllers\OrderController::class, "show"]);
Route::inertia('/thank-you', "ThankYou")->name("thank-you");
Route::inertia('/traiteur', "Traiteur/Index")->name("traiteur");
Route::inertia('/traiteur/success', "Traiteur/Success");


require __DIR__ . '/auth.php';
