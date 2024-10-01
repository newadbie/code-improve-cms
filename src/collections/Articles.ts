import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: { en: 'Article', pl: 'Artykuł' },
    plural: { en: 'Articles', pl: 'Artykuły' },
  },
  admin: {
    group: { en: 'Content', pl: 'Zawartość' },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
      label: { en: 'Title', pl: 'Tytuł' },
      localized: true,
    },
    {
      name: 'thumbnail',
      required: true,
      type: 'upload',
      relationTo: 'media',
      localized: false,
      label: { en: 'Thumbnail', pl: 'Miniatura' },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      localized: false,
      label: { en: 'Tags', pl: 'Tagi' },
    },
    {
      name: 'description',
      required: true,
      type: 'text',
      maxLength: 160,
      label: { en: 'Description', pl: 'Opis' },
    },
    {
      name: 'content',
      required: true,
      type: 'richText',
      label: { en: 'Content', pl: 'Treść' },
      localized: true,
    },
  ],
}
