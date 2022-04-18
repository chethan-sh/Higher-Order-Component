import React from "react";
import "./styles.css";

interface IState {
  count: number;
}
const Hoc = (Comp: any) => {
  class NewComp extends React.Component<any, IState> {
    constructor(props: any) {
      super(props);
      this.changeCount = this.changeCount.bind(this);
      this.state = {
        count: 0
      };
    }
    changeCount() {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
    render(): JSX.Element {
      return <Comp handle={this.changeCount} count={this.state.count} />;
    }
  }
  return NewComp;
};

export default Hoc;
