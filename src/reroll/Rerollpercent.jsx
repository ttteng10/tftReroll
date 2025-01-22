import { useContext, useEffect } from "react";
import { RerollContext } from "./Reroll";
import styles from "./Rerollpercent.module.css";
import checkIcon from "../assets/icons/check.png";

export default function Rerollpercent() {
  const { gameLv, borderCheck, setBorderCheck } = useContext(RerollContext);
  function checkClick() {
    setBorderCheck(!borderCheck);
  }
  useEffect(() => {}, [borderCheck]);
  let percentArr = ["18%", "25%", "32%", "22%", "3%"];
  switch (gameLv) {
    case 4:
      percentArr = ["55%", "30%", "15%", "0%", "0%"];
      break;
    case 5:
      percentArr = ["45%", "33%", "20%", "2%", "0%"];
      break;
    case 6:
      percentArr = ["30%", "40%", "25%", "5%", "0%"];
      break;
    case 7:
      percentArr = ["19%", "30%", "40%", "10%", "1%"];
      break;
    case 8:
      percentArr = ["18%", "25%", "32%", "22%", "3%"];
      break;
    case 9:
      percentArr = ["15%", "20%", "25%", "30%", "10%"];
      break;
    case 10:
      percentArr = ["5%", "10%", "20%", "40%", "25%"];
      break;
  }
  return (
    <div className={styles.percentTotal}>
      <div className={styles.percentWrapper}>
        {percentArr.map((item, idx) => (
          <div key={idx} className={styles.percentBox}>
            <div className={styles.percent}>{idx + 1}cost:</div>
            <div className={styles.percent}>{item}</div>
          </div>
        ))}
      </div>
      <div className={styles.checkBorderWrapper}>
        <p>테두리 체크</p>
        <div className={styles.checkBorder} onClick={() => checkClick()}>
          {borderCheck && (
            <img src={checkIcon} alt="checkIcon" className={styles.checkIcon} />
          )}
        </div>
      </div>
    </div>
  );
}
