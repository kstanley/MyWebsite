var app = angular.module("myApp", []);


//directive to show cube face using scroll position
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      
        angular.element($window).bind("scroll", function() {
            var pageLocation = this.pageYOffset;
            console.log(pageLocation);
             if(pageLocation >= 0 && pageLocation <= 100){
                        scope.side = "show-front";
                        console.log("show-front");
                    } else if(pageLocation >= 101 && pageLocation <= 200){
                       scope.side = "show-back";
                        console.log("show-back");
                    } else if(pageLocation >= 201 && pageLocation <= 300){
                        scope.side = "show-right";
                        console.log("show right");
                    } else if(pageLocation >= 301 && pageLocation <= 400) {
                        scope.side = "show-left";
                        console.log("show-left");
                    } else if(pageLocation >= 401 && pageLocation <=500){
                        scope.side = "show-top";
                        console.log("show-top");
                    }  else if(pageLocation >= 501){
                        scope.side = "show-bottom";
                        console.log("show-bottom");
                    }
            scope.$apply();
        });
    };
});



               