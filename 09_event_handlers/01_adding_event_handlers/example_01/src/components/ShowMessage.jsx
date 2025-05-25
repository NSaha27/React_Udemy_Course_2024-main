import ShowButton from "./ShowButtons";

function ShowMessage({persons}){
  function handleMorningGreet(){
    alert(`Good morning Mr./Ms. ${persons[0]}`);
  }
  function handleDayGreet(){
    alert(`Good day to you Mr./Ms. ${persons[1]}`);
  }
  function handleAfternoonGreet(){
    alert(`Good afternoon Mr./Ms. ${persons[2]}`);
  }
  function handleNightGreet(){
    alert(`Good night Mr./Ms. ${persons[3]}`);
  }

  return <div className="messageBox">
    <ShowButton classnames={["btn", "btn-yellow"]} onclick={handleMorningGreet}>Greet for morning</ShowButton>
    <ShowButton classnames={["btn", "btn-sky"]} onclick={handleDayGreet}>Greet for day</ShowButton>
    <ShowButton classnames={["btn", "btn-purple"]} onclick={handleAfternoonGreet}>Greet for afternoon</ShowButton>
    <ShowButton classnames={["btn", "btn-dark"]} onclick={handleNightGreet}>Greet for night</ShowButton>
  </div>
}

export default ShowMessage;