function Footer(){
    const date = new Date();
    const curHour = date.getHours();
    const openHour = 10;
    const closeHour = 22;
    return <div className="footer" style={{width: "100%", marginBottom: "1rem", textAlign: "center"}}>
        <p>{date.toLocaleTimeString()}, I am {curHour >= openHour && curHour <= closeHour ? "available" : "unavailable"} now!</p>
        <button>Contact Me</button>
    </div>
}

export default Footer;