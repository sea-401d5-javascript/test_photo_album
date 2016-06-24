module.exports = function (app) {
  app.directive('album', function () {
    return {
      templateUrl: './templates/BunnyApp/album.html',
      scope: {
        photoalbum: '=',
        mode: '='
      },
      controller: function ($scope) {
        $scope.closeLarge = function () {
          console.log('hit', $scope);
        };

      },
      link: function(scope, elem, attr, controller) {

        scope.showImage = function(img) {
          controller.currentImg = img;
        };
        scope.$watch(function(){
          return controller.currentImg;
        }, function(){
          scope.currentImg = controller.currentImg;
        });
      },

      require: '^ngController'
    };
  });
};
