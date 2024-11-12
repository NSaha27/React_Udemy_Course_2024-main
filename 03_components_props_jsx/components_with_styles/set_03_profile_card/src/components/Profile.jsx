import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./style.css";

const profile = {
  profileTitle: "Niladri Saha",
  profileIntro: "A full-stack web developer, specialied in writing and quering complex database (SQL + NoSQL) queries, back-end development (Python + Node JS) with frameworks like Django and Express JS and also good at front-end development with frameworks like React and Next JS.",
  profileImg: "images/user.jpeg",
  profileSkills: [
    {
      name: "HTML + CSS",
      bg: "blue",
      emoji: "strong"
    },
    {
      name: "JavaScript",
      bg: "yellow",
      emoji: "strong"
    },
    {
      name: "React",
      bg: "cyan",
      emoji: "like"
    },
    {
      name: "Node JS",
      bg: "lime",
      emoji: "strong"
    },
    {
      name: "Express JS",
      bg: "red",
      emoji: "strong"
    },
    {
      name: "Next JS",
      bg: "lightgrey",
      emoji: "like"
    },
    {
      name: "Python",
      bg: "yellow",
      emoji: "like"
    },
    {
      name: "Django",
      bg: "green",
      emoji: "like"
    },
  ]
}

function Profile(){
  return <div className="profile">
    <Avatar profile={profile} />
    <Intro profile={profile} />
    <SkillList profile={profile} />
  </div>
}

export default Profile;