import Image from '../App/Image';
import Tag from './Tag';
import { Link } from 'react-router-dom';

export default function Project({ name, id, url, sourceUrl, image, tags, description }) {
  console.log(name, url, sourceUrl)

  return (
    <div className="project max-w-lg mx-auto">
      {/* <Link to={`/projects/${id}`}> */}
      {/* </Link> */}
      <div className="box">
        {/* <Link to={`/projects/${id}`} className="name"> */}
        <a href={url} className="image-link" target="__blank">
          <Image className="image" src={image} alt={name} />
        </a>
        <a href={url} target="__blank">
          <h3 className="name">{name}</h3>
        </a>
        {/* </Link> */}
        <ul className="link-container">
          {
            [
              ['View Project', url],
              sourceUrl && ['View Source', sourceUrl]
            ].map((link, index) => {
              const [text, url] = link;

              return <li className="link-item" key={index}>
                <a className="link" href={url} target="_blank">{text}</a>
              </li>
            })
          }
        </ul>
        <p className="description">{description}</p>
        <ul className="tag-container">
          {tags.map((tag, index) => {
            return (
              <li className="tag-item" key={index}>
                <Tag key={index}>{tag}</Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}