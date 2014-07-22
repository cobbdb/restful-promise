describe('restful-promise', function () {
    var api = require('../src/api.js');
    describe('constructor', function () {
        it('can create an empty api', function () {
            var res = api();
            expect(res.get).toBeDefined();
            expect(res.put).toBeDefined();
        });
        it('can define some actions', function (done) {
            var res = api({
                delete: function (num, punc) {
                    return 'abc' + num + punc;
                }
            });
            expect(function () {
                var msg = res.delete(321, '$').run();
                expect(msg).toEqual('abc321$');
                done();
            }).not.toThrow();
        });
    });
});
