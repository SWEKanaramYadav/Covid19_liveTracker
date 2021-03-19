const url = "https://covid19.mathdro.id/api";
let app = angular
  .module("myApp", [])
  .controller("myCtrl", function ($scope, $http) {
    $scope.title = "Stay Home Stay Safe";

    //   $scope.changeValue = () => {
    //     $scope.title = "This is Home Time";
    //   };

    $http.get(url).then(
      (response) => {
        console.log(response);
        $scope.all_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
    // let input_country_data = undefined;
    // get input_country data
    $scope.get_country_data = () => {
      let country = $scope.input_country;
      if (country == "") {
        $scope.input_country_data = undefined;
        return;
      }
      $http.get(`${url}/countries/${country}`).then(
        (response) => {
          console.log(response.data);
          $scope.input_country_data = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    };
  });
