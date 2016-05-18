/*
app.controller('MainController', ['$scope', '$window', function ($scope, $window, element, attrs) {
         var side = "show-front";
         $scope.side = side;
                angular.element($window, $scope).bind("scroll", function () {
                   var pageLocation = (this.pageYOffset);
                   if(pageLocation >= 0 && pageLocation <= 200){
                        $scope.side = "show-front";
                        console.log("show-front")
                    } else if(pageLocation >= 201 && pageLocation <= 300){
                       $scope.side = "show-back";
                        console.log("show-back")
                    } else if(pageLocation >= 301 && pageLocation <= 400){
                       var side = "show-right";
                        console.log("show right");
                    } else if(pageLocation >= 401 && pageLocation <= 500) {
                      var side = "show-left";
                        console.log("show-left");
                    } else if(pageLocation >= 501 && pageLocation <=600){
                        var side = "show-top";
                        console.log("show-top")
                    } else if(pageLocation >= 601 && pageLocation < 700){
                        var side = "show-bottom"
                        console.log("show-bottom");
                    }
                    
                });
            }
]);

*/
/*
app.directive("scroll", function ($window) {
            return function (scope, element, attrs) {
                angular.element($window).bind("scroll", function () {
                    if (this.pageYOffset >= 100) {
                        console.log(this.pageYOffset);
                        $scope.side("show-front");
                    } else {
                        console.log("scroll working no change");
                    }
                    scope.$apply();
                });
            };
        });
        */

/*  Somewhat working code
        var helper = function (scope, element, attrs) {
                angular.element($window).bind("scroll", function () {
                    var side = "show-front";
                    $scope.side = side;
                    
                    var pageLocation = (this.pageYOffset);
                   if(pageLocation >= 0 && pageLocation <= 200){
                        side = "show-front";
                        console.log("show-front")
                    } else if(pageLocation >= 201 && pageLocation <= 300){
                        side = "show-back";
                        console.log("show-back")
                    } else if(pageLocation >= 301 && pageLocation <= 400){
                        side = "show-right";
                        console.log("show right");
                    } else if(pageLocation >= 401 && pageLocation <= 500) {
                        side = "show-left";
                        console.log("show-left");
                    }
                });
            };
     helper();
        }
]);

*/

/*
app.controller('MainController', ['$scope', '$window', function ($scope, $window, element, attrs) {
         var side = "show-front";
         $scope.side = side;
                angular.element($window).bind("scroll", function () {
                   var pageLocation = (this.pageYOffset);
                   if(pageLocation >= 0 && pageLocation <= 200){
                       var side = "show-front";
                        console.log("show-front")
                    } else if(pageLocation >= 201 && pageLocation <= 300){
                      var side = "show-back";
                        console.log("show-back")
                    } else if(pageLocation >= 301 && pageLocation <= 400){
                       var side = "show-right";
                        console.log("show right");
                    } else if(pageLocation >= 401 && pageLocation <= 500) {
                      var side = "show-left";
                        console.log("show-left");
                    } else if(pageLocation >= 501 && pageLocation <=600){
                        var side = "show-top";
                        console.log("show-top")
                    } else if(pageLocation >= 601 && pageLocation < 700){
                        var side = "show-bottom"
                        console.log("show-bottom");
                    }
                    
                });
            }
]);
*/