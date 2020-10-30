<?php
require_once __DIR__ . '/app/Routes.php';

$response = Routes::resolver();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo $response;
