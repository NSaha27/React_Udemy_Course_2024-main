import "./style.css";

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
      <h3>
        {/* conditional rendering using && operator (short-circuiting)  */}
        {/* {team1Score > team2Score &&
          props.team1.teamTitle +
            " won the match by " +
            (props.team1.batFirst
              ? team1Score - team2Score + " runs"
              : 10 - team1WicketFall + " wickets")}
        {team2Score > team1Score &&
          props.team2.teamTitle +
            " won the match by " +
            (props.team2.batFirst
              ? team2Score - team1Score + " runs"
              : 10 - team2WicketFall + " wickets")} */}

        {/* conditional rendering using ternery operator */}
        {team1Score > team2Score
          ? props.team1.teamTitle +
            " won the match by " +
            (props.team1.batFirst
              ? team1Score - team2Score + " runs"
              : 10 - team1WicketFall + " wickets")
          : null}
        {team2Score > team1Score
          ? props.team2.teamTitle +
            " won the match by " +
            (props.team2.batFirst
              ? team2Score - team1Score + " runs"
              : 10 - team2WicketFall + " wickets")
          : null}
      </h3>
    </div>
  );
}

export default MatchResult;
