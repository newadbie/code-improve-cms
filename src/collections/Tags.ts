import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    group: { en: 'Content', pl: 'Zawartość' },
    useAsTitle: 'tag',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
