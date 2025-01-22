import styles from "./RerollModeLv.module.css";

export default function RerollModeLv({
  gameMode,
  setGameMode,
  gameLv,
  setGameLv,
}) {
  return (
    <>
      <div className={styles.ModeButtons}>
        {["Prac", "Easy", "Hard"].map((item) => (
          <button
            key={item}
            className={
              gameMode === item ? styles.CheckButton : styles.ModeButton
            }
            onClick={() => setGameMode(item)}
          >
            {item === "Prac" ? "연습" : item}
          </button>
        ))}
      </div>
      <div className={styles.LvWrapper}>
        <div className={styles.LvButtons}>
          {[4, 5, 6, 7, 8, 9, 10].map((item) => (
            <button
              key={item}
              className={
                gameLv === item ? styles.LvCheckButton : styles.LvButton
              }
              onClick={() => setGameLv(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.LvPercent}></div>
      </div>
    </>
  );
}
