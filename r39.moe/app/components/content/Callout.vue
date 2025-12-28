<template>
  <div :class="['callout', `callout-${normalizedType}`]">
    <div v-if="displayTitle" class="callout-head">
      <span class="callout-icon" aria-hidden="true" />
      <span class="callout-title">{{ displayTitle }}</span>
    </div>
    <div class="callout-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  title: {
    type: String,
    default: ''
  }
})

const normalizedType = computed(() => {
  const raw = (props.type || '').toLowerCase()
  if (raw === 'warn' || raw === 'warning') {
    return 'warn'
  }
  if (raw === 'error' || raw === 'danger') {
    return 'error'
  }
  return 'info'
})

const displayTitle = computed(() => {
  if (props.title) {
    return props.title
  }
  if (normalizedType.value === 'warn') {
    return '注意'
  }
  if (normalizedType.value === 'error') {
    return '警告'
  }
  return '情報'
})
</script>
