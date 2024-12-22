import "../../public/style.css";
import Achievement from "./Achievement";
import ContactInfo from "./ContactInfo";
import EduTraining from "./EduTraining";
import Header from "./Header";
import Language from "./Language";
import ProfExperience from "./ProfExperience";
import Skill from "./Skill";

const profile = {
  profileName: "Niladri Saha",
  profileSummary: "Innovative, task driven professional with 3+ years of experience as a subject matter expert in computer science and 4+ years of experience in web application and backend system development and testing. Skilled at writing clear, concise code that is easy to maintain and troubleshoot. Equipped with a record of success in consistently identifying and providing technological needs of both company and clients. Experienced in working with small teams across multiple projects. Able to work independently of remote locations or in office environments as needed by the company.",
  profession: [
    {
      company: "Chegg India Pvt. Ltd.",
      jobType: "Subject Matter Expert",
      jobStartedFrom: "2021/05/10",
      jobEndedOn: null,
      experiences: ["Identifying areas where technical solutions can improve performance of a student or a professional person from technical background, and providing one-to-one support to them ", "Providing consultation, mentorship and guidance ", "Contributing specialized knowledge ", "Creating and providing technical documentations including different system diagrams, process flow charts, coding solutions etc. ", "Conducting testing of software and systems to identify technical issues ", "Utilized various software and tools to streamline processes and optimize performance. ", "Resolving issues in a timely manner while maintaining a positive relationship. "]
    },
    {
      company: "Fiverr.com, Upwork, Freelancer.com",
      jobType: "Freelance web developer",
      jobStartedFrom: "2019/03/01",
      jobEndedOn: "2021/05/08",
      experiences: ["Experience in developing WooCommerce, Blogging, E-Commerce websites using technologies like PHP, Laravel 8, CodeIgniter 3, Bootstrap 4, React JS, WordPress etc. "]
    }
  ],
  education: [
    {
      degreeTitle: "B.Com (Hons.)",
      board: "University of Calcutta",
      gpa: 49.3,
      year: 2012
    },
    {
      degreeTitle: "Higher Secondary",
      board: "WBCHSE",
      gpa: 64.6,
      year: 2009
    },
    {
      degreeTitle: "Secondary",
      board: "WBBSE",
      gpa: 72.9,
      year: 2007
    }
  ],
  training: [
    {
      trainingTakenFrom: "Udemy",
      trainingStartedFrom: "2021/01/22",
      trainingEndedOn: null,
      courses: [
        "The Complete 2024 Web Development Bootcamp",
        "The Complete JavaScript Course 2024: From Zero to Expert",
        "The Ultimate React Course 2024: React, Next.js, Redux & More",
        "NodeJS – The Complete Guide (MVC, Rest APIs, GraphQL, Deno)",
        "100 Days of Code: The Complete Python Pro Bootcamp",
        "Learn JAVA Programming – Beginner to Master (ongoing)"
      ]
    },
    {
      trainingTakenFrom: "Aptech Computer Education",
      trainingStartedFrom: "2019/01/19",
      trainingEndedOn: "2021/04/14",
      courses: [
        "HTML5, CSS3, Bootstrap 4,  JavaScript, ES6+, JQuery, PHP 7.2, MySQL, AJAX, JSON, CodeIgniter 3, Rest API, UI & UX, Vercel deployment etc.",
      ]
    },
    {
      trainingTakenFrom: "Ramkrishna Mission Shilpamandira Computer Centre",
      trainingStartedFrom: "2015/06/03",
      trainingEndedOn: "2017/07/12",
      courses: [
        "Certificate in Software Engineering (CSE) (Accredited by NIELIT “A” Level)",
      ]
    },
    {
      trainingTakenFrom: "Youth Computer Training Centre (Govt. of West Bengal Registered)",
      trainingStartedFrom: "2013/07/21",
      trainingEndedOn: "2014/09/14",
      courses: [
        "Diploma in Financial Accounting System with GPA - 82%",
      ]
    }
  ],
  skill: [
    {
      skillType: "Technical Skills",
      skills: ["Front-end core (HTML5, CSS3, JavaScript, ES6+)", "Front-end library and framework (Bootstrap 5, React JS, Redux toolkit)", "Back-end core (Node JS, PHP 8, Python 3)", "Back-end library and framework (Express JS, Laravel 9, CodeIgniter 4, Django)", "Database (MySQL, MongoDB)", "ORM and ODM (Sequelize, Mongoose, Eloquent, Django ORM)", "JWT (JSON Web Token)", "AJAX", "JSON", "Rest API development", "API Testing (Postman, Jest)", "Version Control System (Git & GitHub)", "Deployment (Vercel, Heroku, AWS)"]
    },
    {
      skillType: "Operating System Skills",
      skills: ["Windows, Linux",]
    },
    {
      skillType: "Professional Skills",
      skills: ["Training and mentoring", "Deep expertise in the subject", "Strong analytical skills", "Project management", "Multitasking ability", "Adaptability and flexibility", "Time and budget management ability"]
    }
  ],
  achievement: {
    achievements: ["Spearheaded many software projects from design to distribution as a developer. Improved query efficiency (about 30%) by designing and fully revising many large relational databases on the clients' requirements. Also, recently completed 4 courses relating to core programming as well as full-stack application development from Udemy.",],
    projects: [
      {
        name: "Random password (encrypted and decrypted) generator application developed in Java:",
        link: "https://github.com/NSaha27/Random-password-generator-program-in-Java.git"
      },
      {
        name: "CPG and Fuel Cost calculation application developed in Python:",
        link: "https://github.com/NSaha27/CPG-and-Fuel-Cost-Calculation-Program-in-Python.git"
      },
      {
        name: "Todo API, developed in Express JS:",
        link: "https://github.com/NSaha27/Todo-API.git"
      },
      {
        name: "Cornica - A Hotel Management System Project (Front-end design):",
        link: "https://github.com/NSaha27/Cornica_website_project.git "
      },
      {
        name: "Medical Clinic Management application, developed using Express JS, Bootstrap 5 etc.:",
        link: "https://github.com/NSaha27/Medical-Clinic-Management-Project.git"
      }
    ]
  },
  language: [
    {
      langName: "Bengali",
      langPreference: "First Language",
      langProficiency: "(proficient) (Read, Write, Speak)"
    },
    {
      langName: "English",
      langPreference: "Second Language",
      langProficiency: "(intermediate) (Read, Write, Speak)"
    },
    {
      langName: "Hindi",
      langPreference: "Third Language",
      langProficiency: "(intermediate) (Read, Speak)"
    }
  ],
  contact: {
    email: "sahaniladri734@gmail.com",
    phone: "+91 8981584700",
    address: "Liluah, Howrah, West Bengal, India, 711204"
  }
}

