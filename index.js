console.log('hi') // test of js werkt 

const playButton = document.querySelector('.play-button'); //zoekt button
const audio = document.querySelector('.audio'); //zoekt mp3 audio

let isPlayingaudio = false; //speelt geen muziek af: false
playButton.textContent = 'play'; //er staat play, omdat er geen audio afspeelt

playButton.addEventListener('click', function () { //klik je op de button? dan word de code onderin uitgevoerd
    if (isPlayingaudio) {
        audio.pause();
        playButton.textContent = 'play'; //de knop veranderd naar play, omdat audio is gepauzeerd
    } else {
        audio.play();
        playButton.textContent = 'pause'; //de knop veranderd naar pause, omdat er audio afspeelt
    }

    if (isPlayingaudio) {
        isPlayingaudio = false; //audio stopt 

    } else {
        isPlayingaudio = true; //audio speelt af
    }
});

document.querySelector('.lyrics-button').addEventListener('click', function() {
    let lyrics = document.querySelector('.lyrics');
    
    if (lyrics.style.display == 'none') { //lyrics niet zichtbaar 
        lyrics.style.display = 'block'; //lyrics zichbaar in display block
    } else {
        lyrics.style.display = 'none'; //tekst zichtbaar + klikken? dan lyrics weg
    }
});

// bronvermelding javascript:

//W3Schools.com. (z.d.). https://www.w3schools.com/jsref/dom_obj_audio.asp
//W3Schools.com. (z.d.-b). https://www.w3schools.com/jsref/dom_obj_pushbutton.asp
//https://chatgpt.com/share/bf26c6f6-a230-49a3-8e0b-555a088a1b2c
//https://chatgpt.com/share/c6bb9851-76f3-4027-a558-02390ffe7a53
// https://chatgpt.com/share/193cce04-a0c4-4c66-a0b7-2a4a172f9ce1