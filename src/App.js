import { useEffect, useState } from "react";
import "./app.css";
import { findByLabelText } from "@testing-library/react";

function App() {
  return (
    <div>
      <Buttons />
    </div>
  );
}

function Buttons() {
  const elements = ["✊", "🖐️", "✌️"];
  const [icon, setIcon] = useState(null);
  const [iconPc, setIconPc] = useState(null);
  const [point, setPoint] = useState(0);
  const [pointPc, setPointPc] = useState(0);

  useEffect(() => {
    checkWin();
  }, [icon, iconPc]);

  function toggleRock() {
    setIcon("✊");
    setIconPc(Random);
  }

  function togglePaper() {
    setIcon((c) => "🖐️");
    setIconPc(Random);
  }

  function toggleSciss() {
    setIcon((c) => "✌️");
    setIconPc(Random);
  }

  function handleReset() {
    setIcon("");
    setIconPc("");
    setPoint(0);
    setPointPc(0);
  }

  function handleRandom() {
    setIcon(Random);
    setIconPc(Random);
  }

  function Random() {
    return elements[Math.floor(Math.random() * elements.length)];
  }

  function checkWin() {
    if (
      (icon === "✊" && iconPc === "✌️") ||
      (icon === "🖐️" && iconPc === "✊") ||
      (icon === "✌️" && iconPc === "🖐️")
    ) {
      setPoint((point) => point + 1);
    }
    if (
      (icon === "✊" && iconPc === "🖐️") ||
      (icon === "🖐️" && iconPc === "✌️") ||
      (icon === "✌️" && iconPc === "✊")
    ) {
      setPointPc((pointPc) => pointPc + 1);
    }
  }

  return (
    <div>
      {point !== 5 && pointPc !== 5 ? (
        <div className="all-buttons">
          <button className="btn" onClick={toggleRock}>
            ✊
          </button>
          <button className="btn" onClick={togglePaper}>
            🖐️
          </button>
          <button className="btn" onClick={toggleSciss}>
            ✌️
          </button>
        </div>
      ) : null}

      <div className="players">
        <h1 className="icons">
          {point === 5 ? "🏆" : null}P1:{icon}
        </h1>
        <h1 className="icons">
          PC:{iconPc}
          {pointPc === 5 ? "🏆" : null}
        </h1>
      </div>
      <div className="point">
        <h1 style={{ color: "antiquewhite" }}>
          {point} : {pointPc}
        </h1>
      </div>
      <p className="won">
        {point === 5
          ? "YOU WIN 🏆🏆🏆🏆"
          : pointPc === 5
          ? "YOU LOST 😭😭😭😭"
          : ""}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {point !== 5 && pointPc !== 5 ? (
          <RandomForPlayer handleRandom={handleRandom} />
        ) : null}
        <ResetBtn handleReset={handleReset} />
      </div>
    </div>
  );
}

function ResetBtn({ handleReset }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button className="button-24" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
function RandomForPlayer({ handleRandom }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button className="button-24" onClick={handleRandom}>
        Random
      </button>
    </div>
  );
}

export default App;
