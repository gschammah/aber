var experimentController = require('../app/controllers/experiments_controller');

module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        res.render('index', { title: 'aber' });
    });

    // Experiments
    app.get('/experiments', experimentController.index);
};
