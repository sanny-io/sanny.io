import type { GlobalConfig } from 'payload'

export const MyExperience: GlobalConfig = {
  slug: 'my-experience',
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
          type: 'text',
          name: 'name',
          required: true,
        },

        {
          type: 'text',
          name: 'description',
          required: true,
        },

        {
          type: 'upload',
          name: 'icon',
          required: true,
          relationTo: 'svg',
        },
      ],
    },
  ],
}