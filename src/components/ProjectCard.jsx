// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title, desc, link }) => {
  return (
    <div className="flex flex-col">
      <a href={link}>
        <img src={image} className="w-full rounded-2xl mt-10" height={80} />
        <h1 className="text-3xl font-bold ml-2 mt-8">{title}</h1>
        <p className="ml-2 text-2xl font-normal mt-3">{desc}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
