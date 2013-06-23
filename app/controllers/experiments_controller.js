var Experiment = require('../models/experiment');

exports.index = function(req, res) {

  Experiment.paginate({ page: 1 }, function(err, docs, count, pages, current) {
    res.render('experiments/index', { experiments: docs });
  });

};
