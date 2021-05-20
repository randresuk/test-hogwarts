<template>
  <fragment>
    <img
      class="img--gradient img--position"
      src="../assets/images/hogwarts-bck.jpg"
      alt="img-bckg"
    />
    <div class="content content--ubication">
      <h1 class="title-home--font ">Magician School Education</h1>
      <h2 class="subtitle-home--font ">
        Welcome to MSE, if you want to know more about our members, we encourage
        you to continue...
      </h2>
      <ScrollAnimation />
    </div>
  </fragment>
</template>

<script>
import ScrollAnimation from '@/components/utils/ScrollAnimation';

export default {
  name: 'HeadHome',
  components: {
    ScrollAnimation
  }
}
</script>