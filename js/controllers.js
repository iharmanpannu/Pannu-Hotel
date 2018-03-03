angular.module("listApp", []).controller("ListController", [
  "$http",
  function($http) {
    const vm = this;
    let events = [];
    $http
      .get(
        "https://www.eventbriteapi.com/v3/events/search/?token=K3WIYUKJBMKJAKZADRGG&location.address=london+uk"
      )
      .success(function(data) {
        vm.events = data.events;
      });
  }
]);
