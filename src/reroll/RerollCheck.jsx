import { useContext } from "react";
import { RerollContext } from "./Reroll";
import styles from "./RerollCheck.module.css";

export default function RerollCheck({ mode, checkNum, result }) {
  const { champion } = useContext(RerollContext);
  let checkBox = 3;
  if (mode === "Easy") {
    checkBox = 3;
  } else if (mode === "Hard") {
    checkBox = 9;
  } else {
    checkBox = 9;
  }
  return (
    <div className={styles.CheckWrapper}>
      {checkBox !== 0 &&
        result !== "x" &&
        checkBox > checkNum &&
        Array.from({ length: checkBox }).map((_, index) => (
          <div key={index} className={styles.CheckBox}>
            {index < checkNum && (
              <img
                className={styles.CheckBoxImg}
                src={champion.src}
                alt={champion.name}
              />
            )}
          </div>
        ))}
      {checkBox === checkNum && <div>성공</div>}
      {result === "x" && <div>실패</div>}
    </div>
  );
}
