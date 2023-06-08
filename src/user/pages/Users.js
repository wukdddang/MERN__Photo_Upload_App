import React from "react";
import UsersList from "../components/UsersList";

function Users(props) {
  const USERS = [
    {
      id: "u1",
      name: "IU",
      image:
        "https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-6/343189330_602895661876012_4486648636604628426_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=bJ_NmZt6NdsAX9dRtxf&_nc_ht=scontent-gmp1-1.xx&oh=00_AfBJziSUgd8h0KGTURSLV2JtkXPW1gUBHveePBLBOUyRIw&oe=6486831F",
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
