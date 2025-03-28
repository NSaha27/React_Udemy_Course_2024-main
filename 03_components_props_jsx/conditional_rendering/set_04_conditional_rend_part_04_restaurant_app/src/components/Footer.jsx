function Footer(props) {
  return (
    <div className="footer">
      {props.curHour >= props.openHour && props.curHour <= props.closeHour ? (
        <>
          <h6>we're current open, please visit us or order online 😊</h6>
          <a
            href={props.isLoggedIn ? "/cart" : "/customer-login"}
            className="btn btn-warning"
          >
            {props.isLoggedIn ? "Go to Cart" : "Log in"}
          </a>
        </>
      ) : (
        <h6>
          we're close now, please visit us or order online between{" "}
          {props.openHour}:00 hours and {props.closeHour}:00 hours, thank you 😊
        </h6>
      )}
    </div>
  );
}

export default Footer;
