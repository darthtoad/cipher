var sentence = prompt("How was your Holiday weekend?");
alert(sentence);

function grammar(sentence) {
  alert(sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length - 1).toUpperCase());
};

//grammar(sentence);

function grammar2(sentence) {
  alert(sentence.charAt(sentence.length - 1).toUpperCase() + sentence.charAt(0).toUpperCase());
};

//grammar2(sentence);

function callGrammar(sentence) {
  grammar(sentence);
  grammar2(sentence);
};

callGrammar(sentence);

function grammar3(sentence) {
  alert(sentence + sentence.charAt(sentence.length - 1).toUpperCase() + sentence.charAt(0).toUpperCase());
};

grammar3(sentence);

function grammar4(sentence) {
  alert(sentence.charAt(parseInt(sentence.length / 2)) + sentence + sentence.charAt(sentence.length - 1).toUpperCase() + sentence.charAt(0).toUpperCase());
};

grammar4(sentence);

function grammar5(sentence) {
  finalSentenceOriginal = sentence.charAt(parseInt(sentence.length / 2)) + sentence + sentence.charAt(sentence.length - 1).toUpperCase() + sentence.charAt(0).toUpperCase();
  finalSentenceSplit = finalSentenceOriginal.split("");
  finalSentenceReverse = finalSentenceSplit.reverse();
  finalSentence = finalSentenceReverse.join("");
  return finalSentence;
};

alert(grammar5(sentence));

$(document).ready(function(){
  $("#coffee").click(function() {
  alert(sentence);
  });

  $("#ted-danson").click(function() {
  alert(grammar5(sentence));
  });
});
