function Score({highestScore, currentScore}){
  return <div className="score">
    <span>{highestScore}</span>
    <span>{currentScore}</span>
  </div>
}

export default Score;