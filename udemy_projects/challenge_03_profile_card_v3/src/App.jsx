import Message from "./components/Message";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";

const profileData = {
  profileName: "Niladri Saha",
  profileImage: "pexels-pravinkumar-ganesan-275577427-13041184.jpg",
  profileExperience: "Pro",
  profilePlace: "Kolkata",
  profileDescription: "Full Stack Web Developer",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "ES6+",
    "React JS",
    "Node JS & Express JS",
    "Python",
    "Django",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "AJAX",
    "JSON",
    "REST API Development and Testing",
    "Software Testing using Postman and Jest",
    "Vercel Deployment",
  ],
};

function App() {
  return (
    <div className="card-container">
      <PersonalInfo
        profileExperience={profileData.profileExperience}
        profileImage={profileData.profileImage}
        profileName={profileData.profileName}
        profilePlace={profileData.profilePlace}
        profileDescription={profileData.profileDescription}
      />
      <Message />
      <Skills skills={profileData.skills} />
    </div>
  );
}

export default App;
