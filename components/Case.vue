<template>
  <div class="case">
    <div class="image__container">
      <slot name="image" />
    </div>
    <div class="case__text">
      <div class="label">
        <slot name="label" />
      </div>
      <div class="title">
        <slot name="title" />
      </div>
      <div class="description">
        <slot name="description" />
      </div>
      <slot name="link" />
    </div>
  </div>
</template>

<style scoped>
.case {
  display: flex;
}

.case__text {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.link {
  color: #4f6ebf;
  font: 300 20px IBM Plex Sans, sans-serif;
  margin-bottom: 3px;
  margin-top: 10px;
}

.description {
  font: 300 20px IBM Plex Sans, sans-serif;
  margin-top: 8px;
}

.title {
  font: 400 24px IBM Plex Sans, sans-serif;
  margin-top: 15px;
}

.label {
  font: 400 18px IBM Plex Sans, sans-serif;
  background-color: #f9edc3;
  display: inline-block;
  padding: 0 10px;
  border-radius: 6px;
}

.image__container {
  border-radius: 6px;
}
</style>
