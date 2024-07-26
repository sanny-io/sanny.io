import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',

  fields: [
    {
      type: 'text',
      name: 'name',
    },

    {
      type: 'text',
      name: 'title',
    },
  ],
}