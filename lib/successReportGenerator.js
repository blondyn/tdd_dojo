module.exports = function(input) {
   return input.sort(function compare(a, b) {
       return b[1] - a[1];
   });
};