import "./App.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Img from "./Img";
import { useState } from "react";

function App() {
  const [angleX, setAngleX] = useState(0);
  const [angleY, setAngleY] = useState(0);
  let x_origin = 1535 / 2;
  let y_origin = 696 / 2;

  return (
    <div
      className="App"
      onMouseMove={(event) => {
        setAngleX(event.clientY-y_origin);
        setAngleY(x_origin-event.clientX);
        console.log(event.clientY-y_origin,event.clientX-x_origin);
      }}
    >
      <Sidebar />
      <Body embedId="i1u2M5ZP0Nk" />
      <Img x={angleX} y={angleY} />
    </div>
  );
}

export default App;
