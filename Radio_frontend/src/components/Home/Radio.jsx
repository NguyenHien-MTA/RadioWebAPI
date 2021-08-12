import React from "react";
import { Howl, Howler } from "howler";

// https://github.com/goldfire/howler.js#documentation
// npm i howler
// https://codepen.io/adbo/pen/ryXrQx

const arrays = [
  {
    sound: "https://sandra.epichosts.co.uk:8172/live.mp3",
    lable: "one",
  },
  {
    sound: "https://listen.181fm.com/181-vibe_128k.mp3",
    lable: "two",
  },
  {
    sound: "https://wg.cdn.tibus.net/q102MP3128",
    lable: "three",
  },
  {
    sound: "https://vovstream.1cdn.vn/vovlive/vov2.sdp_aac/playlist.m3u8",
    lable: "four",
  },
];


let sound = null;
function RadioView() {
  const [played, setPlayed] = React.useState(false);

  document.cookie = "cookie2=value2; SameSite=None; Secure";

  const soundPlay = (src) => {
    if (sound == null && played) {
      sound = new Howl({
        src,
        html5: true,
      });
      Howler.volume(0.5);
    }
  };

  if (sound != null) {
    if (played) {
      alert("pasue");
      sound.stop();
      sound.unload();
      sound = null;
    } else {
      alert("play");
      sound.play();
    }
  }

  let playViewer = arrays.map((array, index) => { //thay array = num
    return (
      <div>
        <button key={index} onClick={() => soundPlay(array.sound,setPlayed(!played))}>
          {array.lable}
        </button>
      </div>
    );
  });
  return <div>{playViewer}</div>;
}

function TableAudio() {
  let play = false;
  const PlayRadio = () => {
    console.log(play);
    play = !play;
    var player = document.getElementById("radioPlayer");
    if (play) {
      alert("play");
      player.src = "https://wg.cdn.tibus.net/q102MP3128";
      player.play();
      player.volume = 1.0;
    } else {
      player.pause();
    }
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <audio
                id="radioPlayer"
                src="https://wg.cdn.tibus.net/q102MP3128"
                autoplay="false"
              ></audio>
              <input
                type="button"
                value="Play"
                onClick={() => PlayRadio()}
              ></input>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>bbbb</td>
            <td>abc</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RadioView;
export { TableAudio };
