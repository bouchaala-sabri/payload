import type { CollectionConfig } from 'payload'

import { authenticated } from '@/payload/access/authenticated'
import { slugField } from '@/payload/fields/slug'

export const IndustriesCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  slug: 'industries',
  fields: [{ name: 'name', type: 'text', required: true }],
}
