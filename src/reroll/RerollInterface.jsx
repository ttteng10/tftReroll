import { useContext, useState, useEffect, useCallback } from "react";
import { RerollContext } from "./Reroll";
import RerollCheck from "./RerollCheck";
import styles from "./RerollInterface.module.css";
import { InterfaceChampion } from "./InterFace.js";
import Rerollpercent from "./Rerollpercent.jsx";

//Lv8 1cost: 18% 2cost: 25% 3cost: 32% 4cost:22% 5cost: 3%
//Lv9 1cost: 15% 2cost: 20% 3cost: 25% 4cost:30% 5cost: 10%
export default function RerollInterface() {
  const { gameMode, champion, gameLv, borderCheck } = useContext(RerollContext);
  const [championArr, setChampionArr] = useState(InterfaceChampion(gameLv));
  const [checkNum, setCheckNum] = useState(0);
  const [clickidx, setClickidx] = useState([]);
  const [time, setTime] = useState(30);
  const [startBtn, setStartBtn] = useState("START");
  const [result, setResult] = useState();

  const reroll = useCallback(() => {
    const newChampionArr = InterfaceChampion(gameLv);
    setChampionArr(newChampionArr);
    setClickidx([]);
  }, [gameLv]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "D" || event.key === "ㅇ") {
        reroll();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [reroll]);
  useEffect(() => {
    setCheckNum(0);
    reroll();
    setCheckNum(0);
    setResult();
  }, [gameMode, gameLv]);

  function userClick(item, idx) {
    if (item.id === champion.id && !clickidx.includes(idx)) {
      setCheckNum(checkNum + 1);
      setClickidx((prev) => [...prev, idx]);
      return;
    }
  }

  function startClick() {
    if (startBtn === "START") {
      setStartBtn("RESTART");
      setTime(30);
      reroll();
      setCheckNum(0);
      setResult();
    } else if (startBtn === "RESTART") {
      setTime(30);
      reroll();
      setCheckNum(0);
      setResult();
    }
  }

  useEffect(() => {
    let timer;

    if (gameMode !== "Prac" && startBtn === "RESTART" && time > 0) {
      if (gameMode === "Easy" && checkNum == 3) {
        clearInterval(timer); // 타이머 종료
        setStartBtn("START"); // 버튼 상태 초기화
      } else if (gameMode === "Hard" && checkNum == 9) {
        clearInterval(timer); // 타이머 종료
        setStartBtn("START"); // 버튼 상태 초기화
      }
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      clearInterval(timer); // 타이머 종료
      setStartBtn("START"); // 버튼 상태 초기화
      if (gameMode === "Easy" && checkNum < 3) {
        setResult("x");
      } else if (gameMode === "Hard" && checkNum < 9) {
        setResult("x");
      }
    }

    return () => clearInterval(timer);
  }, [time, startBtn]);

  return (
    <div className={styles.InterfaceWrapper}>
      <RerollCheck mode={gameMode} checkNum={checkNum} result={result} />
      <Rerollpercent />
      <div className={styles.InterfaceContent}>
        <div className={styles.RerollBtnBox}>
          <button className={styles.RerollBtn} onClick={() => startClick()}>
            {startBtn}
          </button>
          <button className={styles.RerollBtn} onClick={() => reroll()}>
            새로고침(D)
          </button>
        </div>
        <div className={styles.ChampionBox}>
          {championArr.map((item, idx) => (
            <div
              key={idx}
              className={`${
                borderCheck && item.id === champion.id
                  ? styles.ChampionBorder
                  : styles.Champion
              }`}
              onClick={() => userClick(item, idx)}
            >
              {!clickidx.includes(idx) && (
                <>
                  <div className={styles.ChampionImgAndColor}>
                    <div
                      className={`${styles.ChampionCost} ${
                        styles[`cost-${item.cost}`]
                      }`}
                    >
                      {item.cost}
                    </div>
                    <img
                      src={item.src}
                      alt={item.name}
                      className={styles.ChampionImg}
                    />
                  </div>
                  <p className={styles.ChampionName}>{item.name}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {gameMode !== "Prac" && <div>{time}</div>}
    </div>
  );
}
