function Footer({ curHour, openHour, closeHour, isLoggedIn }) {
  return (
    <div className="footer">
      {curHour >= openHour && curHour <= closeHour ? (
        <>
          <h6>we're current open, please visit us or order online 😊</h6>
          <a
            href={isLoggedIn ? "/cart" : "/customer-login"}
            className="btn btn-warning"
          >
            {isLoggedIn ? "Go to Cart" : "Log in"}
          </a>
        </>
      ) : (
        <h6>
          we're close now, please visit us or order online between {openHour}:00
          hours and {closeHour}:00 hours, thank you 😊
        </h6>
      )}
    </div>
  );
}

export default Footer;
