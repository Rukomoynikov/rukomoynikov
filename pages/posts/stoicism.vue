<template>
  <div>
    <SocialHead
      :title="'Стоицизм за 15 минут'"
      :description="'Это первая часть их трех в серии «Как написать Телеграм—бота на Эликсире»'"
      :image="require('/assets/images/posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg')"
    />

    <HeroTitle
      :tags="['Философия']"
      :title="'Стоицизм за 15 минут'"
    />

    <ul>
      <li>
        Сосредоточтесь на том, что вы можете контроллировать
      </li>
      <li>Вы можете контролировать свои реакции на разные вещи</li>
      <li>Спрашивайте себя «Это действительно важно?»</li>
      <li>Цените время больше чем деньги и имущество</li>
      <li>Ежедневно размышляйте о том, что вы смертны</li>
      <li>Вы продукт своих привычек</li>
      <li>Помните, что вы не обязаны иметь мнение по любому поводу</li>
      <li>Пусть ваше утро принадлежит вам</li>
      <li>Проверяйте себя. Беседуйте с собой</li>
      <li>Не страдайте</li>
    </ul>

    https://www.youtube.com/watch?v=K34lseM_AG4&t=226s


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroTitle from '~/components/cases/HeroTitle.vue'

export default Vue.extend({
  components: {
    HeroTitle
  }
})
</script>
