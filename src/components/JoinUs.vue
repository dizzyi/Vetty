<template>
  <section class="joinus">
      <h2>
          Join Us Now!
      </h2>
      <h3>
          An integrated management and marketing solution for your vet clinic 
      </h3>
      <form action=''>
          <label for="joinEmail">Email</label>
          <input type="email" name="joinEmail" id="joinEmail" placeholder="Enter Your Email Here" required>
          <button>Join Us now</button>
      </form>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.joinus{
    height: 40vh;
    background: #54f277;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.joinus form{
    display: flex;
    align-items: center;
    gap:1rem;
}
.joinus button{
    padding: 0.5rem;
    background:#e85B0b;
    color: white;
    font-weight: 500; 
    border-radius: 0.5rem;
}
input{
    background: #d0d0d0;
    padding: 0.5rem;
    border-radius: 0.5rem;
}
</style>