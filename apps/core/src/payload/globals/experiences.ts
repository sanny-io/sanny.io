import type { GlobalConfig } from 'payload'

export const Experiences: GlobalConfig = {
  slug: 'experiences',
  label: 'Experience',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'array',
      name: 'experiences',
      label: 'Experience',

      fields: [
        {
          type: 'upload',
          name: 'icon',
          required: true,
          relationTo: 'media',
        },

        {
          type: 'text',
          name: 'description',
          required: true,
        },
      ],
    },
  ],
}