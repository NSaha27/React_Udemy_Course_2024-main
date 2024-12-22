function Header(props){
  return <div className="header">
    <h1 className="profile-name">{props.profile.profileName}</h1>
    <div className="summary">
      <h2 className="section-title">Summary</h2>
      <p>{props.profile.profileSummary}</p>
    </div>
  </div>
}

export default Header;