import Project from './Project';

export default function Projects({ heading, contents }) {
  return (
    <section className="projects">
      <h2 className="heading">{heading}</h2>
      <div className="listing">
        {contents.map((project, index) => {
          return (
            <div className="w-full" key={index}>
              <Project {...project} />
            </div>
          );
        })
        }
      </div>
    </section>
  );
}