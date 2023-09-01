import styles from './matches.module.css'
import { getPlayerName } from "../../utils/getPlayerName";
import { getColor } from "../../utils/getColor";

const Matches = ({selectedPlayerId,currentPlayerMatches, setShowPointsTable, tableData}) => {

    return (
        <div className={styles.ptWrapper}>
        <div className={styles.mtHeader}><span className={styles.backBtn} onClick={() => setShowPointsTable(true)}>&#8592;</span><h2>Matches</h2></div>
         {currentPlayerMatches && currentPlayerMatches.map((eachMatchData) => {
            return <div className={`${styles.emWrapper} ${getColor(eachMatchData, selectedPlayerId)}`} key={eachMatchData.match} >
                 <div className={styles.playerName}>{getPlayerName(tableData, eachMatchData.player1.id).name}</div>
                 <div className={styles.playerScore}>{`${eachMatchData.player1.score} - `}</div>
                <div className={styles.playerScore}>{eachMatchData.player2.score}</div>
                <div className={styles.playerName}>{getPlayerName(tableData, eachMatchData.player2.id).name}</div>
            </div>
         })}
      </div>
    )

}

export default Matches