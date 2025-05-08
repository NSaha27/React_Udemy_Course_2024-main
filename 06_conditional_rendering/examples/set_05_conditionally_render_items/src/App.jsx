import "./App.css";
// import Ternery from "./components/Ternery";
// import IfElse from "./components/IfElse";
import LogicalAND from "./components/LogicalAND";

function App() {
  const topicList = [
    {
      title: "Is India moving towards an war with Pakistan?",
      description:
        "While tensions are high between India and Pakistan following a militant attack in Kashmir, there's no immediate indication that a full-scale war is imminent. However, the situation remains volatile, and a broader military conflict is a possibility, especially given the recent escalation in diplomatic relations. Factors contributing to the heightened tensions: Militant Attack: A recent militant attack in Indian-administered Kashmir has triggered a sharp escalation, with both sides exchanging gunfire across the Line of Control.  Diplomatic Downgrade: Diplomatic ties have been downgraded, further exacerbating the situation and raising concerns about a broader conflict. Historical Context: The current escalation is considered the most significant bilateral confrontation since 2019, when India launched air strikes on Pakistani soil following an attack on Indian soldiers. Nuclear-Armed Rivalry: Both India and Pakistan are nuclear-armed nations, making any potential conflict particularly dangerous. International Involvement: International actors, including the US and China, have urged de-escalation and have emphasized the importance of peaceful resolution. Possible scenarios: Continued Escalation: The situation could continue to escalate further, potentially leading to more widespread military action. Limited Conflict: It's possible that the conflict could remain limited to cross-border exchanges and military strikes, rather than a full-scale war. Diplomatic Resolution: While the situation is tense, there is still a chance for a diplomatic resolution through dialogue and international mediation. ",
      conclusion:
        "Overall, the situation is precarious, but not necessarily headed towards full-scale war. The potential for conflict remains high, and the situation could change rapidly depending on the actions of both sides and the international community.",
    },
  ];

  return (
    <>
      {/*<IfElse isRegistered={true} />*/}
      {/* <Ternery topicList={topicList} /> */}
      <LogicalAND topicList={topicList} />
    </>
  );
}

export default App;
