$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    const person1Input = $("input#noun1").val();
    const person2Input = $("input#pastTenseVerb1").val();
    const person3Input = $("input#adverb1").val();
    const person4Input = $("input#adjective1").val();
    const person5Input = $("input#noun2").val();
    const person6Input = $("input#noun3").val();
    const person7Input = $("input#adjective2").val();
    const person8Input = $("input#verb1").val();
    const person9Input = $("input#adverb2").val();
    const person10Input = $("input#pastTenseVerb2").val();
    const person11Input = $("input#adjective3").val();

    const responseArray = [["#userNoun1", person1Input], ["#userPastTenseVerb1", person2Input], ["#userAdverb1", person3Input], ["#userAdjective1", person4Input], ["#userNoun2", person5Input], ["#userNoun3", person6Input], ["#userAdjective2", person7Input], ["#userVerb1", person8Input], ["#userAdverb2", person9Input], ["#userPastTenseVerb2", person10Input], ["#userAdjective3", person11Input]];

    responseArray.forEach(function(responsePair) {
      $(responsePair[0]).text(responsePair[1]);
    });
    

    $("#story").show();
  });
});