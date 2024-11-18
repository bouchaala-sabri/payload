import type { CollectionConfig } from 'payload'

export const CategoriesCollection: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [{ name: 'name', type: 'text', required: true }],
}
