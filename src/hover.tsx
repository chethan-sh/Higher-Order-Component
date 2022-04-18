import "./styles.css";
import Hoc from "./hoc";
interface IProps {
  count: number;
  handle: () => void;
}
function Hover(props: IProps) {
  const { count, handle } = props;
  return (
    <div className="App">
      <p onMouseEnter={handle}>hover me{count}</p>
    </div>
  );
}

export default Hoc(Hover);
