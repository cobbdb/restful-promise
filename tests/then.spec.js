describe('restful-promise', function () {
    var api = require('../src/api.js');
    describe('then task', function () {
        it('is called after promise', function (done) {
            var res = api({
                put: function (msg, punc, done) {
                    done(msg + 123 + punc);
                }
            });
            res.put('xyz', '?')
                .then(function (msg) {
                    expect(msg).toEqual('xyz123?');
                    done();
                }).run();
        });
    });
});
