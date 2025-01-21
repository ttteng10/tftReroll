import { useState, createContext } from "react";

import styles from "./Reroll.module.css";
import RerollInterface from "./RerollInterface";
import RerollRandomImg from "./RerollRandomImg";
import Main4costImg from "./Champion";

export const RerollContext = createContext({
  gameMode: "",
  champion: {},
});

export default function Reroll() {
  const [mode, setMode] = useState("Easy");
  const champion = Main4costImg();
  const rerollValue = {
    gameMode: mode,
    champion: champion,
  };

  return (
    <div className={styles.RerollWrapper}>
      <div className={styles.RerollContent}>
        <header className={styles.RerollHeader}>TFT Reroll</header>
        <div className={styles.ModeButtons}>
          {["Prac", "Easy", "Hard"].map((item) => (
            <button
              key={item}
              className={mode === item ? styles.CheckButton : styles.ModeButton}
              onClick={() => setMode(item)}
            >
              {item === "Prac" ? "연습" : item}
            </button>
          ))}
        </div>
        <RerollContext.Provider value={rerollValue}>
          <div className={styles.RerollMain}>
            <RerollRandomImg />
            <RerollInterface />
          </div>
        </RerollContext.Provider>
      </div>
    </div>
  );
}
