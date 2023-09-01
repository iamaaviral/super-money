export const getColor = (matchData, playerId) => {
    let selectedPlayerScore;
    let otherPlayerScore;

    if(matchData.player1.id === playerId) {
        selectedPlayerScore = matchData.player1.score
        otherPlayerScore = matchData.player2.score
    }

    if(matchData.player2.id === playerId) {
        selectedPlayerScore = matchData.player2.score
        otherPlayerScore = matchData.player1.score
    }

    if(selectedPlayerScore > otherPlayerScore) return 'win'
    if(selectedPlayerScore < otherPlayerScore) return 'loss'
    if(selectedPlayerScore === otherPlayerScore) return 'draw'
    }