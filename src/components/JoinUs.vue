<template>
  <section class="joinus">
    <div class="container">
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
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.joinus{
    padding: 5rem;
    background: #54f277;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
h2,h3,label{
    color:black;
}
.joinus form{
    display: grid;
    align-items: center;
    gap:1rem;
    font-size: 1.2rem;
}
.joinus button{
    padding: 1rem;
    background:#e85B0b;
    color: white;
    font-weight: 500; 
    border-radius: 1rem;
}
input{
    background: #d0d0d0;
    padding: 0.7rem;
    border-radius: 0.5rem;

}
</style>