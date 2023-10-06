<?php

header("Content-Type=> application/json; charset-utf-8");
header("Access-Control-Allow-Origin=> *");

$data = [
    [
        "categories"=> "School Life",
        "list_comics"=> [
            [
                "src"=> "kaguya_sama.jpg",
                "name"=> "Kaguya=> Love is war",
                "price"=> 1100
            ],
            [
                "src"=> "kuroko_basketball.jpg",
                "name"=> "Kuroko no Basketball",
                "price"=> 1010
            ],
            [
                "src"=> "super_cup.jpg",
                "name"=> "Super Cup",
                "price"=> 1035
            ]
        ]
    ],
    [
        "categories"=> "Adventure",
        "list_comics"=> [
            [
                "src"=> "one_piece.jpg",
                "name"=> "One Piece",
                "price"=> 1320
            ],
            [
                "src"=> "yami_sibai.jpg",
                "name"=> "Yami Sibai 11",
                "price"=> 1000
            ],
            [
                "src"=> "kimetsu_yaiba.jpg",
                "name"=> "Kimetsu no Yaiba",
                "price"=> 1570
            ],
            [
                "src"=> "spyxfamily.jpg",
                "name"=> "Spy x Family",
                "price"=> 1401
            ]
        ]
    ]
];

return json_encode($data);