import Technology from './Technology';

export default function Technologies({ heading, contents }) {
  return (
    <section className="technologies">
      <h2 className="heading">{heading}</h2>
      <div className="listing">
        {contents.map((technology, index) => {
          return (
            <Technology {...technology} key={index} />
          );
        })}
      </div>
    </section>
  )
}