function PersonalInfo(props) {
  return (
    <div className="personal-info">
      <span className="pro">{props.profileExperience}</span>
      <img
        src={"images/" + props.profileImage}
        alt={props.profileName}
        className="profile-image"
      />
      <h3 className="profile-name">{props.profileName}</h3>
      <h6 className="profile-place">{props.profilePlace}</h6>
      <p className="profile-description">{props.profileDescription}</p>
    </div>
  );
}

export default PersonalInfo;
