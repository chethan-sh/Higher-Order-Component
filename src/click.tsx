import "./styles.css";
import Hoc from "./hoc";
import React from "react";
interface IProps {
  count: number;
  handle: () => void;
}
class Click extends React.Component<IProps> {
  render() {
    const { count, handle } = this.props;
    return (
      <div className="App">
        <button onClick={handle}>Click me{count}</button>
      </div>
    );
  }
}

export default Hoc(Click);
