import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryReference',
  title: 'Gallery Block',
  type: 'object',
  fields: [
    defineField({
      name: 'gallery',
      title: 'Select Gallery',
      type: 'reference',
      to: [{ type: 'gallery' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'gallery.title' },
  },
})
