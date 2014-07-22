# restful-promise [![NPM version](https://badge.fury.io/js/simple-promise.svg)](http://badge.fury.io/js/restful-promise)

Promise-based RESTful API for node applications.

    $ npm install restful-promise

-------------
Hybrid of [rest-interface](https://github.com/cobbdb/rest-interface) and [simple-promise](https://github.com/cobbdb/simple-promise) libraries - basically a RESTful application interface that operates on promises.

-------------
## Code Samples
Your best resource is the docs for the two parent libraries, but here are some quick code samples to help you get started.

### Define your API
API definition stays exactly the same as it was in rest-interface...

    var api = require('restful-promise');
    module.exports = api({
        get: function (all, your, args, done) {
            // "done" signals that your async behavior
            // has completed.
            done(some, values);
        },
        post: ..,
        put: ..,
        delete: ..
    });

#### Using your API
... the difference is that REST actions are now promises!

    var mycoolapi = require('mycoolapi');
    var out = mycoolapi.put('some', 'args')
        .then(function (result) {
            // do something with result of promise.
        })
        .error(function (err) {
            // do something if an error occurred.
        });
    // Value of "out" will be the return value of the put operation.

---------
* See: http://github.com/cobbdb/restful-promise
* License: MIT
