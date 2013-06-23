var mongoose = require('mongoose'),
  troop = require('mongoose-troop');

var experimentSchema = new mongoose.Schema({
    name: String,
    running: { type: Boolean, "default": false }
});

experimentSchema.plugin(troop.timestamp, { useVirtual: false });
experimentSchema.plugin(troop.pagination);

module.exports = mongoose.model('Experiment', experimentSchema);
