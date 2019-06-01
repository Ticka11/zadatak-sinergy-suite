angular.module("app").config(config);

function config($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/products', {
            templateUrl: './components/product-list/product-list.html',
            controller: 'ProductListController',
            controllerAs: 'vm',
        });
    $routeProvider
        .when('/products/:id', {
            templateUrl: './components/product-details/product-details.html',
            controller: 'ProductDetailsController',
            controllerAs: 'vm',
        });
    $routeProvider
        .otherwise({
            templateUrl: "./components/product-list/product-list.html",
            controller: 'ProductListController',
            controllerAs: 'vm',
        });

    



}
