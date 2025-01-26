import { useContext, useState, useEffect } from "react";
import { RerollContext } from "./Reroll";
import styles from "./SelectChampion.module.css";
import {
  cost1Imgs,
  cost2Imgs,
  cost3Imgs,
  cost4Imgs,
  cost5Imgs,
} from "./Champion";

export default function SelectChampion() {
  const { gameLv, setChampion, setDialogOpen } = useContext(RerollContext);
  const [costNum, setCostNum] = useState(1);
  const [costChams, setCostChams] = useState(cost1Imgs);

  useEffect(() => {
    switch (costNum) {
      case 1:
        setCostChams(cost1Imgs);
        break;
      case 2:
        setCostChams(cost2Imgs);
        break;
      case 3:
        setCostChams(cost3Imgs);
        break;
      case 4:
        setCostChams(cost4Imgs);
        break;
      case 5:
        setCostChams(cost5Imgs);
        break;
    }
  }, [costNum]);

  function changMainChampion(item) {
    setChampion(item);
    setDialogOpen(false);
  }

  return (
    <dialog className={styles.dialogWrapper}>
      <div className={styles.dialogHeader}>
        <p className={styles.dialogLevel}>Lv {gameLv}</p>
        <button
          className={styles.dialogBtn}
          onClick={() => setDialogOpen(false)}
        >
          X
        </button>
      </div>
      <div className={styles.championCosts}>
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            key={item}
            className={
              costNum === item
                ? `${styles.clickChampionCost}`
                : `${styles.championCost}`
            }
            onClick={() => setCostNum(item)}
          >
            {item} cost
          </button>
        ))}
      </div>
      <div className={styles.parentCostChams}>
        <div className={styles.costChampions}>
          {costChams.map((item, idx) => (
            <div key={idx} className={styles.costCham}>
              <img
                src={item.src}
                alt={item.name}
                className={styles.costCham}
                onClick={() => changMainChampion(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
