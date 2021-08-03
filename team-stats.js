const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Stephen',
        lastName: 'Appiah',
        age: 15
      },
      {
        firstName: 'Laryea',
        lastName: 'Kingson',
        age: 18
      }
    ], 
    _games:[
      {
        opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
      },
      {
        opponent: 'Kotoko',
    teamPoints: 40,
    opponentPoints: 30
      },
      {
        opponent: 'Hearts',
    teamPoints: 42,
    opponentPoints: 51
      }
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
  
    addPlayer(firstName,lastName,age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this.players.push(player)
    },
  
    addGame(opponent,teamPoints,opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this.games.push(game)
    }
  }
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  
  team.addGame('Chelsea',40,38)
  team.addGame('City',48,25)
  team.addGame('Burnley',56,73)
  
  console.log(team.games)
  console.log(team.players)