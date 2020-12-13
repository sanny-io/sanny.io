
export default function Introduction({ heading, contents }) {
  return (
    <section className="introduction">
      <h2 className="heading">{heading}</h2>
      <div className="contents">
        {
          contents.map((content, index) => {
            return <p key={index}>{content}</p>
          })
        }
      </div>
    </section>
  );
}