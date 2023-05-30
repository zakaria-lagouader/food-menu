<?php

namespace App\Http\Controllers;

use App\Mail\InvoiceMail;
use App\Models\Devis;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class DevisController extends Controller
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
        $validated = $request->validate([
            "nom" => "required",
            "prenom" => "required",
            "email" => "required|email",
            "telephone" => "required",
            "date" => "required",
            "event_type" => "required",
            "adress" => "required",
            "qty" => "required",
            "notes" => "required",
        ]);

        $devis = Devis::create(array_merge($validated, [
            "num" => Str::random(10),
            "event_type" => $request->event_type === "autre" ? $request->autre : $request->event_type
        ]));

        $pdf = Pdf::loadView('pdf.devis', compact("devis"));
        $devis->pdf = $pdf;

        Mail::to($request->email)->send(new InvoiceMail($devis));

        return redirect("/traiteur/success");
    }

    /**
     * Display the specified resource.
     */
    public function show(Devis $devis)
    {
        // return $devis;
        $pdf = Pdf::loadView('pdf.devis', compact("devis"));
        return $pdf->stream();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Devis $devis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Devis $devis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Devis $devis)
    {
        //
    }
}
