import { Image, Icon } from '../App';

export default function PersonalCard({ name, headshot, title, description, classes, links }) {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center text-center p-6 text-white">
      <h1 className="text-4xl mb-4 font-semibold">{name}</h1>
      <Image src={headshot} className={`${classes.headshot} mx-auto rounded-full mb-4`} alt={name} />
      <span className="text-gray-400 mb-2">{title}</span>
      <div className="mb-1">
        <ul className="flex justify-center space-x-4">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Icon className="w-6 h-6 hover:text-gray-400" type={link.iconType} link={link.url} />
              </li>
            )
          })}
        </ul>
      </div>
      <p className="mb-6">{description}</p>
    </div>
  );
}