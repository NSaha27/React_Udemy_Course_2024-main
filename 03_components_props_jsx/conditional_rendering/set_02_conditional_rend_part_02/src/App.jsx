import "./app.css";
import MatchResult from "./components/MatchResult";
import TeamList from "./components/TeamList";

const kkrSquad = {
  team1: {
    teamTitle: "Team Purple",
    batFirst: true,
    players: [
      {
        player: "Quinton De Kock",
        type: "Wicket Keeper",
        score: 56,
        wicket: 0,
      },
      {
        player: "Ajinkya Rahane",
        type: "Batsman",
        score: 23,
        wicket: 0,
      },
      {
        player: "Angkrish Raghuvanshi",
        type: "Batsman",
        score: 42,
        wicket: 0,
      },
      {
        player: "Rinku Singh",
        type: "Alrounder",
        score: 36,
        wicket: 0,
      },
      {
        player: "Venkatesh Iyer",
        type: "Alrounder",
        score: 72,
        wicket: 1,
      },
      {
        player: "Andre Russell",
        type: "Alrounder",
        score: 40,
        wicket: 2,
      },
      {
        player: "Sunil Narine",
        type: "Alrounder",
        score: 25,
        wicket: 2,
      },
      {
        player: "Varun Chakravarthy",
        type: "Bowler",
        score: 0,
        wicket: 2,
      },
      {
        player: "Harshit Rana",
        type: "Bowler",
        score: 0,
        wicket: 1,
      },
      {
        player: "Vaibhav Arora",
        type: "Bowler",
        score: 0,
        wicket: 2,
      },
      {
        player: "Ramandeep Singh",
        type: "Alrounder",
        score: 9,
        wicket: 0,
      },
    ],
  },
  team2: {
    teamTitle: "Team Gold",
    batFirst: false,
    players: [
      {
        player: "Rahmanullah Gurbaz",
        type: "Wicket Keeper",
        score: 44,
        wicket: 0,
      },
      {
        player: "Manish Pandey",
        type: "Batsman",
        score: 37,
        wicket: 0,
      },
      {
        player: "Luvnith Sisodia",
        type: "Wicket Keeper",
        score: 58,
        wicket: 0,
      },
      {
        player: "Rovman Powell",
        type: "Alrounder",
        score: 28,
        wicket: 0,
      },
      {
        player: "Moeen Ali",
        type: "Alrounder",
        score: 31,
        wicket: 1,
      },
      {
        player: "Anukul Roy",
        type: "Alrounder",
        score: 12,
        wicket: 0,
      },
      {
        player: "Anrich Nortje",
        type: "Bowler",
        score: 18,
        wicket: 4,
      },
      {
        player: "Mayank Markande",
        type: "Bowler",
        score: 0,
        wicket: 1,
      },
      {
        player: "Spencer Johnson",
        type: "Bowler",
        score: 0,
        wicket: 1,
      },
      {
        player: "Chetan Sakariya",
        type: "Bowler",
        score: 0,
        wicket: 2,
      },
      {
        player: "N.A.",
        type: "N.A.",
        score: 0,
        wicket: 0,
      },
    ],
  },
};

function App() {
  return (
    <>
      <div className="teamInfo">
        <TeamList
          teamTitle={kkrSquad.team1.teamTitle}
          players={kkrSquad.team1.players}
        />
        <TeamList
          teamTitle={kkrSquad.team2.teamTitle}
          players={kkrSquad.team2.players}
        />
      </div>
      <MatchResult team1={kkrSquad.team1} team2={kkrSquad.team2} />
    </>
  );
}

export default App;
