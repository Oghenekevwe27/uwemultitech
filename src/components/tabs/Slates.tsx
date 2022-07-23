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
          <p>Also known as ventures / enterprise</p>
          <p>
            According to CAC a Business Name means the name and style under
            which a business is carried on.
          </p>
          <p>
            A Business Name may be a Sole Proprietorship or a Partnership. It is
            a Sole Proprietorship if it is carried on by an Individual or a
            Corporate Body solely. It is a Partnership if it is carried on by
            two or more Individuals or Corporate Bodies or a combination of
            Individuals and Corporate Bodies. A Business Name does not enjoy
            legal personality. It is not separate from the proprietor or
            partners for the purpose of liability. The liability of the
            proprietor or partners in a Business Name is not limited.
          </p>
          {/* <hr /> */}
        </div>

        <div
          className={
            toggleState === 2 ? "contentt  active-contentt" : "contentt"
          }
        >
          <p>
            A Company is a business arrangement which enjoys legal personality.
            It is a corporate body and separate from its members (owners). The
            liabilities of members (owners) of a Company may be limited by
            shares or guarantee or may be unlimited. A Company may be public or
            private. The name of a Company must end with the word “Limited” or
            “Limited by Guarantee” or “Unlimited” or their abbreviations (“Ltd
            or PLC” or “Unltd” or “Ltd/Gte”)
          </p>
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
            An Incorporated Trustees is the registered trustees of a
            Not-for-Profit Association. The objects of the Association must be
            religious, educational, literary, scientific, social, developmental,
            cultural, sporting or charitable. The Trustees are the legal
            representatives of the Association and can acquire property, sue and
            be sued in the name of the Association. The Trustees are subject to
            the directions of the Association and its Governing Council (if
            any).
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
