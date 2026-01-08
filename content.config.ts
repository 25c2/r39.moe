import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  components: {
    global: true
  },
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})
