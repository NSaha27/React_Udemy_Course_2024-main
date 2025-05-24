import './App.css';
import GetAdvice from "./components/GetAdvice";

function App() {
  const advices = [
    "Focus on the most important and urgent tasks first. You can use the ABC prioritization method, where A tasks are high priority, B tasks are medium priority, and C tasks are low priority.",
    "Create a daily schedule or to-do list and allocate time for each task. You can also use a calendar or agenda to write down dates, times, and places to meet people.",
    "Turn off phone and email notifications and avoid checking them at unappointed times.",
    "Assign responsibility for tasks to others so you can focus on more important tasks.",
    "Use a personal planning tool to improve productivity.",
    "Use the Pomodoro method, which involves taking regular breaks while working on short time frames.",
    "Complete all of one type of to-do before moving on to the next.",
    "Round up time estimates for completing a project to make room for unexpected delays.",
    "Keep a time log to record what you are doing in 15-minute intervals for a week or two.",
    "Include time for fun in your schedule to keep your mental health in balance."
  ];
  return (
    <div className='container'>
      <GetAdvice advices={advices} />
    </div>
  )
}

export default App
