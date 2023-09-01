export const filterPlayerMatches = (matches, playerId) => {
    let result = [];

    matches.forEach(eachMatch => {
        if(eachMatch.player1.id === playerId || eachMatch.player2.id === playerId)  result.push(eachMatch)
    })

    return result
}