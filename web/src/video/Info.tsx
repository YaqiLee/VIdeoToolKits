import * as React from "react";
import "./info.less"
export interface VideoInfoProps {
  data: any;
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
        <tbody>
          <tr>
            <td>封装格式</td>
            <td>{this.props.data.format_name}</td>
            <td>时长</td>
            <td>{this.props.data.duration}</td>
            <td>大小</td>
            <td>{ this.props.data?.size && 1 * this.props.data.size / 1024 / 1024 }</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
