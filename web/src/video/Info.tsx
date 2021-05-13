import * as React from "react";
import { AudioStream, VideoStream } from "./types";

export interface VideoInfoProps {
  data: VideoStream | AudioStream;
}

export class VideoInfo extends React.Component<VideoInfoProps> {

  _data;

  constructor(props: VideoInfoProps) {
    super(props);
    this._data = this.props.data;
  }

  render() {
    return (
      <table>
        <tr>
          <td>编码</td>
          <td>{this._data.codec_name}</td>
        </tr>
      </table>
    )
  }
}
