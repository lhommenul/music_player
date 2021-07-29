const axios = require('axios')
let i = [
    {
        "id": "7bb60591-46f3-4147-b692-1814a87e832e",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 100,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Manilow",
        "sort-name": "Manilow, Barry",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "a71b0d32-7752-49e9-8594-2247ad6ac12c",
            "type": "District",
            "type-id": "84039871-5e47-38ca-a66a-45e512c8290f",
            "name": "Brooklyn",
            "sort-name": "Brooklyn",
            "life-span": {
                "ended": null
            }
        },
        "ipis": [
            "00040202449"
        ],
        "isnis": [
            "0000000115117461"
        ],
        "life-span": {
            "begin": "1943-06-17",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "巴瑞曼尼洛",
                "type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
                "name": "巴瑞曼尼洛",
                "locale": "zh",
                "type": "Artist name",
                "primary": true,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "バリー・マニロウ",
                "type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
                "name": "バリー・マニロウ",
                "locale": "ja",
                "type": "Artist name",
                "primary": true,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Barry Manillow",
                "name": "Barry Manillow",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Pincus, Barry Alan",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "Barry Alan Pincus",
                "locale": null,
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": 0,
                "name": "rock"
            },
            {
                "count": 1,
                "name": "pop"
            },
            {
                "count": 1,
                "name": "jazz"
            },
            {
                "count": 0,
                "name": "american"
            },
            {
                "count": 1,
                "name": "easy listening"
            },
            {
                "count": 2,
                "name": "soft rock"
            },
            {
                "count": 1,
                "name": "adult contemporary"
            },
            {
                "count": 0,
                "name": "popular"
            },
            {
                "count": 0,
                "name": "easy listening soundtracks and musicals"
            }
        ]
    },
    {
        "id": "661e20c8-3d82-4da2-94a2-97d9e11691c0",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 98,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "John Barry",
        "sort-name": "Barry, John",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "3a28f05b-59e0-4aa1-9a79-b96f5ef6403b",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "York",
            "sort-name": "York",
            "life-span": {
                "ended": null
            }
        },
        "end-area": {
            "id": "fda87c2c-d04f-43e8-a6be-f10fec4dea70",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Oyster Bay",
            "sort-name": "Oyster Bay",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "film composer; known for James Bond",
        "ipis": [
            "00002198612"
        ],
        "isnis": [
            "000000036865189X",
            "0000000122820905"
        ],
        "life-span": {
            "begin": "1933-11-03",
            "end": "2011-01-30",
            "ended": true
        },
        "aliases": [
            {
                "sort-name": "John Barry Orchestra",
                "name": "John Barry Orchestra",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "J.J. Barry",
                "name": "J.J. Barry",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "The John Barry Orchestra",
                "name": "The John Barry Orchestra",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "John Barry & Orchestra",
                "name": "John Barry & Orchestra",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "J. Barr",
                "name": "J. Barr",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "John Barry & His Orchestra",
                "name": "John Barry & His Orchestra",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "John Barry And His Orchestra",
                "name": "John Barry And His Orchestra",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Prendergast, John Barry",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "John Barry Prendergast",
                "locale": null,
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": -1,
                "name": "death by heart attack"
            },
            {
                "count": 1,
                "name": "academy award winner"
            },
            {
                "count": 2,
                "name": "composer"
            },
            {
                "count": 1,
                "name": "film composer"
            },
            {
                "count": 1,
                "name": "film score"
            },
            {
                "count": 2,
                "name": "easy listening soundtracks and musicals"
            },
            {
                "count": 0,
                "name": "compositeur"
            },
            {
                "count": 1,
                "name": "english"
            },
            {
                "count": 3,
                "name": "soundtrack"
            },
            {
                "count": 0,
                "name": "britannique"
            },
            {
                "count": 3,
                "name": "british"
            },
            {
                "count": 1,
                "name": "uk"
            }
        ]
    },
    {
        "id": "b904d624-9e05-4398-8f4f-88fbcf022f79",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 94,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry White",
        "sort-name": "White, Barry",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "e0b89606-1999-4a43-b32a-17c2541194ff",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Galveston",
            "sort-name": "Galveston",
            "life-span": {
                "ended": null
            }
        },
        "end-area": {
            "id": "1f40c6e1-47ba-4e35-996f-fe6ee5840e62",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Los Angeles",
            "sort-name": "Los Angeles",
            "life-span": {
                "ended": null
            }
        },
        "ipis": [
            "00032819882",
            "00041428211"
        ],
        "isnis": [
            "0000000079712537"
        ],
        "life-span": {
            "begin": "1944-09-12",
            "end": "2003-07-04",
            "ended": true
        },
        "aliases": [
            {
                "sort-name": "Carter, Barrence Eugene",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "Barrence Eugene Carter",
                "locale": null,
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Gene West",
                "name": "Gene West",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Barry Eugene White",
                "name": "Barry Eugene White",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": 1,
                "name": "pop"
            },
            {
                "count": 0,
                "name": "american"
            },
            {
                "count": 1,
                "name": "easy listening"
            },
            {
                "count": 1,
                "name": "funk"
            },
            {
                "count": 6,
                "name": "soul"
            },
            {
                "count": 2,
                "name": "disco"
            },
            {
                "count": 0,
                "name": "classic pop and rock"
            },
            {
                "count": 1,
                "name": "pop soul"
            },
            {
                "count": 1,
                "name": "smooth soul"
            },
            {
                "count": 1,
                "name": "r&b"
            }
        ]
    },
    {
        "id": "16564ae0-3f0c-48af-8d32-04b5ddf37962",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 90,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Dave Barry",
        "sort-name": "Barry, Dave",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "isnis": [
            "0000000080943113"
        ],
        "life-span": {
            "begin": "1947-07-03",
            "ended": null
        }
    },
    {
        "id": "f612b40f-12cb-4f65-9680-70fba5d3ee7f",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 87,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Gray",
        "sort-name": "Gray, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "7ca97e51-54a1-4b5a-a6f9-3a00a27efcc7",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Blackburn",
            "sort-name": "Blackburn",
            "life-span": {
                "ended": null
            }
        },
        "end-area": {
            "id": "6a89d88d-cd53-3d32-b41e-f6c7ab14649b",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "Guernsey",
            "sort-name": "Guernsey",
            "life-span": {
                "ended": null
            }
        },
        "ipis": [
            "00012583212"
        ],
        "isnis": [
            "0000000118335624"
        ],
        "life-span": {
            "begin": "1908-07-18",
            "end": "1984-04-26",
            "ended": true
        },
        "aliases": [
            {
                "sort-name": "Barry Grey",
                "name": "Barry Grey",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": 1,
                "name": "check it"
            },
            {
                "count": 1,
                "name": "easy listening soundtracks and musicals"
            }
        ]
    },
    {
        "id": "a50a1afa-23eb-4ba6-9faf-5dec260898ca",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 82,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Adamson",
        "sort-name": "Adamson, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "c7c8bf25-3d35-4562-8d21-3bb49eebb9d1",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Moss Side",
            "sort-name": "Moss Side",
            "life-span": {
                "ended": null
            }
        },
        "ipis": [
            "00046759252"
        ],
        "isnis": [
            "0000000119785811",
            "0000000119783226"
        ],
        "life-span": {
            "begin": "1958-06-11",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Mr. Adamson",
                "name": "Mr. Adamson",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Adamson, Barry Anthony",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "Barry Anthony Adamson",
                "locale": "en",
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": 1,
                "name": "british"
            },
            {
                "count": 1,
                "name": "uk"
            },
            {
                "count": 1,
                "name": "electronica"
            },
            {
                "count": 1,
                "name": "bassist"
            },
            {
                "count": 1,
                "name": "producer"
            },
            {
                "count": 1,
                "name": "electronic"
            },
            {
                "count": 1,
                "name": "alternative pop"
            },
            {
                "count": 1,
                "name": "soundtrack"
            },
            {
                "count": 1,
                "name": "composer"
            },
            {
                "count": 1,
                "name": "remixer"
            },
            {
                "count": 1,
                "name": "english"
            },
            {
                "count": 1,
                "name": "programmer"
            },
            {
                "count": 1,
                "name": "musician"
            },
            {
                "count": 1,
                "name": "classic pop and rock"
            }
        ]
    },
    {
        "id": "43a5364c-7096-4f9b-ab63-b71d62af52bd",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 81,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry McGuire",
        "sort-name": "McGuire, Barry",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "ca61e235-0f31-4c0e-8963-8232222ef6a8",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Oklahoma City",
            "sort-name": "Oklahoma City",
            "life-span": {
                "ended": null
            }
        },
        "isnis": [
            "0000000083943266"
        ],
        "life-span": {
            "begin": "1935-10-15",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "McGuire, Barry B.",
                "type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
                "name": "Barry B. McGuire",
                "locale": "en",
                "type": "Artist name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Barret McGuire",
                "name": "Barret McGuire",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "MC GUIRE BARRY",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                "name": "MC GUIRE BARRY",
                "locale": null,
                "type": "Search hint",
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Barry McQuire",
                "name": "Barry McQuire",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": 1,
                "name": "rock"
            },
            {
                "count": 1,
                "name": "folk rock"
            },
            {
                "count": 1,
                "name": "folk pop"
            },
            {
                "count": 1,
                "name": "contemporary folk"
            }
        ]
    },
    {
        "id": "413ad03f-d419-43f8-90e2-c24306b965fe",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 81,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Harris",
        "sort-name": "Harris, Barry",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "b03ff310-d8e2-45cf-9455-769f76641eb2",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Detroit",
            "sort-name": "Detroit",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "Jazz pianist",
        "ipis": [
            "00013460620"
        ],
        "isnis": [
            "0000000055135464"
        ],
        "life-span": {
            "begin": "1929-12-15",
            "ended": null
        },
        "tags": [
            {
                "count": 1,
                "name": "hard bop"
            },
            {
                "count": 1,
                "name": "jazz"
            }
        ]
    },
    {
        "id": "8521feb4-6704-43f2-9c9b-b80469f5f7de",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 80,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Ryan",
        "sort-name": "Ryan, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "400bdd75-a3a0-48e2-a6ae-c4733366aff3",
            "type": "Subdivision",
            "type-id": "fd3d44c5-80a1-3842-9745-2c4972d35afa",
            "name": "Leeds",
            "sort-name": "Leeds",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "English pop singer / photographer",
        "ipis": [
            "00077722552"
        ],
        "isnis": [
            "0000000107182407"
        ],
        "life-span": {
            "begin": "1948-10-24",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Ryan, Berry",
                "name": "Berry Ryan",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ]
    },
    {
        "id": "b02e4ca5-312a-4d2e-b087-30db9d5ec579",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 80,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Gibb",
        "sort-name": "Gibb, Barry",
        "gender": "male",
        "country": "AU",
        "area": {
            "id": "106e0bec-b638-3b37-b731-f53d507dc00e",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "Australia",
            "sort-name": "Australia",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "c7f079cf-dec2-414d-90f2-112e1f732105",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Douglas",
            "sort-name": "Douglas",
            "life-span": {
                "ended": null
            }
        },
        "ipis": [
            "00011811727"
        ],
        "isnis": [
            "0000000114944836"
        ],
        "life-span": {
            "begin": "1946-09-01",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Gibb, B",
                "name": "B Gibb",
                "locale": "en",
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Barry Alan Gibb",
                "name": "Barry Alan Gibb",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Gibb, Barry Alan Crompton",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "Barry Alan Crompton Gibb",
                "locale": null,
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "B. Gibb",
                "name": "B. Gibb",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ],
        "tags": [
            {
                "count": 2,
                "name": "pop"
            },
            {
                "count": 1,
                "name": "english"
            }
        ]
    },
    {
        "id": "5e90c9be-37c7-40d6-bb51-911ed0107532",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 80,
        "name": "Barry Barry",
        "sort-name": "Barry Barry",
        "life-span": {
            "ended": null
        }
    },
    {
        "id": "92cd8453-66d0-49ec-95c5-539faaa6fa88",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 80,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Wordsworth",
        "sort-name": "Wordsworth, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "conductor",
        "isnis": [
            "0000000109028462"
        ],
        "life-span": {
            "begin": "1948-02-20",
            "ended": null
        },
        "tags": [
            {
                "count": 1,
                "name": "conductor"
            }
        ]
    },
    {
        "id": "57b5be7d-237a-4d6d-bf5c-a0e9a70d8fb0",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 79,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Brown",
        "sort-name": "Brown, Barry",
        "gender": "male",
        "country": "JM",
        "area": {
            "id": "2dd47a64-91d5-3b13-bc94-80043ed063d7",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "Jamaica",
            "sort-name": "Jamaica",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "23e0d135-9fe7-48cb-b2c4-93addd3d1e37",
            "type": "Subdivision",
            "type-id": "fd3d44c5-80a1-3842-9745-2c4972d35afa",
            "name": "Kingston",
            "sort-name": "Kingston",
            "life-span": {
                "ended": null
            }
        },
        "end-area": {
            "id": "23e0d135-9fe7-48cb-b2c4-93addd3d1e37",
            "type": "Subdivision",
            "type-id": "fd3d44c5-80a1-3842-9745-2c4972d35afa",
            "name": "Kingston",
            "sort-name": "Kingston",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "Jamaican reggae singer",
        "isnis": [
            "000000036345933X"
        ],
        "life-span": {
            "begin": "1962",
            "end": "2004-05-29",
            "ended": true
        }
    },
    {
        "id": "54d7b0f8-196c-46db-9ee9-3b3ef86a5ea9",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 79,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Blue",
        "sort-name": "Blue, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "f03d09b3-39dc-4083-afd6-159e3f0d462f",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "London",
            "sort-name": "London",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "singer, producer, and songwriter",
        "ipis": [
            "00068299333",
            "00121887865"
        ],
        "life-span": {
            "begin": "1950-12-04",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Blue, Barry Ian",
                "type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
                "name": "Barry Ian Blue",
                "locale": null,
                "type": "Artist name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Blue, Barry",
                "name": "Blue, Barry",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Green, Barry Ian",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "Barry Ian Green",
                "locale": null,
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ]
    },
    {
        "id": "7e9ad754-55ac-4e82-a671-2bc77db90b23",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 79,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Leitch",
        "sort-name": "Leitch, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "video game music composer",
        "life-span": {
            "begin": "1970-04-27",
            "ended": null
        },
        "tags": [
            {
                "count": 1,
                "name": "c64"
            },
            {
                "count": 1,
                "name": "chiptune"
            }
        ]
    },
    {
        "id": "3f076b39-8267-4bf0-ac3e-e405d9feda21",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 78,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Guy",
        "sort-name": "Guy, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "f03d09b3-39dc-4083-afd6-159e3f0d462f",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "London",
            "sort-name": "London",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "composer and double bass",
        "isnis": [
            "0000000114763840"
        ],
        "life-span": {
            "begin": "1947-04-22",
            "ended": null
        },
        "tags": [
            {
                "count": 1,
                "name": "classical"
            },
            {
                "count": 1,
                "name": "jazz"
            }
        ]
    },
    {
        "id": "49267173-315a-462f-a5d4-3f7565eee283",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 78,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Biggs",
        "sort-name": "Biggs, Barry",
        "gender": "male",
        "country": "JM",
        "area": {
            "id": "2dd47a64-91d5-3b13-bc94-80043ed063d7",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "Jamaica",
            "sort-name": "Jamaica",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "e4266d76-372a-4602-93b7-380e4013c90f",
            "type": "Subdivision",
            "type-id": "fd3d44c5-80a1-3842-9745-2c4972d35afa",
            "name": "Saint Andrew",
            "sort-name": "Saint Andrew",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "JM reggae singer/producer/engineer",
        "life-span": {
            "begin": "1947",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Barrington Biggs",
                "name": "Barrington Biggs",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ]
    },
    {
        "id": "415ff50e-9f79-4868-9e54-1217e9ec752f",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 78,
        "gender-id": "93452b5a-a947-30c8-934f-6a4056b151c2",
        "name": "Claudja Barry",
        "sort-name": "Barry, Claudja",
        "gender": "female",
        "area": {
            "id": "74e50e58-5deb-4b99-93a2-decbb365c07f",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "New York",
            "sort-name": "New York",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "2dd47a64-91d5-3b13-bc94-80043ed063d7",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "Jamaica",
            "sort-name": "Jamaica",
            "life-span": {
                "ended": null
            }
        },
        "isnis": [
            "0000000073638700"
        ],
        "life-span": {
            "begin": "1952",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Claudia Barry",
                "name": "Claudia Barry",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ]
    },
    {
        "id": "81733731-0c4e-4619-abe6-6f0fe24978b2",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 77,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Wickens",
        "sort-name": "Wickens, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "77bd9218-74c6-4881-9495-457be4ba62e7",
            "type": "Subdivision",
            "type-id": "fd3d44c5-80a1-3842-9745-2c4972d35afa",
            "name": "Croydon",
            "sort-name": "Croydon",
            "life-span": {
                "ended": null
            }
        },
        "life-span": {
            "begin": "1956-05-23",
            "ended": null
        }
    },
    {
        "id": "733e0af2-c840-4510-82b9-d0c36633c98b",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 77,
        "name": "Barry",
        "sort-name": "Barry",
        "disambiguation": "aka Mohamed Bahry",
        "life-span": {
            "ended": null
        }
    },
    {
        "id": "03680659-df39-4baf-91c4-df0204c6e22f",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 77,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Douglas",
        "sort-name": "Douglas, Barry",
        "gender": "male",
        "country": "GB",
        "area": {
            "id": "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United Kingdom",
            "sort-name": "United Kingdom",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "b3cb9848-1440-4c2b-b258-f849f8a9d50a",
            "type": "City",
            "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
            "name": "Belfast",
            "sort-name": "Belfast",
            "life-span": {
                "ended": null
            }
        },
        "disambiguation": "classical pianist and conductor",
        "isnis": [
            "0000000109387000"
        ],
        "life-span": {
            "begin": "1960-04-23",
            "ended": null
        },
        "tags": [
            {
                "count": 1,
                "name": "pianist"
            },
            {
                "count": 1,
                "name": "classical"
            },
            {
                "count": 1,
                "name": "british pianist"
            }
        ]
    },
    {
        "id": "de09485c-4c33-434c-89e0-3303c9da1750",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 77,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Todd Barry",
        "sort-name": "Barry, Todd",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "eb4a386e-1178-4e3a-a371-30418dd6fd2e",
            "type": "District",
            "type-id": "84039871-5e47-38ca-a66a-45e512c8290f",
            "name": "The Bronx",
            "sort-name": "The Bronx",
            "life-span": {
                "ended": null
            }
        },
        "isnis": [
            "0000000047987667"
        ],
        "life-span": {
            "begin": "1964-03-26",
            "ended": null
        }
    },
    {
        "id": "6a231fdd-160e-40bc-bcd1-76da3c569a3c",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 77,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry Mann",
        "sort-name": "Mann, Barry",
        "gender": "male",
        "country": "US",
        "area": {
            "id": "489ce91b-6658-3307-9877-795b68554c98",
            "type": "Country",
            "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
            "name": "United States",
            "sort-name": "United States",
            "life-span": {
                "ended": null
            }
        },
        "begin-area": {
            "id": "a71b0d32-7752-49e9-8594-2247ad6ac12c",
            "type": "District",
            "type-id": "84039871-5e47-38ca-a66a-45e512c8290f",
            "name": "Brooklyn",
            "sort-name": "Brooklyn",
            "life-span": {
                "ended": null
            }
        },
        "ipis": [
            "00019359863"
        ],
        "isnis": [
            "0000000114624410"
        ],
        "life-span": {
            "begin": "1939-02-09",
            "ended": null
        },
        "aliases": [
            {
                "sort-name": "Barry Man",
                "name": "Barry Man",
                "locale": null,
                "type": null,
                "primary": null,
                "begin-date": null,
                "end-date": null
            },
            {
                "sort-name": "Imberman, Barry",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                "name": "Barry Imberman",
                "locale": null,
                "type": "Legal name",
                "primary": null,
                "begin-date": null,
                "end-date": null
            }
        ]
    },
    {
        "id": "d66067a0-5311-4a5b-8fd5-66558282f737",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 76,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry",
        "sort-name": "Barry",
        "gender": "male",
        "life-span": {
            "ended": null
        }
    },
    {
        "id": "98d08065-7824-461d-a231-d7b0abb6ebe3",
        "type": "Person",
        "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
        "score": 76,
        "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
        "name": "Barry",
        "sort-name": "Barry",
        "gender": "male",
        "disambiguation": "Rappeur fr",
        "life-span": {
            "ended": null
        }
    }
]


for (let index = 0; index < 10; index++) {
    const element = i[index];
    try {
        axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`recording:${encodeURI(element.name)}`,
                fmt:"json",
            },
        })
        .then(data=>{
            console.log(data.data);
        })
        .catch(ee=>{
            console.log(ee);
        })
    } catch (error) {
        console.log(error);
    }
}