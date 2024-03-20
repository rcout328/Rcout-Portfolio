// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title, desc, link }) => {
  return (
    <div className="flex flex-col">
      <a href={link}>
        <img
          src={image}
          className="w-full rounded-2xl mt-10 phone:w-full phone:h-80 md:h-100 phone:object-cover mid:w-full mid:h-80 mid:object-cover mac:w-full mac:h-80 mac:object-cover mal:w-full mal:h-80 mal:object-cover mad:w-full mad:h-80 mad:object-cover"
          alt={title} // Don't forget alt attribute for accessibility
        />
        <h1 className="text-3xl font-bold ml-2 mt-8 phone:text-2xl mac:text-2xl mal:text-2xl mad:text-2xl">
          {title}
        </h1>
        <p className="ml-2 text-2xl font-normal mt-3 phone:text-xl mac:text-xl mal:text-xl mad:text-2xl">
          {desc}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
