import { filterPlayerMatches } from "./filterPlayerMatches";
import { getColor } from "./getColor";
let result = {};

const  addScore = (playerId) => {
   result[playerId].score = result[playerId].score ?  result[playerId].score + 3 : 3
}

const substractScore = (playerId) => {
    result[playerId].score = result[playerId].score ?  result[playerId].score : 0
}

const drawScore = (playerId) => {
    result[playerId].score = result[playerId].score ?  result[playerId].score + 1 : 1
}

export const MapResultsToPlayers = (allMatches, allPlayers) => {
        allPlayers.forEach((eachPlayer) => {
            result[eachPlayer.id] = {matches: filterPlayerMatches(allMatches, eachPlayer.id)}
        })
        
        Object.entries(result).forEach(([key, value]) => {
            value.matches.forEach((eachMatch) => {
                switch(getColor(eachMatch, Number(key))) {
                case 'win':
                    addScore(key)
                    break;
                case 'loss':
                    substractScore(key)
                    break;
                    case 'draw':
                        drawScore(key)
                        break;
                default:
                    // code block
                }
            })
          });

        return result
    }