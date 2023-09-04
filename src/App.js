import { useEffect, useState } from "react";
import "./App.css";
import PointsTable from "./components/pointsTable/pointsTable";
import Matches from "./components/matches/matches";
import { MapResultsToPlayers } from "./utils/mapResultsToPlayers";

function App() {
  const [tableData, setTableData] = useState([]);
  const [showPointsTable, setShowPointsTable] = useState(true);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [allMatches, setAllMatches] = useState([]);
  const [winningsMap, setWinningsMap] = useState({});

  const showMatches = (playerId) => {
    setSelectedPlayerId(playerId);
    setShowPointsTable(false);
  };

  useEffect(() => {
    fetch("https://api.npoint.io/ca180e840b481675d500")
      .then((res) => res.json())
      .then((result) => setTableData(result))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetch("https://api.npoint.io/bc3f07c7442e85446788")
      .then((res) => res.json())
      .then((result) => setAllMatches(result))
      .catch((e) => console.log(e));
  }, []);


  useEffect(() => {
    if(allMatches.length > 0 && tableData.length > 0) {
      setWinningsMap(MapResultsToPlayers(allMatches, tableData))
    }
  }, [allMatches, tableData])

  return (
    <div className="App">
      {showPointsTable ? (
        <PointsTable showMatches={showMatches} tableData={tableData} winningsMap={winningsMap}/>
      ) : (
        <Matches
          selectedPlayerId={selectedPlayerId}
          winningsMap={winningsMap}
          setShowPointsTable={setShowPointsTable}
          tableData={tableData}
        />
      )}
    </div>
  );
}

export default App;
