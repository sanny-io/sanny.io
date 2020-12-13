import Experience from './Experience';

export default function Experiences({ heading, contents }) {
  return (
    <section className="experiences">
      <h2 className="heading">{heading}</h2>

      <div className="listing">
        {contents.map((experience, index) => {
          return <Experience {...experience} reverse={index % 2 === 0} key={index} />
        })}
      </div>
    </section>
  );
}