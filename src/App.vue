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
  color: #E3E3E3;
}
body{
  background: linear-gradient(-90deg, #4b4b79, #3c1b44);
  font-family: 'Poppins',sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
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
h4{
  font-size: 1rem;
  font-weight: 400;
}
.container{
  width:85%;
  margin:auto
}
.foreground{
  background: #1C2034;
  filter: drop-shadow(1px 1px 3px black);
}
</style>
