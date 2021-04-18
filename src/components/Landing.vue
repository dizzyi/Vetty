<template>
  <section id="landing" >
    <div class="tagline">
      <h1>Find the</h1>
      <h1>purrr~fect vet</h1>
      <h1>for your pet</h1>
      <a href="#">Join Us</a>
    </div>
    <div>
      <img src="../assets/landing.svg" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#landing{
  height: 75vh;
  background: #1d1d1f;
  display: flex;
  align-content: center;
  justify-content: center;
  gap:20vw;
}
#landing div{
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
a{
  text-decoration: none;
  color:white;
  font-size: 1.5rem;
  background: linear-gradient(30deg, #e85b0b, #CA1B06);
  padding: 1rem;
  width: 15rem;
  text-align: center;
  border-radius: 1.5rem;
  margin-top:1rem;
  font-weight:500;
  filter:drop-shadow(0px 0px 3px #e85b0b)
}
h1{
  font-size:60px;
}
</style>