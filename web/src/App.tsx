import * as React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getStreams } from "../services/probe.service";
import "./App.less";
import { Input } from "./components/Input";
import { Download, VideoInfo, Process } from "./video";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

interface AppState {
  url: string;
  io: Socket<DefaultEventsMap, DefaultEventsMap>,
  content?: any;
  process: string;
}

class App extends React.Component<{}, AppState> {

  duration: number = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      url: "",
      io: null,
      process: "0",
      content: {}
    }
  }

  componentDidMount() {
    const socketIo = io("http://localhost:8888");

    this.setState({ io: socketIo });

    socketIo.on('connect', () => {
      console.log(socketIo.connected); // true
    });

    socketIo.on("transform", (data) => {
      const exp = new RegExp(/time=(.*?)\s/);
      const time = exp.exec(data);
      if (time) {
        let arr = time[1].split(/[.|:]/);
        let pro = Number(arr[3]) + Number(arr[2]) * 1000 + Number(arr[1]) * 60 * 1000 + Number(arr[0]) * 60 * 60 * 1000;
        let per = ((pro / this.duration) * 100).toFixed(2);
        this.setState({ process: per })
      }

    })

  }

  onSearch = (value: string) => {
    this.setState({ url: value });
    getStreams(value).then((ret) => {
      this.setState({
        content: ret.data.format
      });
      this.duration = ret.data.format.duration * 1000;
    });
  };

  render() {
    return (
      <div className="App">
        <div className="layout">
          <header>Header</header>
          <main>
            <div>
              <Input onSearch={this.onSearch} />
            </div>
            <div className="content">
              <div>
                <SyntaxHighlighter language="json" style={dark}>
                  {JSON.stringify(this.state.content, null, 4)}
                </SyntaxHighlighter>
              </div>
              <Download io={this.state.io} url={this.state.url} />
              <div>
                <VideoInfo data={this.state.content}></VideoInfo>
                <Process data={this.state.process} />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
