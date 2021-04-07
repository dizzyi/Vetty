<template>
  <section>
      <div class='container'>
        <h2>Have Question?</h2>
        <h3>Contact Us Right now!</h3>
        <form action=''>
            <label>
                First Name: <br>
                <input type="text" name="firstname" id="firstname" placeholder="First Name" required>
            </label>
            <label>
                Last Name:<br>
                <input type="text" name="lastname" id="lastname" placeholder="Last Name" required>
            </label>
            <label>
                Email:<br>
                <input type="email" name="email" id="email" placeholder="Email" required>
            </label>
            <label>
                Phone:<br>
                <input type="number" name="phone" id="phone" placeholder="Phone Number" required>
            </label>
            <label>
                Address:<br>
                <input type="text" name="address" id="adress" placeholder="Address" required>
            </label>
            <label class="message">
                Message:<br>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="What you want to message us?" required></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
    padding: 4rem;
    background-image: url("../assets/contact_001.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow:inset 0 0 0 2000px rgba(14, 7, 19, 0.8);
    display: flex;
    flex-direction: column;
    color: white;
}
form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%
}
form label{
    place-self: left;
    padding: 0.5rem 2rem;
    font-weight: 500;
}
.message{
    grid-column: 1 / span 2;
    grid-row: 4/4
}
input,textarea{
    background: #d0d0d0;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
}
button{
    background: #e85B0b;
    grid-row: 5/5;
    grid-column: 1/1;
    width: 8rem;
    height: 4rem;
    border-radius: 1rem;
    margin: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 500;
}
</style>