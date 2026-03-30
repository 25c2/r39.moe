<template>
  <details :open="isOpen" class="fold">
    <summary class="fold-summary">
      <span class="fold-chevron" aria-hidden="true" />
      <span class="fold-title">{{ displayTitle }}</span>
    </summary>
    <div class="fold-body">
      <slot />
    </div>
  </details>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  },
  open: {
    type: [Boolean, String],
    default: false
  }
})

const displayTitle = computed(() => props.title || props.summary || '詳細を開く')

const isOpen = computed(() => {
  if (props.open === '' || props.open === true) {
    return true
  }

  if (typeof props.open === 'string') {
    const raw = props.open.toLowerCase()
    return raw === 'true' || raw === '1' || raw === 'open'
  }

  return false
})
</script>
