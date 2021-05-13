import React from 'react';
import Item from './Item';
// @ts-ignore
import { attributes as items } from '../../content/experience.md';

export default function Experience() {
  return (
    <section id="experience" className="text-white bg-gray-800">
      <div className="container px-8 py-16 mx-auto">
        <h2 className="mb-16 text-5xl tracking-widest text-center uppercase md:text-6xl">My experience</h2>
        <div className="p-2 bg-gray-900 border-l-2 border-blue-600 rounded md:p-8">
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
            {
              // @ts-ignore
              items.map((item, key) => <Item {...item} key={key} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}