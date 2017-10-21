var paragraph = ''

$(document).ready(function(){
  $('#get').on('click', function(){
    var numP = $('#num-paragraphs').val(),
        numbers = ['0','1','2','3','4','5','6','7','8','9']
    if (numbers.indexOf(numP[0]) !== -1) {
      //To make sure that firing the function does not stack new paragraphs onto old ones
      $('#display').html('')
      numP = parseInt(numP)
      for (i=0; i<numP; i++) {
        generatePar(function(paragraph){
          $('#display').append('<p>'+paragraph+'</p>')
        })
      }
    }
  })
})

function random(){
  return Math.floor(Math.random() * slang.length) + 0
}

function generatePar(callback) {
  var sentences = 7, //Number of sentances per paragraph
      paragraph = '',
      sentenceCount = 0;

  //To generate paragraph, using a for loop here messes with the click function
  while (sentenceCount <= sentences) {
    var numWOrds = Math.floor(Math.random() * (11-5)) + 5,
        sentence = '',
        wordCount = 0;

    //To generate individual sentences
    while (wordCount < numWOrds) {
      var select = random();

      //To ensure proper grammer when a new sentence starts
      if (wordCount === 0 && paragraph !== '') {
        var word = ' ' + capitalize(slang[select])
      } else if (wordCount === 0 && paragraph === ''){
        word = capitalize(slang[select])
      } else {
        word = slang[select]
      }
      sentence += word
      wordCount ++
      if (wordCount === numWOrds) {
        sentence = sentence.slice(0, -1) + '.'
        paragraph += sentence
        sentenceCount ++
      }
    }
  }
  callback(paragraph);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
