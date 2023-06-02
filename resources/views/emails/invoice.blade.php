<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Your Invoice</title>

    <style>
        * {
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>

<body>
    <h1>Bonjour {{ $data->prenom }} {{ $data->nom }}</h1>

    <p>Vous trouverez ci-dessous votre devis au format pdf dans les pièces jointes.</p>

</body>

</html>
