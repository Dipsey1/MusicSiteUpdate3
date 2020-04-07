const player = document.getElementById("MusicPlayer");
console.log(player);
function playAndPause(file) {
    if (file != undefined) {
        if(file != document.getElementById('song').src) {
            document.getElementById('song').src = file;
            player.load();
            document.getElementById('now_playing').innerHTML = 'you are listening: ' + file + ' (click to stop)';
            player.play();
        } else {
            if (player.paused) {
                document.getElementById('now_playing').innerHTML = 'you are listening: ' + file + ' (click to stop)';
                player.play();
            } else {
                document.getElementById('now_playing').innerHTML = '';
                player.pause();
            }
        }
    } else {
        document.getElementById('now_playing').innerHTML = '';
        player.pause();
    }
}

function play(file){
    if (file != undefined) {
        if(file != document.getElementById('song').src) {
            document.getElementById('song').src = file;
            player.load();
            document.getElementById('now_playing').innerHTML = 'you are listening: ' + file + ' (click to stop)';
            player.play();
        }
    }
}

function stop(){
    document.getElementById('now_playing').innerHTML = '';
    player.pause();
}















// const player = document.getElementById("MusicPlayer");
// console.log(player);


// function playAndPause( ) {
//   if (player.paused) {
//     player.play();
//   } else {
//     player.pause();
//   }
// }


