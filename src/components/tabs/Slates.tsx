import { useState } from "react";
// import "../styles/tab.scss";
// import "./tab.scss";

function Slate() {
  const [toggleState, setToggleState] = useState(1);

  const toggleSlate = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-i">
      <div className="bloc-tabs1">
        <button
          className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleSlate(1)}
        >
          Business Name
        </button>
        <button
          className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleSlate(2)}
        >
          Company Registeration
        </button>
        <button
          className={toggleState === 3 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleSlate(3)}
        >
          NGO Registeration
        </button>
        <button
          className={toggleState === 4 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleSlate(4)}
        >
          Tax
        </button>
      </div>

      <div className="contentt-tabs1">
        <div
          className={
            toggleState === 1 ? "contentt  active-contentt" : "contentt"
          }
        >
          {/* <hr /> */}
        </div>

        <div
          className={
            toggleState === 2 ? "contentt  active-contentt" : "contentt"
          }
        >
          {/* <hr /> */}
        </div>

        <div
          className={
            toggleState === 3 ? "contentt  active-contentt" : "contentt"
          }
        >
          <h2>Content 3</h2>
          {/* <hr /> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>

        <div
          className={
            toggleState === 4 ? "contentt  active-contentt" : "contentt"
          }
        >
          {/* <hr /> */}
          <p>cont</p>
        </div>
      </div>
    </div>
  );
}

export default Slate;
