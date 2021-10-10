var app = angular.module('cats', []);

app.controller('meuController', meuController);

function meuController($scope, $http) {
  $scope.titulo = "Cats";
  $scope.raca = [];
  $scope.buscarRaca = [];
  $scope.imagensGatos = [];

  /*Buscar por raças*/
  $scope.buscarPorRaca = function (racaBuscada) {
    $http
      .get(
        'https://api.thecatapi.com/v1/breeds/search?q='+racaBuscada
      )
      .success(function (dados) {
        console.log("pesquisa", dados)
        $scope.buscarRaca = dados;
     });
  };

  /*Listar raças*/
  $scope.listarRacas = function () {
    $http
      .get(
        'https://api.thecatapi.com/v1/breeds?limit=18'
      )
      .success(function (dados) {
        console.log("raças", dados)
        $scope.raca = dados;
     });
  };

  /*Image*/
  $scope.imagensDeGatos = function () {
    $http
      .get(
        'https://api.thecatapi.com/v1/images/search?limit=1'
      )
      .success(function (dados) {
        console.log("imagens", dados)
        $scope.imagensGatos = dados;
     });
  };

  $scope.carregarDados = function () {
    $scope.listarRacas();
    $scope.imagensDeGatos();
  };
}
