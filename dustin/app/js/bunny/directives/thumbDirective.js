module.exports = function (app) {
  app.directive('thumbDirective', function () {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/BunnyApp/thumb.html',
      scope: {
        img: '='
      }
    };
  });
};
