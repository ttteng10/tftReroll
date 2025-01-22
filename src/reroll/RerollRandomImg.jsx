import styles from "./RerollRandomImg.module.css";
import { useContext } from "react";
import { RerollContext } from "./Reroll";

export default function RerollRandomImg() {
  const { champion } = useContext(RerollContext);
  return (
    <div className={styles.RerollChampionImgWrapper}>
      <div className={styles.RerollChampionImgBox}>
        {champion && champion.src ? (
          <img
            className={styles.RerollChampionImg}
            src={champion.src}
            alt="champiom img"
          />
        ) : (
          <p className={styles.loading}>loading...</p>
        )}
      </div>
      {champion && champion.name ? (
        <div className={styles.RerollChampionName}>{champion.name}</div>
      ) : (
        <p className={styles.loading}>loading...</p>
      )}
    </div>
  );
}
