var R = require('..');
var eq = require('./shared/eq');


describe('join', function() {
  it("concatenates a list's elements to a string, with an seperator string between elements", function() {
    var list = [1, 2, 3, 4];
    eq(R.join('~', list), '1~2~3~4');
  });

});
