import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const MyHistory: GlobalConfig = {
  slug: 'my-history',
  label: 'History',

  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },

    {
      type: 'array',
      name: 'histories',
      label: 'History',

      fields: [
        {
          type: 'text',
          name: 'name',
          required: true,
        },

        {
          type: 'text',
          name: 'title',
          required: true,
        },

        {
          type: 'text',
          name: 'url',
          required: false,
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
    }
  ],
}