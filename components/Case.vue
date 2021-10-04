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

@media only screen and (max-width: 595px) {
  .case {
    flex-direction: column;
  }
}

.case__text {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  max-width: 380px;
}

@media only screen and (max-width: 595px) {
  .case__text {
    margin-left: 5px;
    max-width: 80%;
  }
}

.link {
  color: #4f6ebf;
  font: 300 20px IBM Plex Sans, sans-serif;
  margin-bottom: 3px;
  margin-top: 10px;
}

.description {
  font: 300 18px IBM Plex Sans, sans-serif;
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

.case__image {
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.4);
  overflow: hidden;
  border-radius: 6px;

  /* flex: 1; */
}

@media only screen and (max-width: 595px) {
  .case__image {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .case__text {
    min-width: 33%;
  }
}
</style>
