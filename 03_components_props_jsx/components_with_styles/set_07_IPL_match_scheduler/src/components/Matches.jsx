function Matches(props) {
  return (
    <div className="match">
      <div className="matchNumAndDate">
        <span className="matchNum">
          <small>
            T20 {props.matchNum} of {props.totalMatches}
          </small>
        </span>
        <span className="matchDate">{props.matchDate}</span>
      </div>
      <div className="teams">
        <div className="teamInfo">
          <span className="team">
            <img src={"images/" + props.homeTeamLogo} alt="" />
            <a href="#">{props.homeTeam}</a>
          </span>
          <span className="score">
            {props.homeTeamScore ? props.homeTeamScore : "score not available"}
          </span>
        </div>
        <div className="teamInfo">
          <span className="team">
            <img src={"images/" + props.awayTeamLogo} alt="" />
            <a href="#">{props.awayTeam}</a>
          </span>
          <span className="score">
            {props.awayTeamScore ? props.awayTeamScore : "score not available"}
          </span>
        </div>
      </div>
      <div className="matchTimeLocation">
        <span className="time">Starts at {props.matchTime}</span>
        <span className="location">{props.matchLocation}</span>
      </div>
    </div>
  );
}

export default Matches;
