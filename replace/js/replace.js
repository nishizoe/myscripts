$(document).ready(function(){
  $('#replace').on('click', function(){
    var inputText = $('#input').val();
    inputText = inputText.replace(/\r\n/g, '<>');
    inputText = inputText.replace(/(\n|\r)/g, '<>');
    var inputValues = inputText.split('<>');

    var replacetext = $('#replaced').val();
    var outputValues = [];
    for (var index in inputValues){
      var replacedtext = replacetext.replace(/%s/g, inputValues[index]);
      outputValues.push(replacedtext);
    }

    $('#output').val(outputValues.join('\r\n'));
  });
});