<template>
  <section class="content">
    <ContentDoc v-slot="{ doc }">
      <header class="hero">
        <h1 class="title">{{ doc.title }}</h1>
      </header>
      <section class="block">
        <div class="card">
          <ContentRenderer :value="doc" />
        </div>
      </section>
    </ContentDoc>
  </section>
</template>
