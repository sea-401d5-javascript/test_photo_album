'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const albumTemplate = require('../app/templates/BunnyApp/album.html');

const largeTemplate = require('../app/templates/BunnyApp/large.html');

describe('Animal tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;
  //let $controller;
  let AlbumController;

  beforeEach(() => {
    angular.mock.module('BunnyApp');
    angular.mock.inject(function (_$httpBackend_, $rootScope, _$compile_, $controller) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;

      AlbumController = $controller('AlbumController', {$scope: $scope});
    });
  });


  it('should check the laws of the universe', () => {
    expect(true).toBe(true);
    //console.log(AlbumController);
  });

  // it('should check the album directive', () => {
  //   $httpBackend.expectGET('./templates/BunnyApp/album.html')
  //     .respond(200, albumTemplate);
  //   $scope.alb = 'dfds';
  //   $scope.AlbumController = AlbumController;
  //   let element = angular.element('<div ng-controller="AlbumController as albumctrl"></div>');
  //   element.data('$AlbumController',{});
  //
  //   let link = $compile('<div ng-controller="AlbumController as albumctrl"></div>');
  //   let directive = link($scope);
  //   $scope.$digest();
  //   $httpBackend.flush();
  //   console.log("D1",directive);


  //  $scope.data = [{body:'test'},{body:'test2'}];

    // let link2 = $compile('<album mode="\'thumbnail\'" photoalbum="data"></album>');
    // let directive2 = link2($scope);
    // $scope.$digest();
    // $httpBackend.flush();
    //
    // console.log("D2",directive2);

  //});

  it('should correctly output large images', () => {
    $httpBackend.expectGET('./templates/BunnyApp/large.html')
      .respond(200, largeTemplate);
    $scope.imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    $scope.currentImg = false;
    let link = $compile('<large-directive ng-repeat="img in imgs" img="img" current-img="currentImg"></large-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();
    console.log(directive);
  });

});
