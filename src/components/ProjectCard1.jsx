// eslint-disable-next-line react/prop-types
const ProjectCard1 = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col">
      <a>
        <img src={image} className="w-full rounded-2xl mt-20" height={80} />
        <h1 className="text-6xl font-bold ml-2 mt-8">{title}</h1>
        <p className="ml-2 text-3xl font-normal mt-3">{desc}</p>
      </a>
    </div>
    // eslint-disable-next-line react/prop-types
  );
};

export default ProjectCard1;
