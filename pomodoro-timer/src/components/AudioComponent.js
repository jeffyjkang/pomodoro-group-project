import React, { Component } from "react";
import Sound from "react-sound";
import ReactPlayer from "react-player";
// meida err src not supported
// export default class AlertAudio extends Component {
//   render() {
//     return (
//       <Sound
//         url={"https://www.youtube.com/watch?v=pt8VYOfr8To"}
//         playStatus={Sound.status.PLAYING}
//         onLoading={this.handleSongLoading}
//         onPlaying={this.handleSongPlaying}
//         onFinishedPlaying={this.handleSongFinishedPlaying}
//       />
//     );
//   }
// }

class AlertAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=pt8VYOfr8To"
        playing={true}
      />
    );
  }
}

export default AlertAudio;
