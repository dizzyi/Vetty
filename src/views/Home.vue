<template>
  <div class="home">
    <landing/>
    <selling/>
    <joinus/>
    <contact/>
  </div>
</template>

<script>
import joinus from '../components/JoinUs.vue';
import landing from '../components/Landing.vue';
import contact from '../components/Contact.vue';
import selling from '../components/Selling.vue';

export default {
  name: 'Home',
  components: {
    joinus,landing,contact,selling
  }
}
</script>


