import * as React from "react";
import axios from "axios";

export type ProfileProps = {};

const Profile = (props: ProfileProps) => {
  const [text, setText] = React.useState("aminhp93");
  const [profile, setProfile] = React.useState(null);

  const handleGetProfile = async () => {
    const res = await axios(`https://api.github.com/users/${text}`);
    setProfile(res.data);
  };

  React.useEffect(() => {
    const fetchProfile = async (username) => {
      const res = await axios(`https://api.github.com/users/${username}`);
      setProfile(res.data);
    };
    fetchProfile("aminp93");
  }, []);

  console.log(profile);

  return (
    <div>
      <div>Profile</div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleGetProfile()}>Get profile</button>
      <div>{profile?.name}</div>
    </div>
  );
};

export default Profile;
