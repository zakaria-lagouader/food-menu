<html>

<head>
    {{-- <style>
        body {
            font-family: sans-serif;
            font-size: 10pt;
        }

        p {
            margin: 0pt;
        }

        table.items {
            border: 0.1mm solid #e7e7e7;
        }

        td {
            vertical-align: top;
        }

        .items td {
            border-left: 0.1mm solid #e7e7e7;
            border-right: 0.1mm solid #e7e7e7;
        }

        table thead td {
            text-align: center;
            border: 0.1mm solid #e7e7e7;
        }

        .items td.blanktotal {
            background-color: #EEEEEE;
            border: 0.1mm solid #e7e7e7;
            background-color: #FFFFFF;
            border: 0mm none #e7e7e7;
            border-top: 0.1mm solid #e7e7e7;
            border-right: 0.1mm solid #e7e7e7;
        }

        .items td.totals {
            text-align: right;
            border: 0.1mm solid #e7e7e7;
        }

        .items td.cost {
            text-align: "."center;
        }
    </style> --}}
</head>

<body>
    <table width="100%" style="font-family: sans-serif;" cellpadding="10">
        <tr>
            <td width="100%" style="padding: 0px; text-align: center;">
                <a href="#" target="_blank"><img src="{{ asset('/img/logo.webp') }}" width="264" height="110"
                        alt="Logo" align="center" border="0"></a>
            </td>
        </tr>
        <tr>
            <td width="100%" style="text-align: center; font-size: 20px; font-weight: bold; padding: 0px;">
                DEVIS
            </td>
        </tr>
        <tr>
            <td height="10" style="font-size: 0px; line-height: 10px; height: 10px; padding: 0px;">&nbsp;</td>
        </tr>
    </table>
    <table width="100%" style="font-family: sans-serif;" cellpadding="10">
        <tr>
            <td width="49%" style="border: 0.1mm solid #eee;">
                {{ $devis->nom }} {{ $devis->prenom }}
                <br>
                {{ $devis->emali }}
                <br>
                {{ $devis->telephone }}
                <br>
                {{ $devis->adress }}
            </td>
            <td width="2%">&nbsp;</td>
            <td width="49%" style="border: 0.1mm solid #eee; text-align: right;"><strong>
                    Cucina Napoli
                </strong><br>4 Bd Anoual, <br> Casablanca 20250<br><br><strong>Telephone:</strong> 0520338350<br><a
                    href="#" target="_blank">
        </tr>
    </table>
    <br>
    <table class="items" width="100%" style="font-size: 14px; border-collapse: collapse;" cellpadding="8">
        <thead>
            <tr>
                <td width="20%" style="text-align: left;"><strong>Date</strong></td>
                <td width="20%" style="text-align: left;"><strong>type d'événement</strong></td>
                <td width="15%" style="text-align: left;"><strong>Quantité</strong></td>
                <td width="45%" style="text-align: left;"><strong>Notes</strong></td>
            </tr>
        </thead>
        <tbody>
            <!-- ITEMS HERE -->
            <tr>
                <td style="padding: 0px 7px; line-height: 20px;">{{ $devis->date }}</td>
                <td style="padding: 0px 7px; line-height: 20px;">{{ $devis->event_type }}</td>
                <td style="padding: 0px 7px; line-height: 20px;">{{ $devis->qty }}</td>
                <td style="padding: 0px 7px; line-height: 20px;">{{ $devis->notes }}</td>
            </tr>
        </tbody>
    </table>
</body>

</html>
