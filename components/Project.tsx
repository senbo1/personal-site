import { GoRepo } from "react-icons/go";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, link }) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="font-bold flex items-center gap-1 hover-transition underline-gray">
          <GoRepo className="h-4" />
          {name}
        </h2>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Project;
