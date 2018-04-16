var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (col, vals, cb) {
    orm.create("burgers", col, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burgers;