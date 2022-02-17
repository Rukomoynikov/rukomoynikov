<template>
  <div class="flex">
    <Container :type="'content'">
      <a href="http://digitaldeals.today" class="gallery__block gallery__block-full">
        <img src="~assets/images/cases/digitaldeals/digitaldeals-fullpage.webp" loading="lazy" class="case__image">
      </a>
    </Container>
    <div>
      <slot />
    </div>
  </div>
</template>
