// eslint-disable-next-line react/prop-types
const ProjectCard1 = ({ image, title, desc, link }) => {
  return (
    <section className="flex flex-col">
      <a href={link}>
        <img
          src={image}
          className="w-full rounded-2xl mt-20 phone:w-full phone:h-80 md:h-100 phone:object-cover"
          height={80}
        />
        <h1 className="text-6xl font-bold ml-2 mt-8 phone:text-4xl">{title}</h1>
        <p className="ml-2 text-3xl font-normal mt-3 phone:text-xl">{desc}</p>
      </a>
    </section>
    // eslint-disable-next-line react/prop-types
  );
};

export default ProjectCard1;
