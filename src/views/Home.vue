<template>
  <div class="home">
    <landing/>
    <joinus/>
  </div>
</template>

<script>
import joinus from '../components/JoinUs.vue';
import landing from '../components/Landing.vue';

export default {
  name: 'Home',
  components: {
    joinus,landing
  }
}
</script>


