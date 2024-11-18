import type { CollectionConfig } from 'payload'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'industry',
      type: 'relationship',
      relationTo: 'industries',
      label: 'Industry',
      required: true,
    },
    {
      name: 'segment',
      type: 'relationship',
      relationTo: 'segments',
      required: true,
      admin: {
        condition: (data) => !!data.industry,
      },
      label: 'Segment',
    },
  ],
  versions: {
    drafts: true,
  },
}
