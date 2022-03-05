<template>
  <div class="px-3 lg:px-14 mt-8 lg:mt-12 py-8 blackbox">
      <div class="rounded-lg px-4 py-6 lg:pl-8 lg:pr-0 lg:flex lg:py-0 lg:gap-6 lg:justify-between bg-green-700" style="">
        <div class="lg:w-full lg:py-16 xl:py-20">
            <p class="font-bold text-white text-2xl text-center lg:text-left mb-4 lg:mb-8 lg:text-3xl">Find top Service providers 
for your Farm</p>
            <a target="blank" href="https://expert.xpatag.com/signup" style="background: #52B95E;" class="block link w-2/3 mx-auto lg:mx-0  text-sm rounded-3xl px-6 py-2 text-center text-white oultine-none focus:outline-none">Get Started</a>
        </div>
        <div class="relative hidden lg:block overflow-hidden w-full">
            <img src="@/assets/Images/categories/Ellipse 11 (1).png" class="absolute right-0" alt="">
            <svg class="absolute top-4 xl:left-8" width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="44.5" cy="44.5" r="43" stroke="#F1BA4F" stroke-width="3"/>
            </svg>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
    .link{
        max-width: 200px
    }
    .blackbox{
        max-width: 1200px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto
    }
}

@media only screen and (min-width: 1536px){
    .blackbox{
        max-width: 1300px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto
    }
}
</style>