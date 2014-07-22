var promise = require('simple-promise');
var api = require('rest-interface');
var _ = require('underscore');

var getPromise = function (task) {
    return function () {
        var args = _(arguments).values();
        return promise(function () {
            return task.apply(this, args);
        });
    };
};

module.exports = function (opts) {
    var child;
    opts = opts || {};
    child = api(opts);
    return {
        get: getPromise(child.get),
        post: getPromise(child.post),
        put: getPromise(child.put),
        delete: getPromise(child.delete)
    };
};
