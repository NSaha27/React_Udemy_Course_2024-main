function TeamList(props) {
  return (
    <div className="team-list">
      <h3 className="team-title">{props.teamTitle}</h3>
      <div className="players">
        <table>
          {props.players.map((player, index) => {
            return (
              <tr key={index}>
                <th>{player.player}</th>
                <td>{player.type}</td>
                <td>{player.score}</td>
                <td>{player.wicket}</td>
              </tr>
            );
          })}
          {props.players.reduce((totalScore, player, index, array) => {
            totalScore += player.score;
            return (
              <tr key={index}>
                <th>Total Score</th>
                <td></td>
                <td>{totalScore}</td>
                <td></td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default TeamList;
