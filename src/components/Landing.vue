<template>
  <section id="landing">
    <div>
      <h2>Find the</h2>
      <h1>purrr~fect vet</h1>
      <h2>for your pet</h2>
      <a href="#">Join Us</a>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#landing{
  height: 80vh;
  background-image: url("../assets/home_001.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: scaleX(-1);
}
#landing div{
  transform: scaleX(-1);
  margin-right: 20vw;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
a{
  text-decoration: none;
  color:white;
  background: #e85b0b;
  width: 8rem;
  padding: 1rem;
  text-align: center;
  border-radius: 1.5rem;
  margin-top:1rem
}
h1{
  font-size:60px;
}
</style>