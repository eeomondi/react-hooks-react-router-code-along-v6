import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  const { id } = useParams();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile: {id}</h1>
      </main>
    </>
  );
}

export default UserProfile;
