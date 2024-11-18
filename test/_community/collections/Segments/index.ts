import type { CollectionConfig } from 'payload'

import { authenticated } from '@/payload/access/authenticated'
import { slugField } from '@/payload/fields/slug'

export const SegmentsCollection: CollectionConfig = {
  slug: 'segments',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'industry',
      type: 'relationship',
      required: true,
      relationTo: 'industries',
    },
    { name: 'name', type: 'text', required: true },
  ],
}
