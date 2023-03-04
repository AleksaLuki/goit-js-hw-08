import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

console.log(Player);

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onProgress({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

player.on('timeupdate',throttle(onProgress,1000));

const storedTime = localStorage.getItem("videoplayer-current-time");
  if(storedTime) {
    player.setCurrentTime(storedTime)
  }