import styles from "./pointsTable.module.css";

const PointsTable = ({ showMatches, tableData, winningsMap }) => {
  return (
    <div className={styles.ptWrapper}>
      <h2 children={styles.ptHeader}>Points Table</h2>
      {tableData.map((eachPlayerData) => {
        return (
          <div
            className={styles.epWrapper}
            key={eachPlayerData.id}
            onClick={() => showMatches(eachPlayerData.id)}
          >
            <img
              className={styles.playerIcon}
              src={eachPlayerData.icon}
              alt={eachPlayerData.name}
            />
            <div className={styles.playerName}>{eachPlayerData.name}</div>
            <div className={styles.playerWinning}>{winningsMap[eachPlayerData.id]?.score}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PointsTable;