function Resume(){
  return <div className="resume">
    <div>
      <div id="contact">
        <ContactInfo email={profile.contact.email} phone={profile.contact.phone} address={profile.contact.address} />
      </div>
      <div id="skill">
        <h2 className="section-heading">Skills</h2>
        {
          profile.skill.map((skl, indx, arr) => {
            return <Skill skillType={skl.skillType} skills={skl.skills} />
          })
        }
      </div>
      <div id="language">
        <h2 className="section-heading">Language</h2>
        {
          profile.language.map((lang, indx, arr) => {
            return <Language langName={lang.langName} langPreference={lang.langPreference} langProficiency={lang.langProficiency} />
          })
        }
      </div>
      <div id="achievement">
        <h2 className="section-heading">Achievements</h2>
        <Achievement achievements={profile.achievement.achievements} projects={profile.achievement.projects} />
      </div>
    </div>
    <div>
      <div id="header">
        <Header profile={profile} />
      </div>
      <div id="profExperience">
        <h2 className="section-heading">Professional Experience</h2>
        {
          profile.profession.map((prof, indx, arr) => {
            return <ProfExperience key={indx} company={prof.company} jobType={prof.jobType} jobStartedFrom={prof.jobStartedFrom} jobEndedOn={prof.jobEndedOn} experiences={prof.experiences} />
          })
        }
      </div>
      <div id="eduTraining">
        <h2 className="section-heading">Education and Training</h2>
        <EduTraining education={profile.education} training={profile.training} />
      </div>
    </div>
  </div>
}

export default Resume;