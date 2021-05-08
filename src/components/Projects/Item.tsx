import React, { useContext } from 'react';
import Tag from './Tag';
import Markdown from 'react-markdown';
import AppContext from '../../state';
import Icon from '../Icon';
import { Dialog, Transition } from '@headlessui/react';

export type ItemProps = {
  name: string,
  url: string,
  sourceUrl?: string,
  description: string,
  details: string,
  image: string,
  tags?: string[],
  reverse?: boolean,
}

export function Details({ name, url, details, image, tags }: ItemProps) {
  const { activeProjectVisible, setActiveProjectVisible } = useContext(AppContext);
  const hideActiveProject = () => setActiveProjectVisible(false);

  return (
    <Transition
      show={activeProjectVisible}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        static
        open={activeProjectVisible}
        onClose={hideActiveProject}
        className="fixed inset-0 w-screen h-screen text-white"
      >
        <Dialog.Overlay className="fixed w-screen h-screen" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />

        <div className="flex flex-col justify-center w-full h-full">
          <div className="z-10 p-4 overflow-y-auto" onClick={e => e.target === e.currentTarget && hideActiveProject()}>
            <div className="container relative p-4 mx-auto bg-gray-800">
              <button
                className="absolute text-3xl text-gray-300 right-3 top-1 hover:text-gray-500"
                onClick={hideActiveProject}
                aria-label="Close project details window"
              >
                &times;
              </button>

              <Dialog.Title as="h3" className="inline-block mb-4 text-6xl hover:text-blue-500"><a href={url} target="_blank">{name}</a></Dialog.Title>

              <ul className="flex flex-wrap gap-2">
                {
                  tags?.map((tag, key) => <li key={key}><Tag>{tag}</Tag></li>)
                }
              </ul>

              <hr className="my-4 border-t-2 border-blue-600" />

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
                <Markdown className="row-start-2 mb-4 space-y-4 lg:row-start-auto">{details}</Markdown>
                <a href={url} target="__blank" rel="noopener noreferrer">
                  <img className="object-cover w-full" src={image} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

// export function Details({ name, url, description, details, image, tags }: ItemProps) {
//   return (
//     <div className="fixed z-10 w-screen h-screen text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//       <div className="container flex flex-col justify-center h-full p-8 mx-auto">
//         <div className="p-4 bg-gray-800 rounded">
//           <h2 className="mb-8 text-6xl">{name}</h2>
//           <ul className="space-x-2">
//             {
//               tags?.map((tag, key) => <li className="inline" key={key}><Tag>{tag}</Tag></li>)
//             }
//           </ul>
//           <Markdown className="mb-4 space-y-4">{details}</Markdown>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Item({ name, url, sourceUrl, description, image, tags, details, reverse = false }: ItemProps) {
  const { setActiveProject } = useContext(AppContext);

  return (
    <div className={`flex border border-gray-800 shadow-xl ${reverse && 'text-right flex-row-reverse'}`}>
      <a
        className="hidden w-1/2 lg:flex lg:flex-col lg:justify-center"
        href={url}
        target="__blank"
        rel="noopener noreferrer">
        <img className="object-cover w-full" src={image} />
      </a>

      <div className={`flex flex-col w-full px-4 py-2 md:py-4 md:px-8 lg:w-1/2 ${reverse ? 'items-end' : 'items-start'}`}>
        <h3 className="inline-block mb-2 text-4xl font-semibold hover:text-blue-500">
          <a href={url} target="__blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>

        <Markdown className="mb-4 space-y-4">{description}</Markdown>

        <ul className="flex flex-wrap gap-2 mb-4">
          {
            tags?.map((tag, key) => <li key={key}><Tag>{tag}</Tag></li>)
          }
        </ul>

        <div className="flex gap-3 mt-auto">
          <button className="capitalize primary button" onClick={() => setActiveProject({ name, url, description, image, tags, details })}>
            View more details
          </button>
          <a
            href={sourceUrl}
            className="inline-flex items-center button link"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" className="inline w-5 mr-2" />
            View source
          </a>
        </div>
      </div>
    </div>
  )
}