export const getPlayerName = (tableData, playerId) => {
   let playerData =  tableData.filter((eachPlayerData) => eachPlayerData.id === playerId)
   return playerData[0]
}