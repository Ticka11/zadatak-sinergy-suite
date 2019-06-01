angular
        .module('app')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['dataService'];

    function FooterController(dataService) {
        var vm = this;
        vm.footer = {};

        activate();

        function activate() {
            return getFooterData().then(function () {
            });
        }

        function getFooterData() {
            return dataService.getFooterData()
                .then(function (data) {
                    vm.footer = data;
                    return vm.footer;
                });
        }

    }
