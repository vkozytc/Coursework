var App = angular.module('App', []);

App.controller('Query', function ($http, $scope) {
    
    this.getFromDB = function getFromDB() {
        $http.get('/phonenumbers/countPhonenumbersByPhoneTypeIsPayPhone').then(function (response) {
            console.log(response);
            document.getElementById("data").innerText = "Результат пошуку:      " +response.data;
        });
    };
});

