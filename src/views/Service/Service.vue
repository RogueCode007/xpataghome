<template>
  <div>
      <div class="cont py-4 px-3 lg:px-14 lg:py-8">
          <div>
                <h1 class="text-white text-2xl lg:text-4xl font-bold">{{service.category}}</h1>
                <p class="mt-4 light text-white lg:text-xl">{{service.description}}</p>
          </div>
      </div>
      <div class="lg:flex mb-6">
        <div class="mt-6 px-3 lg:pl-14 nav">
            <div class="rounded-xl border-solid border">
                <router-link to="/home/service/booking" class="block py-2 px-3 lg:py-4">Bookings</router-link>
                <router-link to="/home/service/about" class="block py-2 px-3 lg:py-4">About this service</router-link>
                <router-link to="/home/service/reviews" class="block py-2 px-3 lg:py-4">Reviews</router-link>
            </div>
        </div>
        <div class="px-3 lg:px-14 lg:mt-6 lg:w-full">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            profile: state => state.profile,
            service: state => state.service
        })
    }
}
</script>

<style scoped>
.cont{
    background: linear-gradient(114.28deg, #2EA05B -9.79%, #CCCD34 104.57%);

}
.router-link-exact-active{
    border-left: 3px solid #52B95E;
    font-weight: bold;
}
@media only screen and (min-width: 1024px){
.nav{
    min-width: 300px
}
}

</style>