module.exports = function(app) {
  require('./textDirective')(app);
  require('./thumbDirective')(app);
  require('./largeDirective')(app);
  require('./Album')(app);
};
