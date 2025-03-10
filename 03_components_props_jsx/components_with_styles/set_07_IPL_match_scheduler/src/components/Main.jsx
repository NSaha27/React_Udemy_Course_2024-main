import Matches from "./Matches";

function Main(props) {
  return (
    <main className="container">
      <section className="sec" id="sec1">
        <aside className="matchList">
          {props.matches.length > 0
            ? props.matches.map((match, indx, arr) => {
                return (
                  <Matches
                    matchNum={match.MatchNumber}
                    totalMatches={arr.length}
                    matchDate={new Date(match.DateUtc).toDateString()}
                    matchTime={new Date(match.DateUtc).toLocaleTimeString()}
                    matchLocation={match.Location}
                    homeTeam={match.HomeTeam}
                    awayTeam={match.AwayTeam}
                    homeTeamLogo={match.HomeTeamLogo}
                    awayTeamLogo={match.AwayTeamLogo}
                    homeTeamScore={match.HomeTeamScore}
                    awayTeamScore={match.AwayTeamScore}
                  />
                );
              })
            : "no match available!"}
        </aside>
      </section>
    </main>
  );
}

export default Main;
