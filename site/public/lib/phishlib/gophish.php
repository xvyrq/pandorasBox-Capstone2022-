<?php

$url = "https://45.56.126.232:3333/api/groups";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Authorization: Bearer 5caca5184bdafafa1d9fb4d1d89947d58f4d2f2ffa684e4645fd00a41a992630",
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$data = <<<DATA
{
    "name": "Example Group",
    "targets": [
    {
        "email": "kiritoassualt@gmail.com",
        "first_name": "Example",
        "last_name": "User",
        "position": ""
    }
    ]
}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);

?>
