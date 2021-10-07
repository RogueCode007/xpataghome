<template>
  <div class="px-3 md:px-14 py-8">
      <h2 class="light text-2xl">Welcome to</h2>
      <h1 class="font-bold text-6xl mt-2">XpatAg</h1>
      <div class="textimg mt-10 lg:flex">
          <div class="imgdiv lg:w-full"></div>
          <div style="background: #454545;" class="text-white p-3 textdiv lg:w-3/5">
                <h3 class="text-xl font-bold">About us</h3>
                <p class="mt-4 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
          </div>
      </div>
      <div class="text-center py-6 lg:py-10 believe" style="">
          <h3 class="light text-2xl">We Believe In</h3>
          <p class="mt-4 font-bold text-4xl">Culture. Excellence. Quality.</p>
          <p class="mt-4 light ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua.</p>
      </div>
      <div class="textimg mt-10 lg:flex lg:flex-row-reverse">
          <div class="imgdiv lg:w-full"></div>
          <div style="background: #F7F7F7;" class=" p-3 textdiv lg:w-3/5">
                <h3 class="text-xl font-bold">Our values</h3>
                <p class="mt-4 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis.
                </p>
          </div>
      </div>
      <Leaders />
  </div>
</template>

<script>
import Leaders from "@/components/AboutUs/Leaders"
export default {
    components:{
        Leaders
    }
}
</script>

<style scoped>
.imgdiv{
    background-image: url("../assets/Images/about/Rectangle 115.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px
}
@media screen and (min-width: 1024px){
    .believe{
        padding-right:350px; padding-left: 350px
    }
    
}
</style>