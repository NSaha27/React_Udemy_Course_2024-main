import './App.css';
import Profile from './components/Profile';

const profiles = [
  {
    profName: "Niladri Saha",
    profImgPath: "images/profile_image.png",
    profInfo: `Hey there, this is Niladri Saha, a full-stack web developer, specialized in back-end development (in MERN stack). I have experience in freelancing in web development on the platforms like - Freelancer.com, fibrr.com, upwork.com etc. for more than 3+ years. I'm also a subject matter expert in computer science in Chegg India Pvt. Ltd.`,
    skillList: [
      {
        skillName: "HTML + CSS",
        bgColor: "blue",
        textColor: "white",
        skillImoge: "👌"
      },
      {
        skillName: "Bootstrap 5",
        bgColor: "purple",
        textColor: "white",
        skillImoge: "👍"
      },
      {
        skillName: "JavaScript",
        bgColor: "yellow",
        textColor: "black",
        skillImoge: "👌"
      },
      {
        skillName: "Node JS + Express JS",
        bgColor: "green",
        textColor: "white",
        skillImoge: "👌"
      },
      {
        skillName: "React JS",
        bgColor: "cyan",
        textColor: "black",
        skillImoge: "👍"
      },
      {
        skillName: "Python",
        bgColor: "yellow",
        textColor: "black",
        skillImoge: "👌"
      },
      {
        skillName: "Django",
        bgColor: "darkgreen",
        textColor: "white",
        skillImoge: "👍"
      },
      {
        skillName: "git + github",
        bgColor: "maroon",
        textColor: "white",
        skillImoge: "👍"
      }
    ]
  }
];

function App() {
  return (
    <div className='container'>
      {
        profiles.map((prof, indx) => {
          return <Profile profImgPath={prof.profImgPath} profName={prof.profName} profInfo={prof.profInfo} skillList={prof.skillList} key={indx} />
        })
      }
    </div>
  )
}

export default App;
