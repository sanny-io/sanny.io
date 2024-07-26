import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const Agile: GlobalConfig = {
  slug: 'agile',

  fields: [
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

    {
      type: 'upload',
      name: 'backgroundImage',
      required: true,
      relationTo: 'media',
    },

    lexicalHTML('description', {
      name: 'descriptionHtml',
    }),
  ],
}