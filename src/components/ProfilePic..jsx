import profilePic from "/profile.png";

export default function ProfilePic() {
  return (
    <div className="flex justify-center items-center">
      <img src={profilePic} alt="Profile Picture" className="w-44 h-44 " />
    </div>
  );
}
