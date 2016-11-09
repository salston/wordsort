/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


$(document).ready(function () {

    // set up and shuffle the arrays
    var headings = ["ng", "mp"]
    var words = ["rang", "jump", "king", "camp", "song", "bump", "sing", "rung", "lamp", "limp", "sang", "ring", "pump", "gang", "ramp", "bring", "wing", "swing", "stamp", "long", "stump", "lump", "thing", "plump"];
    headings = shuffleArray(headings);
    words = shuffleArray(words)

    // create the sortboxes
    $.each(headings, function(index, value) {
        $(".wrapper").append("<div class='sortbox' name="+value+"><div class='keywordbox'><p>"+value+"</p></div></div>");

    });
     var w = $(document).width();
    w = (w/headings.length) - 15;
    $(".sortbox").width(w);  

    $.each(words, function( index, value ) {  
      $(".bottombox").append("<div class='wordbox'><p>"+value+"</p></div>");
    });
    
    
    $(".wordbox").draggable();

});
