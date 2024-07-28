import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const Projects: GlobalConfig = {
  slug: 'projects',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'array',
      name: 'projects',

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
          type: 'richText',
          name: 'lede',
          required: true,

          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              HTMLConverterFeature({}),
            ],
          }),
        },

        {
          type: 'richText',
          name: 'description',
          required: true,

          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              HTMLConverterFeature({}),
            ],
          }),
        },

        lexicalHTML('lede', {
          name: 'ledeHtml',
        }),

        lexicalHTML('description', {
          name: 'descriptionHtml',
        }),

        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: false,
        },

        {
          type: 'text',
          name: 'tags',
          required: false,
          hasMany: true,
        },
      ],
    }
  ],
}