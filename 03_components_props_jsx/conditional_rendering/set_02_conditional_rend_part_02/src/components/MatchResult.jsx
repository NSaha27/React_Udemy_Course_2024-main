function MatchResult(props) {
  const team1Score = props.team1.players.reduce(
    (totalScore, player, index, array) => {
      totalScore += player.score;
      return totalScore;
    },
    0
  );
  const team2Score = props.team2.players.reduce(
    (totalScore, player, index, array) => {
      totalScore += player.score;
      return totalScore;
    },
    0
  );
  const team1WicketFall = props.team2.players.reduce(
    (wicketsTaken, player, index, array) => {
      wicketsTaken += player.wicket;
      return wicketsTaken;
    },
    0
  );
  const team2WicketFall = props.team1.players.reduce(
    (wicketsTaken, player, index, array) => {
      wicketsTaken += player.wicket;
      return wicketsTaken;
    },
    0
  );
  return (
    <div className="match-result">
      <h6>
        {team1Score > team2Score
          ? props.team1.teamTitle
          : props.team2.teamTitle + " won the match by " + props.team1.batFirst
          ? team1Score - team2Score + " runs"
          : 10 - team1WicketFall + " wickets"}
      </h6>
    </div>
  );
}

export default MatchResult;
