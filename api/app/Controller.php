<?php
require_once __DIR__ . '/Data.php';

class ApiController
{
  function resolveSearch($keyword)
  {
    if (!$keyword) {
      return json_encode([]);
    }
    return json_encode(Data::search($keyword));
  }
}
