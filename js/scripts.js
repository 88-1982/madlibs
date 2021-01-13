$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#noun").val()
    const person2Input = $("input#verb-past-tense1").val()
    const person3Input = $("input#adverb1").val()
    const person4Input = $("input#adjective1").val()
    const person5Input = $("input#noun2").val()
    const person6Input = $("input#noun3").val()
    const person7Input = $("input#adjective2").val()
    const person8Input = $("input#verb1").val()
    const person9Input = $("input#verb-past-tense2").val()
    const person10Input = $("input#adjective2").val()
    
    $("input#noun").text(person1Input)
    $("input#verb-past-tense1").text(person2Input)
    $("input#adverb1").text(person3Input)
    $("input#adjective1").text(person4Input)
    $("input#noun2").text(person5Input)
    $("input#noun3").text(person6Input)
    $("input#adjective2").text(person7Input)
    $("input#verb1").text(person8Input)
    $("input#verb-past-tense2").text(person9Input)
    $("input#adjective2").text(person10Input)


    $("#story").show();

    event.preventDefault()
  });
});

// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     const person1Input = $("input#person1").val();
//     const person2Input = $("input#person2").val();
//     const animalInput= $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const nounInput = $("input#noun").val();

//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();

//     event.preventDefault();
//   });
// });