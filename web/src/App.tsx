import * as React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getStreams } from "../services/probe.service";
import "./App.less";
import { Input } from "./components/Input";
import { VideoInfo } from "./video";

interface AppState {
  content?: any;
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      content: []
    }
  }

  onSearch = (value: string) => {
    getStreams(value).then((ret) => {
      this.setState({
        content: ret.data.streams
      });
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
              <div>
                {
                  this.state.content.map((d: any) => {
                    return <VideoInfo data={d} ></VideoInfo>
                  })
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
