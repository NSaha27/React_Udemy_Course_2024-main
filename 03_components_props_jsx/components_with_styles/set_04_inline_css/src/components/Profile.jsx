function Profile(){
    const prfName = "Niladri Saha";
    const prfInfo = "Full-stack web developer";
    const prfContact = "+918919478500";
    const prfContact2 = "sahaniladri25y@gmail.com";
    const prfSkills = [
        {
            skill: "HTML & CSS",
            rating: 4.5
        },
        {
            skill: "Bootstrap 5",
            rating: 3.5
        },
        {
            skill: "JavaScript",
            rating: 4
        },
        {
            skill: "React JS",
            rating: 3
        },
        {
            skill: "Node JS & Express JS",
            rating: 4
        },
        {
            skill: "Mongo DB",
            rating: 4
        },
        {
            skill: "MySQL",
            rating: 4.5
        },
        {
            skill: "Python",
            rating: 3.5
        },
        {
            skill: "Django",
            rating: 3
        }
    ];
    return <div className="profile">
        <div className="basicDetails">
            <h2 className="profileName">{prfName}</h2>
            <p className="profileInfo">{prfInfo}</p>
            <p className="profileContact1">{prfContact}</p>
            <p className="profileContact2">{prfContact2}</p>
        </div>
        <div className="skills">
            {
                prfSkills.map((skl, indx, arr) => <span className="skill">{skl.skill} rating: {skl.rating} </span>)
            }
        </div>
    </div>
}

export default Profile;