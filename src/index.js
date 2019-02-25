module.exports = function check(str, bracketsConfig) {
  var brackets = str.split('');

  if (brackets.length % 2 != 0) return false;

  var openers = [],
      closers = [];

  for (var i=0; i<bracketsConfig.length; i++) {
    openers.push(bracketsConfig[i][0]);
    closers.push(bracketsConfig[i][1]);
  } 
  
  var matchingOpener,
      arrOfBrackets = [];

  for (var i = 0; i < brackets.length; i++) {
    var bracket = brackets[i];
    for (var j = 0; j < openers.length; j++) {
      if (bracket == openers[j]) {
        arrOfBrackets.push(bracket);
      }
      if (bracket == closers[j]) {
        matchingOpener = openers[closers.indexOf(bracket)];
        if (arrOfBrackets.pop() != matchingOpener) {
          return false;
        }
      }
    }
  }
  return arrOfBrackets.length == 0 ? true : false;
}
