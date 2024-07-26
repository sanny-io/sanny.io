import type { GlobalConfig } from 'payload'

export const Sections: GlobalConfig = {
  slug: 'sections',

  fields: [
    {
      type: 'blocks',
      name: 'section',

      blocks: [
        {
          slug: 'content',

          fields: [
            {
              type: 'text',
              name: 'content',
              required: true,
            },
          ],
        },

        {
          slug: 'experiences',

          fields: [
            {
              type: 'text',
              name: 'icon',
              required: true,
            },

            {
              type: 'text',
              name: 'description',
              required: true,
            },
          ],
        },

        {
          slug: 'histories',

          fields: [
            {
              type: 'text',
              name: 'name',
              required: true,
            },

            {
              type: 'textarea',
              name: 'lede',
              required: true,
            },

            {
              type: 'richText',
              name: 'description',
              required: true,
            },

            {
              type: 'date',
              name: 'start',
              required: true,
            },

            {
              type: 'date',
              name: 'end',
              required: false,
            },
          ],
        },

        {
          slug: 'projects',

          fields: [
            {
              type: 'text',
              name: 'name',
              required: true,
            },

            {
              type: 'text',
              name: 'liveUrl',
              required: false,
            },

            {
              type: 'text',
              name: 'sourceUrl',
              required: false,
            },

            {
              type: 'textarea',
              name: 'lede',
              required: true,
            },

            {
              type: 'richText',
              name: 'description',
              required: true,
            },

            {
              type: 'text',
              name: 'tags',
              required: false,
              hasMany: true,

              // fields: [
              //   {
              //     type: 'text',
              //     name: 'tag',
              //     required: true,
              //   },
              // ],
            },
          ],
        },
      ]
    },
  ],
}
