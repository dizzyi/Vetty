<template>
  <div class="home">
    <landing/>
    <joinus/>
    <contact/>
  </div>
</template>

<script>
import joinus from '../components/JoinUs.vue';
import landing from '../components/Landing.vue';
import contact from '../components/Contact.vue';

export default {
  name: 'Home',
  components: {
    joinus,landing,contact
  }
}
</script>


