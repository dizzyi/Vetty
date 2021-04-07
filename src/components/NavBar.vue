<template>
  <nav>
    <div id="logo">Vetty.</div>
    <ul >
        <li>
            <router-link to='/'>Home</router-link>
        </li>
        <li>
            <router-link to='/booking'>Booking</router-link>
        </li>
        <li>
            <router-link to='/vet'>I'm Vet</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

nav{
    background: #1a1111;
    color: #d1d0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    filter: drop-shadow(1px 1px 3px black);
    position: sticky;
    top:0;
    z-index: 1;
}
nav #logo{
    font-style: italic;
    font-size: 2rem;
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
    text-decoration: none;
    color: #d1d0f0;
    font-weight: bold;
    border-top: solid 5px transparent;
    padding: 1rem 0.7rem;
    transition: ease-in-out 0.5s;
}
nav a.router-link-active{
    border-top-color: #e85b0b;
    color: #e85b0b
}
</style>