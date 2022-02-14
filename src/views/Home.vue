<template>
  <div class="home">
   <GreenGradient />
   <Categories />
   <BlackBox />
   <div class="mt-10">
     <Testimonials />
   </div>
   <GreenBox />
  </div>
</template>

<script>
// @ is an alias to /src
import GreenGradient from "@/components/HomePage/GreenGradient"
import Categories from "@/components/HomePage/Categories"
import BlackBox from "@/components/HomePage/BlackBox"
import GreenBox from "@/components/HomePage/GreenBox"
import Testimonials from "@/components/HomePage/TestimonialsBox"
export default {
  name: 'Home',
  components: {
    GreenGradient, 
    Categories,
    BlackBox,
    Testimonials,
    GreenBox
  },
 
  created(){
    this.$store.commit('showMobileNav', false)
  },
}
</script>
<style scoped>
.greengradient{
  background: linear-gradient(114.28deg, #2EA05B -9.79%, #CCCD34 104.57%);
}
</style>