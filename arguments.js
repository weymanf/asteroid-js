var sum = function() {
  var sum = 0
  var args = Array.prototype.slice.call(arguments)

  args.forEach(function(num) {
    sum += num;
  });

  return sum;
}

Function.prototype.myBind = function() {
  var f = this;
  var args = Array.prototype.slice.call(arguments);

  return function() {
    var argus = Array.prototype.slice.call(arguments);
    args = args.concat(argus);
    return f.apply(args[0], args.slice(1));
  }
}

var curriedSum = function(n) {
  var i = 0;
  var sum = 0;
  var _curriedSum = function (num) {
    i += 1;
    sum += num;
    if (i === n)
      return sum;
    else
      return _curriedSum;
  }
  return _curriedSum;
};

// var sum = curriedSum(3);
// console.log(sum(4));


Function.prototype.curry = function(numArgs) {
  var f = this
  var args = []
  var _curried = function(argus) {
    args.push(argus)
    if (args.length === numArgs)
      return f.apply(null, args);
    else
      return _curried;
  }
  return _curried;
}

var esum = sum.curry(3);
console.log(esum(4)(1)(5));

