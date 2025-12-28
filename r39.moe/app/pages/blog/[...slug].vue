<template>
  <section class="content">
    <header v-if="post" class="hero">
      <h1 class="title">{{ post.title }}</h1>
    </header>
    <section class="block">
      <div class="card">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </section>
  </section>
</template>

<script setup>
const route = useRoute()
const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value.join('/') : value || ''
})

const { data: post } = await useAsyncData(
  () => `blog:${slug.value}`,
  () => queryCollection('blog').path(`/blog/${slug.value}`).first()
)
</script>
