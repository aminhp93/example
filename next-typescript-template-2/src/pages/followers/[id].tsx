import type { NextPage } from "next";
import axios from "axios";

import Followers from "../../features/followers/Followers";

const FollowerDetailPage: NextPage = ({ followerDetail }: any) => {
  console.log(followerDetail);
  return (
    <div>
      FollowerDetailPage
      <div>
        {followerDetail.name} - {followerDetail.location}{" "}
      </div>
    </div>
  );
};

export default FollowerDetailPage;

export async function getStaticPaths() {
  const username = "aminhp93";
  const res = await axios(`https://api.github.com/users/${username}/followers`);
  const followers = res.data;
  const paths = followers.map((follower) => ({
    params: { id: follower.login },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("===================", params);

  const res = await axios(`https://api.github.com/users/${params?.id}`);
  const followerDetail = res.data;
  return {
    props: {
      followerDetail,
    }, // will be passed to the page component as props
  };
}
