module.exports = function (app) {
  app.controller('AlbumController', ['$scope', function () {
    this.currentImg = '';
    this.capybara = {
      title: 'Capybara',
      description: 'This oversized rodent is known as the royal rat and is delicacy in some countries',
      imgs: ['http://www.zooborns.com/.a/6a010535647bf3970b01a3fd3d706c970b-800wi', 'http://www.dallasnews.com/incoming/20130712-garl001.jpg.ece/BINARY/w595x467/garl001.JPG', 'http://cdnph.upi.com/sv/b/i/UPI-8881457961830/2016/1/14579619634913/Cheeky-squirrel-monkey-hitches-ride-on-capybaras-back.jpg']
    };

    this.nutria = {
      title: 'Orange-Tooted Nutria',
      description: 'This pesky rodent has destructive feeding and burrowing behaviors making this invasive species a pest throughout most of its range.',
      imgs: ['https://animalreview.files.wordpress.com/2010/05/istock_000007010601small.jpg?w=500&h=334','http://wdfw.wa.gov/living/species/graphics/nutria2.jpg', 'https://animalreview.files.wordpress.com/2010/05/istock_000012445843small.jpg']
    };

    this.waterbear = {
      title: 'Water Bear',
      description: 'The microscopic animal can live in the vaccumm of space and can go without food or water for more than 30 years ',
      imgs: ['http://i.dailymail.co.uk/i/pix/2015/09/04/20/2BFAE49700000578-0-image-a-54_1441396164272.jpg', 'http://www.wpclipart.com/animals/T/tardigrade_aka_water-bear.png','http://i.dailymail.co.uk/i/pix/2013/02/18/article-2280286-17A3F2D5000005DC-384_634x537.jpg']
    };

  }]);
};
