import React from "react";
import { Project } from "../components/Project";
import AddClientModal from "../components/AddClientModal";
import { Clients } from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

export const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddProjectModal />
        <AddClientModal />
      </div>
      <Project />
      <hr />
      <Clients />
    </>
  );
};
