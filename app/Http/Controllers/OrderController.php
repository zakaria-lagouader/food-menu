<?php

namespace App\Http\Controllers;

use App\Mail\OrderSummary;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            "nom" => "required",
            "prenom" => "required",
            "email" => "required|email",
            "adress" => "required",
            "telephone" => "required",
            "notes" => "required",
            "delivery_type" => "required",
            "total" => "required",
        ]);

        $account = null;
        $score = 0;

        if ($request->create_account) {
            $account = User::create([
                'name' => $request->nom . " " . $request->prenom,
                "nom" => $request->nom,
                "prenom" => $request->prenom,
                "telephone" => $request->telephone,
                "adress" => $request->adress,
                'email' => $request->email,
                'password' => Hash::make($request->nom),
            ]);
        }

        $order = Order::create(array_merge($request->except(["cart", "create_account"]), [
            "num" => Str::random(10),
            "total" => $request->delivery_type == "cash" ? $request->total + 10 : $request->total,
            "user_id" => $account->id ?? null
        ]));

        foreach ($request->cart as $cartItem) {
            $order->items()->create([
                "qty" => $cartItem["qty"],
                "product_id" => $cartItem["product"]["id"],
            ]);

            $score += intval($cartItem["product"]["points"]) * intval($cartItem["qty"]);
        }

        if ($account) {
            $account->update([
                "points" => $score
            ]);
            Auth::login($account);
        }

        Mail::to($request->email)->send(new OrderSummary($order));

        session()->forget("cart");

        return redirect("/profile");
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
