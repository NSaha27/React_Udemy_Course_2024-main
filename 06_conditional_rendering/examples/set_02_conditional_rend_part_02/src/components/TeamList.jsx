function TeamList(props) {
  let totalScore = 0;
  return (
    <div className="team-list">
      <h3 className="team-title">{props.teamTitle}</h3>
      <div className="players">
        <table>
          <tr>
            <th>Player Name</th>
            <th>Type</th>
            <th>Runs</th>
            <th>Wickets</th>
          </tr>
          {props.players.map((player, index) => {
            return (
              <tr key={index}>
                <td>{player.player}</td>
                <td>{player.type}</td>
                <td>{player.score}</td>
                <td>{player.wicket}</td>
              </tr>
            );
          })}
          <tr>
            <th>Total Score</th>
            <td></td>
            <th>
              {props.players.reduce((totScr, player, index, array) => {
                totScr += player.score;
                return totScr;
              }, 0)}
            </th>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TeamList;
