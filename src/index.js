module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;

  var openers = [],
      closers = [];

  for (var i=0; i<bracketsConfig.length; i++) {
    openers.push(bracketsConfig[i][0]);
    closers.push(bracketsConfig[i][1]);
  } 
  
  var matchingOpener,
      arrOfBrackets = [];

  for (var i = 0; i < str.length; i++) {
    var bracket = str[i];
    for (var j = 0; j < openers.length; j++) {
      if (bracket == openers[j] && bracket == closers[j]) {
        if (arrOfBrackets.indexOf(bracket) == -1) {
          arrOfBrackets.push(bracket);
        } else {
          matchingOpener = openers[closers.indexOf(bracket)];
          if (arrOfBrackets.pop() != matchingOpener) {
            return false;
          }
        }
      } else {
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
  }
  return arrOfBrackets.length == 0 ? true : false;
}
