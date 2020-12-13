import { Image } from '../App';

export default function Experience({ name, title, startDate, endDate, descriptions, reverse, image, url }) {
  return (
    <article className={`experience ${reverse && 'reverse'}`}>
      <a href={url} className="link">
        <Image src={image} className="image" alt={name} />
      </a>
      <div className="info">
        <a className="name" href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        <p className="title">{title}</p>
        <p className="dates">{`${startDate} - ${endDate || 'Present'}`}</p>
        <div className="space-y-4">
          {descriptions.map((description, index) => {
            return <p key={index}>{description}</p>
          })}
        </div>
      </div>
    </article>
  );
};