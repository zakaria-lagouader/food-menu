<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>New Order !</h1>
    <p>Order Number: {{ $order->num }}</p>
    <p>Order Total: {{ $order->total }}</p>
    <p>User Name: {{ $order->nom }} {{ $order->prenom }}</p>

    @foreach ($order->items as $item)
        <p>{{ $item->product->name }}</p>
        <p>Qty: {{ $item->qty }}</p>
    @endforeach
</body>

</html>
