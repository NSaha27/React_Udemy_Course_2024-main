function Footer(){
    const curHour = new Date().toLocaleTimeString();
    const openHour = 10;
    const closeHour = 22;
    return <div className="footer">
        <p>{curHour}, we are {curHour >= openHour && curHour <= closeHour ? "open" : "close"} now</p>
        <button>Order now</button>
    </div>
}

export default Footer;