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
        <ul class="list">
          <li v-for="post in filteredPosts" :key="post._path">
            <NuxtLink class="link-row" :to="post._path">{{ post.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup>
useHead({ title: 'Blog' })

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blog').find()
)

const selectedTag = ref('')

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
  const list = (posts.value || []).filter((post) => post._path)
  if (!selectedTag.value) {
    return list
  }
  return list.filter(
    (post) => Array.isArray(post.tags) && post.tags.includes(selectedTag.value)
  )
})

const toggleTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? '' : tag
}
</script>
