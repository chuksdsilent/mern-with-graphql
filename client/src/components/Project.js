import { Spinner } from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "./queries/projectQueries";
import { FaTruckLoading } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
export const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <div className="row mt-4">
        {data.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};
