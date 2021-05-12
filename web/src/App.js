import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getStreams } from "../services/probe.service";
import "./App.less";
import { Input } from "./components/Input";
class App extends React.Component {
  state = {
    content: ""
  };

  onSearch = (value) => {
    getStreams(value).then((ret) => {
      this.setState({
        content: `${ret.data}`,
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
                  {this.state.content}
                </SyntaxHighlighter>
              </div>
              <div></div>
            </div>
          </main>
        </div>
        {/* <Layout>
          <Header>Header</Header>
          <Content>
            <div>
              <Search
                placeholder="input url text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={this.onSearch}
              />
            </div>
            <div className="content">
              <div>
                <SyntaxHighlighter language="json" style={vs}>
                  {this.state.content}
                </SyntaxHighlighter>
              </div>
              <div></div>
            </div>
          </Content>
        </Layout> */}
      </div>
    );
  }
}

export default App;
