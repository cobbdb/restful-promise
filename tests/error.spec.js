describe('restful-promise', function () {
    var api = require('../src/api.js');
    describe('errors', function () {
        it('throw when undefined', function () {
            var smoke = false;
            try {
                var res = api();
                res.get().run();
            } catch (err) {
                expect(err.name).toEqual(
                    'UnimplementedAPIActionError'
                );
                smoke = true;
            }
            expect(smoke).toBe(true);
        });
        it('throw APIError when undefined', function (done) {
            var res = api();
            res.get().error(function (err) {
                expect(err.name).toEqual(
                    'UnimplementedAPIActionError'
                );
                done();
            }).run();
        });
        it('can throw when partially defined', function () {
            var smoke = false, res;
            try {
                res = api({
                    post: function (num, punc) {
                        return 'abc' + num + punc;
                    }
                });
                res.put().run();
            } catch (err) {
                expect(err.name).toEqual(
                    'UnimplementedAPIActionError'
                );
                smoke = true;
            }
            expect(smoke).toBe(true);
        });
    });
});
