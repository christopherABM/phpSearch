<?php
class Data
{
  static public function search($keyword)
  {
    $data = json_decode(file_get_contents('./keyword.json'), true);
    return Data::filter(preg_quote(strtoupper($keyword), '~'), $data);
  }

  static private function filter($keyword, $data)
  {
    $results = [];
    $original = [];
    foreach ($data as $object) {
      $original = $object;
      $object = array_flip(($object));
      $object = array_change_key_case($object, CASE_UPPER);
      $object = array_flip($object);
      if (preg_grep('~' . $keyword . '~', $object)) {
        array_push($results, $original);
      }
    }
    return $results;
  }
}
