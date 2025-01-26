import { useState, createContext, useEffect } from "react";

import styles from "./Reroll.module.css";
import RerollInterface from "./RerollInterface";
import RerollRandomImg from "./RerollRandomImg";
import {
  Main1costImg,
  Main2costImg,
  Main3costImg,
  Main4costImg,
  Main5costImg,
} from "./Champion";
import RerollModeLv from "./RerollModeLv";
import SelectChampion from "./SelectChampion";
import exclamation from "../assets/icons/exclamation.png";

export const RerollContext = createContext({
  gameMode: "",
  gameLv: Number,
  champion: {},
  setChampion: () => {},
  borderCheck: Boolean,
  setBorderCheck: () => {},
  setDialogOpen: () => {},
});

export default function Reroll() {
  const [mode, setMode] = useState("Easy");
  const [gameLv, setGameLv] = useState(8);
  const [champion, setChampion] = useState(Main4costImg());
  const [borderCheck, setBorderCheck] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (gameLv === 4 || gameLv === 5) {
      setChampion(Main1costImg());
    } else if (gameLv === 6) {
      setChampion(Main2costImg());
    } else if (gameLv === 7) {
      setChampion(Main3costImg());
    } else if (gameLv === 8 || gameLv === 9) {
      setChampion(Main4costImg());
    } else if (gameLv === 10) {
      setChampion(Main5costImg());
    }
  }, [gameLv]);

  const rerollValue = {
    gameMode: mode,
    gameLv: gameLv,
    champion: champion,
    setChampion: setChampion,
    borderCheck: borderCheck,
    setBorderCheck: setBorderCheck,
    setDialogOpen: setDialogOpen,
  };

  function showInformation() {
    alert(
      `Easy: 2성 찾기(기물 3개) Hard: 3성 찾기(기물 9개)\n 중앙 이미지 클릭 시 원하는 챔피언 선택 가능`
    );
  }

  return (
    <div className={styles.RerollWrapper}>
      <div className={styles.RerollContent}>
        <header className={styles.RerollHeader}>
          TFT Reroll
          <div
            className={styles.exclamationIconWrapper}
            onClick={() => showInformation()}
          >
            <img
              src={exclamation}
              alt="introduce"
              className={styles.exclamationIcon}
            />
          </div>
        </header>
        <RerollModeLv
          gameMode={mode}
          setGameMode={setMode}
          gameLv={gameLv}
          setGameLv={setGameLv}
        />
        <RerollContext.Provider value={rerollValue}>
          {dialogOpen && <SelectChampion />}
          <div className={styles.RerollMain}>
            <RerollRandomImg />
            <RerollInterface />
          </div>
        </RerollContext.Provider>
      </div>
    </div>
  );
}
