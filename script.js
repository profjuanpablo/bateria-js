document.body.addEventListener('keydown',(event) => {
    //console.log(event.code);
    //console.log(event.code.toLowerCase());
    playSound(event.code.toLowerCase());
});


document.querySelector('.composer button').addEventListener('click',() =>{
    let song = document.querySelector('#input').value;
    //console.log("Música", song);

    if(song!== ''){
        let songArray = song.split('');
       // console.log(songArray);
        playComposition(songArray);
    }

})


function playSound(sound){ //com o sound eu alimento a variavel do querySelector
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime=0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }

}

function playComposition(songArray){
    let wait = 0;
    for (let songItem of songArray){
        setTimeout( ()=> {
            playSound(`key${songItem}`);
        },wait);
        wait += 250;

       
    }
}