function Footer(props){
  return <div className="footer">
    <p style={props.curHour >= props.openHour && props.curHour <= props.closeHour ? {color: 'green'} : {color: 'red'}}>
      {
        props.curHour >= props.openHour && props.curHour <= props.closeHour ? "***we're open now, please visit to us or give an online order!" : `***we'll be happy to welcome you between ${props.openHour}:00 and ${props.closeHour}:00 hours!`
      }
    </p>
  </div>
}

export default Footer;