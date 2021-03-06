import React from 'react';
/// @ts-ignore
import { attributes as items } from '../../content/history.md';
import Item from './Item';

export default function History() {
  return (
    <section id="history" className="container px-4 py-16 mx-auto text-white md:px-32">
      <hr className="mb-16 border-t-2 border-blue-600" />
      <h2 className="mb-16 text-5xl tracking-widest text-center uppercase lg:text-left lg:mb-24 md:text-6xl">My history</h2>
      <ul className="flex flex-col space-y-6">
        {
          // @ts-ignore
          items.map((item, key) => <li key={key}><Item {...item} /></li>)
        }
      </ul>
    </section>
  )
}