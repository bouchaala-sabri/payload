import type { CollectionConfig } from 'payload'

import { authenticated } from '@/payload/access/authenticated'
import { slugField } from '@/payload/fields/slug'

export const SegmentsCollection: CollectionConfig = {
  slug: 'segments',
  admin: {
    useAsTitle: 'name',
  },
  fields: [{ name: 'name', type: 'text', required: true }],
}
