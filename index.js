let endTime = document.getElementById('endTime');
let startTime = document.getElementById('startTime');
let musicPhoto = document.querySelector('.music-photo');
let audio = document.getElementById('audio');
let name = document.getElementById('name');
let author = document.getElementById('author');
let prev = document.querySelector('.prev');
let playPause = document.querySelector('.play');
let next = document.querySelector('.next');
let backward=  document.querySelector('.backward');

const musicList = [
    {
        name : 'Blinding Lights',
        author: 'The Weeknd',
        musicUrl: './music/the-weeknd-blinding-lights.mp3',
        image : 'imageURL',
        time : 2000
    }, 
    {
       name: 'Anchor',
       author: 'Novo Amor',
       musicUrl: './music/Novo Amor - Anchor.mp3',
       image : 'imageURL',
       time : 2000
    },
    {
        name: 'Heather',
        author: 'Conan Grey',
        musicUrl: './music/Conan Gray - Heather.mp3',
        image : 'imageURL',
        time : 2000
    },
]


playPause.addEventListener('click', function() {
        audio.play();
        
});