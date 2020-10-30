<?php
require_once __DIR__ . '/Controller.php';

class Routes
{
  static public function resolver()
  {
    switch ($_SERVER['REQUEST_METHOD']) {
      case 'GET':
        return Routes::get($_SERVER['PATH_INFO']);
      default:
        return json_encode(["error" => "nothing here"]);
    }
  }

  static private function get($route)
  {
    switch ($route) {
      case '/':
        return 'Welcome';
      case '/search':
        return (new ApiController())->resolveSearch($_GET['keyword']);
      default:
        return json_encode(["error" => "nothing here"]);
    }
  }
}
