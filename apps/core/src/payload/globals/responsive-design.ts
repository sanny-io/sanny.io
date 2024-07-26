import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const ResponsiveDesign: GlobalConfig = {
  slug: 'responsive-design',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
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

    lexicalHTML('description', {
      name: 'descriptionHtml',
    }),
  ],
}