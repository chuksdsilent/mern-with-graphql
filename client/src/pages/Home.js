import React from "react";
import { Project } from "../components/Project";
import AddClientModal from "../components/AddClientModal";
import { Clients } from "../components/Clients";

export const Home = () => {
  return (
    <>
      <AddClientModal />
      <Project />
      <Clients />
    </>
  );
};
