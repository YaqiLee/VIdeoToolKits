import * as React from "react";

export interface ProcessProps {
  data: any;
}


class Process extends React.Component<ProcessProps, any> {

  constructor(props: ProcessProps) {
    super(props);
  }

  render() {
    return <div>
      { this.props.data }
    </div>
  }
}

export { Process }