import profilePic from "/profile.png";

export default function ProfilePic() {
  return (
    <div className="profile-stage">
      <div className="profile-orbit" aria-hidden="true"><span>AB // 2026</span></div>
      <div className="profile-frame"><img src={profilePic} alt="Antônio Bosco" /></div>
      <div className="profile-tag"><i /> WEB SYSTEMS ONLINE</div>
    </div>
  );
}
