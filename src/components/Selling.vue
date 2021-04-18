<template>
  <div id="selling">
      <div class="sellingpoint">
        <img src='../assets/Selling_info.svg' alt="">
        <h2>
          Complete Vet Info
        </h2>
        <h4>
          Still trying to find the vet suitable for your pet? Vetty will provide you more, better choice and bring you convenient experience all in in site
        </h4>
      </div>
      <div class="sellingpoint">
        <img src='../assets/Selling_rating.svg' alt="">
        <h2>
          Complete Vet Info
        </h2>
        <h4>
          Still trying to find the vet suitable for your pet? Vetty will provide you more, better choice and bring you convenient experience all in in site
        </h4>
      </div>
      <div class="sellingpoint">
        <img src='../assets/Selling_remind.svg' alt="">
        <h2>
          Complete Vet Info
        </h2>
        <h4>
          Still trying to find the vet suitable for your pet? Vetty will provide you more, better choice and bring you convenient experience all in in site
        </h4>
      </div>
      <div class="sellingpoint">
        <img src='../assets/Selling_book.svg' alt="">
        <h2>
          Complete Vet Info
        </h2>
        <h4>
          Still trying to find the vet suitable for your pet? Vetty will provide you more, better choice and bring you convenient experience all in in site
        </h4>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
#selling{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 5rem 15vw;
}
.sellingpoint{
  width: clamp(500px, 20vw, 1000px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.sellingpoint img{
  height: 8rem;
}
</style>