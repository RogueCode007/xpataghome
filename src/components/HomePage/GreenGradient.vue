<template>
   <div class="greengradient">
       <Nav class="hidden lg:block"/>
       <MobileNav class="lg:hidden block"/>
      <div class="text-white px-3 lg:pl-14 py-6 lg:flex lg:gap-10 lg:py-20 lg:pr-0">
          <LeftBox />
          <RightBox />
      </div>
    </div>
</template>

<script>
import RightBox from "@/components/HomePage/RightBox"
import LeftBox from "@/components/HomePage/LeftBox"
import Nav from "@/components/NavBar"
import MobileNav from "@/components/MobileNav"
export default {
    components:{
        RightBox, LeftBox, Nav, MobileNav
    }
}
</script>

<style scoped>
.light{
    font-family: "Cera Pro Light";
}
.greengradient{
  background: linear-gradient(114.28deg, #2EA05B -9.79%, #CCCD34 104.57%);
}

</style>