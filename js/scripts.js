var dinosaur = 'triceratops';
var replacement = dinosaur.toUpperCase();
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var text2 = text.replace('Velociraptor', '');
var replacedText = (replacement + text2);
var numberChars = replacedText.length/2;
var halfOftext = replacedText.slice(0, numberChars);
console.log(halfOftext);
