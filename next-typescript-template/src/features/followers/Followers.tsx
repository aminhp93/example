import * as React from "react";
import axios from "axios";

export type FollowersProps = {};

const Followers = (props: FollowersProps) => {
  const [text, setText] = React.useState("aminhp93");
  const [followers, setFollowers] = React.useState(null);

  const handleGetFollowers = async () => {
    const res = await axios(`https://api.github.com/users/${text}`);
    setFollowers(res.data);
  };

  React.useEffect(() => {
    const fetchFollowers = async (username) => {
      const res = await axios(
        `https://api.github.com/users/${username}/followers`
      );
      setFollowers(res.data);
    };
    fetchFollowers("aminhp93");
  }, []);

  console.log(followers);

  return (
    <div>
      <div>Followers</div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleGetFollowers()}>Get Followers</button>
      <div>{Followers?.name}</div>
    </div>
  );
};

export default Followers;
