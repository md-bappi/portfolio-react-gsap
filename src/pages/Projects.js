const data = [
  {
    id: 1,
    number: "01",
    title: "React Todo App",
    date: "Nov/23",
    tools: "React - Tailwind CSS",
  },
  {
    id: 2,
    number: "02",
    title: "Immemorial",
    date: "Nov/23",
    tools: "React - React Router - Gsap - CSS",
  },
  {
    id: 3,
    number: "03",
    title: "Foodverse",
    date: "Nov/23",
    tools: "React - React Router - Tailwind CSS",
  },
  {
    id: 4,
    number: "04",
    title: "Tech Alpha",
    date: "Jan/24",
    tools: "React - React Router - Redux - Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="titles">
        <span>Selected works (2023-2024)</span>
        <span>Projects</span>
      </div>

      <div className="projects-list-wrapper">
        {data.map((project) => (
          <div className="project-wrapper">
            <div className="project-item">
              <div className="project-titles">
                <span>{project.number}</span>
                <h2>{project.title}</h2>
              </div>

              <div className="project-details">
                <span>{project.date}</span>
                <span>{project.tools}</span>
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
