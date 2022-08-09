const newsRouter = require('./news');
const siteRouter = require('./site');

module.exports = function route(app) {

    app.use('/news', newsRouter);
    app.use('/', siteRouter);


}