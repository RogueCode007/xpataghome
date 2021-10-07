<template>
  <div class="px-3 lg:pl-14 lg:pr-0 py-8 lg:pb-12">
      <h1 class="text-3xl mb-6 font-bold dark">Our Leaders</h1>
      <p class="mt-4">Helping experts and clients reach their full potential</p>
        <div class="mt-8 horizontalmenu w-full">
            <div class="inline-block hrmenuitem">
                <div class="imgdiv div1">
                </div>
                <p class="mt-4 font-bold text-xl">Irene Howell</p>
                <p class="mt-2 light">President and CEO</p>
            </div>
            <div class="inline-block hrmenuitem">
                <div class="imgdiv div1">
                </div>
                <p class="mt-4 font-bold text-xl">Irene Howell</p>
                <p class="mt-2 light">Chief Financial Officer</p>
            </div>
            <div class="inline-block hrmenuitem">
                <div class="imgdiv div1">
                </div>
                <p class="mt-4 font-bold text-xl">Irene Howell</p>
                <p class="mt-2 light">Chief Financial Officer</p>
            </div>
            <div class="inline-block hrmenuitem">
                <div class="imgdiv div1">
                </div>
                <p class="mt-4 font-bold text-xl">Irene Howell</p>
                <p class="mt-2 light">Chief Financial Officer</p>
            </div>
            <div class="inline-block hrmenuitem">
                <div class="imgdiv div1">
                </div>
                <p class="mt-4 font-bold text-xl">Irene Howell</p>
                <p class="mt-2 light">Chief Financial Officer</p>
            </div>
            
        </div>
        <div class="mt-10 lg:flex lg:gap-6 mx-auto" style="max-width: 500px">
            <a href="#" style="background: #52B95E;" class="block w-2/3 mx-auto text-sm rounded-3xl px-6 py-2 text-center text-white oultine-none focus:outline-none">Join our team</a>
            <router-link to="/" style="background: #fff; border: 1px solid #52B95E; color: #52B95E" class="block w-2/3 mt-4 text-center lg:mt-0 mx-auto text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">See open positions</router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dark{
    color: #454545
}
.imgdiv{
    width: 150px;
    height: 150px;
    border-radius: 28px
}
.div1{
    background-image: url("../../assets/Images/about/Rectangle 118.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.horizontalmenu{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  
}

.horizontalmenu::-webkit-scrollbar
{
  height: 0px;
	background-color: #F5F5F5;
}
.hrmenuitem{
  max-width: 230px;
  flex: 0 0 auto;
  margin-right: 40px;
  cursor: pointer;
  /* max-height: 260px */
}
.hrmenuitem img{
    height: 182px
}
@media only screen and (min-width: 768px){

.imgdiv{
    width: 230px;
    height: 230px;
}
}
</style>