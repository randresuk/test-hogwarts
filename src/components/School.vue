<template>
  <div class="wrapper wrapper--color">
    <div class="container">
      <HeadHome />
      <Characters />
    </div>
  </div>
</template>

<script>
import HeadHome from '@/components/HeadHome.vue';
import Characters from '@/components/Characters.vue';

export default {
  components: {
    HeadHome,
    Characters
  },
};
</script>

<style lang="scss">
.coustom{
  display: inherit;
}
</style>
