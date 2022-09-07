module.exports = function (app) {
  app.use('/', require('./HomeRoutes'));


  app.use(function onError(err, req, res, next) {
    res.statusCode = 500;
    res.end(err + '\n');
  });
}