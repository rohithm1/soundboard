playSound();

function playSound() {
    var cNote = document.getElementById('cAudio');
    if (cNote == null){
        console.log("p");
    }
    else {
        console.log("q");
    }
    $('.c').mousedown(function(){
        cNote.currentTime = 0;
        cNote.onplay();
    });
}