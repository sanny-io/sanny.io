import React from 'react';
import Icon, { IconType } from '../Icon';

export type ItemProps = {
  name: string,
  icon: IconType,
  description: string,
}

export default function Item({ name, icon, description }: ItemProps) {
  return (
    <div className="flex p-6 transition-colors duration-300 border border-gray-700 rounded hover:border-blue-500">
      <Icon type={icon} className="hidden w-16 mr-6 md:inline-block min-w-[60px] max-w-[60px] max-h-[60px] self-center" />
      <div>
        <h3 className="text-xl font-bold text-blue-500">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}