<template>
  <div id='qbar'>
      <form action="/booking/result">
        <label>
          Keyword
          <input type="text" name="q" id="q" placeholder="keyword, Clinic, Vet" v-model="q">
        </label>
        <label>
          Location
          <input type="text" name="location" id="location" placeholder="Location"  v-model="location">
        </label>
        <label class="spec">
          specialty
          <input type="text" name="spec" id="spec" placeholder="Specialty"  v-model="spec">
        </label>
        <label>
          Time
          <input type="text" name="time" id="time" placeholder="Time"  v-model="date">
        </label>
        <button class="btn">Search</button>
      </form>
  </div>
</template>

<script>

export default {
    data(){
        return{
            q: '',
            location: '',
            date: '',
            spec: "",
        }
    }
}
</script>

<style scoped>
#qbar{
    background: #3C4053;
    padding: 1.5rem;
    margin-top: 2rem;
    border-radius: 1.5rem;
    background: #3C4053;
    filter: drop-shadow(2px 2px 5px black);
}
form{
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  gap: 1rem;
}
label{
    font-size: 0.8rem;
}
input{
  padding:0.5rem;
  border-radius: 0.5rem;
  background: #C4C4C4;
  width: 100%;
  color: black;
  font-size: 1rem;
}
button{
  background: #E85B0B;
  padding: 0.5rem;
  border-radius: 1rem;
}
.btn{
    grid-column: 3/3;
    grid-row: 2/span 1 ;
}
.spec{
    grid-column: 1/1;
}
::placeholder{
  color: #303030;
}
</style>