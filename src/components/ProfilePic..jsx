import profilePic from "/profile.png";

export default function ProfilePic() {
  return (
    <figure className="profile-stage">
      <img src={profilePic} width="1024" height="1024" alt="Antônio Bosco" />
      <figcaption>SINAL // 01</figcaption>
    </figure>
  );
}
