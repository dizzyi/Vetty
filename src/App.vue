<template>
  <navbar/>
  <router-view></router-view>
</template>

<script>
import navbar from './components/NavBar.vue';

export default ({
  components:{
    navbar,
  }
})
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,900&display=swap');

*{
  margin:0;
  border:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family: 'Poppins',sans-serif;
}
h1{
  font-size: 3rem;
  font-style: italic;
}
h2{
  font-size: 2.5rem;
  font-weight: bold;
}
h3{
  font-size: 2rem;
  font-weight: 500;
}
</style>
