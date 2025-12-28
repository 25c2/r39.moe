<template>
  <section class="content">
    <header class="hero">
      <h1 class="title">📚 Blog</h1>
      <p class="lead">更新するかもしれないし、しないかもしれない</p>
    </header>
    <section class="block">
      <div class="card">
        <div class="tag-row">
          <button
            v-for="tag in tags"
            :key="tag"
            class="tag-button"
            :class="{ 'is-active': selectedTag === tag }"
            type="button"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
        <div v-for="group in groupedPosts" :key="group.key" class="month-group">
          <div class="month-title">{{ group.label }}</div>
          <ul class="list">
            <li v-for="post in group.posts" :key="getPostPath(post)">
              <NuxtLink class="link-row" :to="getPostPath(post)">{{ post.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
useHead({ title: 'Blog' })

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').all()
)

const selectedTag = ref('')

const getPostPath = (post) => post?.path || ''

const getPostMeta = (post) => {
  const path = getPostPath(post)
  const parts = path.split('/').filter(Boolean)
  const ym = parts[1] || ''
  const rawIndex = parts[2] || ''
  const index = Number.parseInt(rawIndex, 10)
  return { ym, index: Number.isNaN(index) ? 0 : index }
}

const formatYearMonth = (ym) => {
  if (ym.length === 6) {
    return `${ym.slice(0, 4)}-${ym.slice(4, 6)}`
  }
  return ym || 'Unknown'
}

const tags = computed(() => {
  const seen = new Set()
  const result = []
  for (const post of posts.value || []) {
    const postTags = Array.isArray(post.tags) ? post.tags : []
    for (const tag of postTags) {
      if (!seen.has(tag)) {
        seen.add(tag)
        result.push(tag)
      }
    }
  }
  return result
})

const filteredPosts = computed(() => {
  const list = (posts.value || []).filter((post) => getPostPath(post))
  if (!selectedTag.value) {
    return list
  }
  return list.filter(
    (post) => Array.isArray(post.tags) && post.tags.includes(selectedTag.value)
  )
})

const groupedPosts = computed(() => {
  const groups = new Map()
  for (const post of filteredPosts.value) {
    const meta = getPostMeta(post)
    if (!groups.has(meta.ym)) {
      groups.set(meta.ym, [])
    }
    groups.get(meta.ym).push({ post, meta })
  }

  const sortedKeys = Array.from(groups.keys()).sort((a, b) => b.localeCompare(a))
  return sortedKeys.map((key) => {
    const items = groups.get(key) || []
    items.sort((a, b) => b.meta.index - a.meta.index)
    return {
      key,
      label: formatYearMonth(key),
      posts: items.map((item) => item.post)
    }
  })
})

const toggleTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? '' : tag
}
</script>
