<template>
  <nav class="foreground">
    <div id="logo">Vetty.</div>
    <ul >
        <li>
            <router-link to='/'>Home</router-link>
        </li>
        <li>
            <router-link to='/booking' v-bind:class="{active: active}">Booking</router-link>
        </li>
        <li>
            <router-link to='/vet'>I'm Vet</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    computed:{
        active: function(){
            return this.$route.path.includes('book');
        }
    }
}
</script>

<style scoped>

nav{
    color: #d1d0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    position: sticky;
    top:0;
    z-index: 1;
}
nav #logo{
    font-style: italic;
    font-size: 2rem;
    color: white;
}
nav ul{
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    height: 4rem;
}
nav ul li a{
    height: 100%;
    text-decoration: none;
    color: #d1d0f0;
    font-weight: bold;
    border-top: solid 5px transparent;
    padding: 1rem 0.7rem;
    transition: ease-in-out 0.5s;
}
nav a.router-link-active, .active{
    color: #e85b0b;
    border-image: linear-gradient(to right, #CA1B06 , #E85B0B);
    border-image-slice: 1;
}
</style>