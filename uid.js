(function() {
    var prev = 0;
 
    // took this from Underscore
    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this || {};
 
    function uid() {
        var date = Date.now();
        
        if (date <= prev) {
            date = ++prev;
        } else {
           prev = date;
        }

        return date.toString(16);
    }

    // took this from Underscore
    if (typeof exports !== 'undefined' && !exports.nodeType) {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = uid;
        }
        exports.uid = uid;
    } else {
        root.uid = uid;
    }

    // took this from Underscore
    if (typeof define == 'function' && define.amd) {
        define('uid', [], function() {
            return uid;
        });
    }

    return uid;

}());
