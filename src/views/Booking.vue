<template>
  <div id="booking">
    <div id="qblock">
      <h3>Searh for the Pet your pet deserve!!</h3>
      <form action="./booking/result">
        <label>
          Keyword
          <input type="text" name="q" id="q" placeholder="keyword, Clinic, Vet" >
        </label>
        <label>
          Location
          <input type="text" name="location" id="location" placeholder="Location" >
        </label>
        <label>
          specialty
          <input type="text" name="spec" id="spec" placeholder="Specialty">
        </label>
        <label>
          Time
          <input type="text" name="time" id="time" placeholder="Time">
        </label>
        <button>Search</button>
      </form>
    </div>

    <img src="../assets/black_cat.svg" alt="">
  </div>
</template>

<script>

export default {
  components: { },
}
</script>

<style scoped>
#booking{
  display: flex;
  justify-content: center;
  align-content: center;
}
#qblock{
  margin-top: 10vh;
  padding: 3rem;
  border-radius: 2rem;
  background: #3C4053;
  filter: drop-shadow(2px 2px 5px black);
}
form{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
}
input{
  padding:0.5rem;
  border-radius: 0.5rem;
  background: #C4C4C4;
  width: 100%;
  color: black;
  font-size: 1.25rem;
}
button{
  background: #E85B0B;
  padding: 1rem;
  border-radius: 1rem;
}
::placeholder{
  color: #303030;
}
img{
  position: absolute;
  bottom: 0px;
  left: 10vw
}
</style>