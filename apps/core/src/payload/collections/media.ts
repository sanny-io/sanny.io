import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
    disableLocalStorage: true,

    // imageSizes: [
    //   {
    //     name: 'sm',
    //     width: 640,
    //     height: undefined,
    //   },

    //   {
    //     name: 'md',
    //     width: 768,
    //     height: undefined,
    //   },

    //   {
    //     name: 'lg',
    //     width: 1024,
    //     height: undefined,
    //   },

    //   {
    //     name: 'xl',
    //     width: 1280,
    //     height: undefined,
    //   },

    //   {
    //     name: '2xl',
    //     width: 1400,
    //     height: undefined,
    //   },
    // ]
  },

  fields: [
    {
      type: 'text',
      name: 'alt',
    },
  ],
}