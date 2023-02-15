import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'Title of the NFT Drop',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      description: 'Description of the collection',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'address',
      description: 'Address of the collection',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'collectionName',
      description: 'Name of the collection',
      title: 'Collection Name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      description: 'Slug of the collection',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'creator',
      description: 'Creator of the collection',
      title: 'Creator',
      type: 'reference',
      to: {type: 'creator'},
    }),
    defineField({
      name: 'mainImage',
      description: 'Main image of the collection',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'previewImage',
      description: 'Preview image of the collection',
      title: 'Preview image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
