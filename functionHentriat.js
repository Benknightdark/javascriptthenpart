var mammal = function(spec) {
  var that = {};
  that.get_name = function() {
    return spec.name;
  };
  that.says = function() {
    return spec.saying || "";
  };
  return that;
};
var myMammal = mammal({ name: "Ben" });
console.log(myMammal.get_name());
console.log(myMammal.says());

var Cat = function(spec) {
  spec.saying = spec.saying || "meow";
  var that = mammal(spec);
  that.purr = function(n) {
    return n;
  };
  that.get_name = function() {
    return that.says() + " " + spec.name + " " + that.says();
  };
  return that;
};
var myCat=Cat({name:"Cat11",saying:'fuck'})
console.log(myCat.get_name())
console.log(myCat.says())
console.log(myCat.purr(5))
