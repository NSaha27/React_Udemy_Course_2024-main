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
    return <div className="profile" style={{width: "100%"}}>
        <div className="basicDetails" style={{padding: "1rem", lineHeight: "0.8rem"}}>
            <h2 className="profileName" style={{fontSize: "2rem", fontWeight: "800", textTransform: "capitalize", color: "teal", marginBottom: "2rem"}}>{prfName}</h2>
            <p className="profileInfo" style={{fontSize: "1.2rem", fontWeight: "600", textTransform: "capitalize", color: "maroon"}}>{prfInfo}</p>
            <p className="profileContact1" style={{fontSize: "1rem", fontWeight: "600"}}>Contact no.: {prfContact}</p>
            <p className="profileContact2" style={{fontSize: "1rem", fontWeight: "600"}}>Email: {prfContact2}</p>
        </div>
        <div className="skills" style={{padding: "1rem"}}>
            <ul style={{padding: "0", margin: "0", listStyleType: "none", overflow: "hidden"}}>
                {
                    prfSkills.map((skl, indx, arr) => <li className="skill" style={{padding: "0.5rem", border: "1px solid #181818", borderRadius: "6px", margin: "0 0.5rem 0.5rem 0", float: "left", backgroundColor: "#eee"}}>{skl.skill}, Rating: {skl.rating} </li>)
                }
            </ul>
        </div>
    </div>
}

export default Profile;