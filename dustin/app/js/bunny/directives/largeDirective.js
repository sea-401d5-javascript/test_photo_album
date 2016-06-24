module.exports = function (app) {
  app.directive('largeDirective', function () {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/BunnyApp/large.html',
      scope: {
        img: '=',
        currentImg: '='
      }
    };
  });
};
