import React from "react";
import { Col, Input, Layout, Row } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { getStreams } from "../services/probe.service";

class App extends React.Component {
  state = {
    content: "",
    str: `function createStyleObject(classNames, style) {
      return classNames.reduce((styleObject, className) => {
        return {...styleObject, ...style[className]};
      }, {});
    }`
  };

  onSearch = (value) => {
    getStreams(value).then((ret) => {
      this.setState({
        content: `
        ${ret.data}
      `,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
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
            <div>
              <Row>
                <Col span={12}></Col>
                <Col span={12}>
                <SyntaxHighlighter language="json" style={vs}>
                    {this.state.content}
                    </SyntaxHighlighter>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
