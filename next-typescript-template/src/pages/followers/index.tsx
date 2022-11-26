import type { NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";

import Followers from "../../features/followers/Followers";

interface FollowersPage {
  followers: any;
}

const FollowersPage: NextPage = (props: FollowersPage) => {
  console.log(props);
  const router = useRouter();

  return (
    <div>
      FollowersPage
      {props.followers.map((follower) => {
        return (
          <div onClick={() => router.push(`/followers/${follower.login}`)}>
            {follower.login}
          </div>
        );
      })}
    </div>
  );
};

export default FollowersPage;

export async function getStaticProps(context) {
  const username = "aminhp93";
  const res = await axios(`https://api.github.com/users/${username}/followers`);
  const followers = res.data;
  return {
    props: {
      followers,
    }, // will be passed to the page component as props
  };
}
