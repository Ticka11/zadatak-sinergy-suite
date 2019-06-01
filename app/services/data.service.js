'use strict;'

angular
    .module('app')
    .factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
    return {
        getProducts: getProducts,
        getProductById: getProductById,
        getHeaderData: getHeaderData,
        getFooterData: getFooterData,
        getSideMenuData: getSideMenuData
    };

    function getProducts() {
        return $http.get('fake-server/products.json')
            .then(getProductsComplete)
            .catch(getProductsFailed);

        function getProductsComplete(response) {
            return response.data;
        }

        function getProductsFailed(error) {
            console.log('error on geting products', error);
        }
    }

    function getProductById(id) {
        return $http.get('fake-server/products.json')
            .then(getProductComplete)
            .catch(getProductFailed);

        function getProductComplete(product) {
            return product.data.find(function (product) {
                return product.id == id;
            });
        }

        function getProductFailed(error) {
            console.log('error on geting product', error);
        }

    }

    function getHeaderData() {
        return $http.get('fake-server/header.json')
            .then(getHeaderComplete)
            .catch(getHeaderFailed);

        function getHeaderComplete(header) {
            return header.data;
        }

        function getHeaderFailed(error) {
            console.log('error on geting header data', error);
        }
    }

    function getFooterData() {
        return $http.get('fake-server/footer.json')
            .then(getFooterComplete)
            .catch(getFooterFailed);

        function getFooterComplete(footer) {
            return footer.data;
        }

        function getFooterFailed(error) {
            console.log('error on geting footer data', error);
        }
    }

    function getSideMenuData() {
        return $http.get('fake-server/side-menu.json')
            .then(getSideMenuComplete)
            .catch(getSideMenuFailed);

        function getSideMenuComplete(sideMenu) {
            return sideMenu.data;
        }

        function getSideMenuFailed(error) {
            console.log('error on geting side-menu data', error);
        }

    }



}