<html>

<head>
</head>

<body>
    <table width="100%" cellpadding="10">
        <tr>
            <td width="100%">
                <a href="{{ url('/') }}" target="_blank"><img src="{{ asset('/img/logo.webp') }}" width="264"
                        height="110" alt="Logo" align="center" border="0"></a>
            </td>
        </tr>
        <tr>
            <td width="100%">
                DEVIS
            </td>
        </tr>
        <tr>
            <td height="10">&nbsp;</td>
        </tr>
    </table>
    <table width="100%" cellpadding="10">
        <tr>
            <td width="49%">
                {{ $devis->nom }} {{ $devis->prenom }}
                <br>
                {{ $devis->emali }}
                <br>
                {{ $devis->telephone }}
                <br>
                {{ $devis->adress }}
            </td>
            <td width="2%">&nbsp;</td>
            <td width="49%"><strong>
                    Cucina Napoli
                </strong><br>4 Bd Anoual, <br> Casablanca 20250<br><br><strong>Telephone:</strong> 0520338350<br>
        </tr>
    </table>
    <br>
    <table class="items" width="100%" cellpadding="8">
        <thead>
            <tr>
                <td width="20%"><strong>Date</strong></td>
                <td width="20%"><strong>type d'événement</strong></td>
                <td width="15%"><strong>Quantité</strong></td>
                <td width="45%"><strong>Notes</strong></td>
            </tr>
        </thead>
        <tbody>
            <!-- ITEMS HERE -->
            <tr>
                <td>{{ $devis->date }}</td>
                <td>{{ $devis->event_type }}</td>
                <td>{{ $devis->qty }}</td>
                <td>{{ $devis->notes }}</td>
            </tr>
        </tbody>
    </table>
</body>

</html>
