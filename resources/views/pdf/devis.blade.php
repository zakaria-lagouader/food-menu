<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }

        .invoice {
            width: 600px;
            margin: 0 auto;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            padding: 20px;
        }

        .invoice-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .invoice-header h1 {
            margin: 0;
        }

        .invoice-details {
            margin-bottom: 20px;
        }

        .invoice-details p {
            margin: 0;
        }

        .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .invoice-table th,
        .invoice-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        .invoice-notes {
            margin-bottom: 20px;
        }

        .invoice-notes p {
            margin: 0;
        }
    </style>
</head>

<body>
    <div class="invoice">
        <div class="invoice-header">
            <h1>Invoice</h1>
        </div>
        <div class="invoice-details">
            <p><strong>Number:</strong> {{ $devis->num }}</p>
            <p><strong>Name:</strong> {{ $devis->nom }} {{ $devis->prenom }}</p>
            <p><strong>Email:</strong> {{ $devis->email }}</p>
            <p><strong>Telephone:</strong> {{ $devis->telephone }}</p>
            <p><strong>Date:</strong> {{ $devis->date }}</p>
            <p><strong>Event Type:</strong> {{ $devis->event_type }}</p>
            <p><strong>Address:</strong> {{ $devis->adress }}</p>
        </div>
        <table class="invoice-table">
            <thead>
                <tr>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $devis->qty }}</td>
                </tr>
            </tbody>
        </table>
        <div class="invoice-notes">
            <p><strong>Notes:</strong></p>
            <p>{{ $devis->notes }}</p>
        </div>
    </div>
</body>

</html>
