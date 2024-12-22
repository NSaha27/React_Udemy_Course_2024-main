function ContactInfo({email, phone, address}){
  return <div className="contact">
    <h4 className="sub-section-heading">{email}</h4>
    <h4 className="sub-section-heading">{phone}</h4>
    <h4 className="sub-section-heading">{address}</h4>
  </div>
}

export default ContactInfo;