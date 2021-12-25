<template>
    <div>
        <Nav class="hidden lg:block"/>
        <MobileNav class="lg:hidden block"/>
        <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav2"
import MobileNav from "@/components/MobileNav2"
export default {
    components:{
        Nav, MobileNav
    },
    
}
</script>

<style>

</style>