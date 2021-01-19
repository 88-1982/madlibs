$(document).ready(function() {
  $("#formOne").submit(function(event) {
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

   


    $("#story").show();

    event.preventDefault()
  });
});