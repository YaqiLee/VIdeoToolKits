import axios from "axios";
import * as React from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { endTransform, startTransform } from "../../services/probe.service";

export interface DownloadProps {
  url: string;
  io: Socket<DefaultEventsMap, DefaultEventsMap>;
}

class Download extends React.Component<DownloadProps> {

  constructor(props: DownloadProps) {
    super(props);
  }

  onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {

    startTransform(this.props.url).then(_ => {
      console.log("close");

    })
  }

  componentDidMount() {
   
  }

  render() {

    return (
      <div>
        <button onClick={this.onClick}>转换MP4</button>
        <div>转换中</div>
      </div>
    )
  }

}
export { Download }