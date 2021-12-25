<template>
  <div class="mt-6 lg:mt-0 py-6 px-3 lg:px-6 border border-solid rounded-xl lg:mb-20">
      <div class="md:flex md:justify-between">
        <div>
          <h1 class="font-bold text-lg">{{service.category}}</h1>
          <div class="flex items-center justify-between md:gap-4 md:justify-start mt-2">
            <img src="@/assets/Images/categories/Ellipse 10.png" alt="" class="person">
            <p class="">{{profile.firstname}} {{profile.lastname}}</p>
            <div class="flex gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 1.33337L10.0602 5.50671L14.6668 6.18004L11.3335 9.42671L12.1202 14.0134L8.00016 11.8467L3.88016 14.0134L4.66683 9.42671L1.3335 6.18004L5.94016 5.50671L8.00016 1.33337Z" fill="#D8D8D8"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 1.33337L10.0602 5.50671L14.6668 6.18004L11.3335 9.42671L12.1202 14.0134L8.00016 11.8467L3.88016 14.0134L4.66683 9.42671L1.3335 6.18004L5.94016 5.50671L8.00016 1.33337Z" fill="#D8D8D8"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 1.33337L10.0602 5.50671L14.6668 6.18004L11.3335 9.42671L12.1202 14.0134L8.00016 11.8467L3.88016 14.0134L4.66683 9.42671L1.3335 6.18004L5.94016 5.50671L8.00016 1.33337Z" fill="#D8D8D8"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 1.33337L10.0602 5.50671L14.6668 6.18004L11.3335 9.42671L12.1202 14.0134L8.00016 11.8467L3.88016 14.0134L4.66683 9.42671L1.3335 6.18004L5.94016 5.50671L8.00016 1.33337Z" fill="#D8D8D8"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 1.33337L10.0602 5.50671L14.6668 6.18004L11.3335 9.42671L12.1202 14.0134L8.00016 11.8467L3.88016 14.0134L4.66683 9.42671L1.3335 6.18004L5.94016 5.50671L8.00016 1.33337Z" fill="#D8D8D8"/>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <button @click="bookService" class="block link mt-4 text-center md:mt-0 text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none" style="border: 1px solid #52B95E; color: #52B95E">
            Contact expert
          </button>
        </div>
      </div>
      <div class="mt-6 lg:mt-0">
        <div class="flex catcont">
          <div v-for="(pack, index) in service.packages" :key="index" class="category" :class="[index == 1 ? 'darkbg text-white': '']">
            <div class="flex">
              <div class="cat mr-2">
                <img :src="pack.img" alt="">
              </div>
              <div>
                <p class="font-bold" v-if="index == 0">Bronze</p>
                <p class="font-bold" v-if="index == 1">Silver</p>
                <p class="font-bold" v-if="index == 2">Gold</p>
                <p class="mt-1 text-xl font-bold">{{pack.range}}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4 light">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0933 1.55713L4.37269 8.18616L1.31787 5.17296" stroke="#9A9A9A" stroke-width="1.20528" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{{pack.description}}</p>
            </div>
            <!-- <ul>
              <li v-for="(cover, index) in cat.cover" :key="index" class="flex items-center gap-2 mt-4 light">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0933 1.55713L4.37269 8.18616L1.31787 5.17296" stroke="#9A9A9A" stroke-width="1.20528" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{{cover}}</p>
              </li>
            </ul> -->
            <button @click="bookService" style="background: #52B95E;" class="link  mx-auto  mt-10 block text-center text-sm rounded-3xl px-6 py-2 text-white oultine-none focus:outline-none">Continue</button>    
          </div>
        </div>
        <div class="lg:px-6">
          <p class="mt-8 light ">Not sure of what you want? Try out our <span style="color: #52B95E" class="underline">Customised Package</span> Send and receive a customized contract that suits your specific need</p>
          <button  @click="bookService" class="block link mt-4 text-center text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none" style="border: 1px solid #52B95E; color: #52B95E">
            Continue
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import img1 from "@/assets/Images/services/Mask Group.png"
import img2 from "@/assets/Images/services/Mask Group (1).png"
import img3 from "@/assets/Images/services/Mask Group (2).png"
import {mapState} from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState({
      profile: state => state.profile,
      service: state => state.service
    })
  },
  methods:{
    bookService(){
      console.log(this.service.id)
      window.open(`http://localhost:8080/login/${this.service.id}`, '_blank')
    }
  },
  mounted(){
    this.service.packages[0].img = img1
    this.service.packages[1].img = img2
    this.service.packages[2].img = img3
    console.log(this.service)
  }
}
</script>

<style scoped>
.person{
  width: 50px;
  height: 50px;
  border-radius: 50%
}
.link{
  max-width: 200px
}
.cat{
  width: 50px;
  height: 50px;
  border-radius: 7px;
}
.category{
  box-shadow: 0px 5.09328px 9.45895px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  padding: 35px 20px
}
.category{
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
}
.darkbg{
  background-color: #1A1C29
}
@media only screen and (min-width: 1024px){
  .category{
    width: 30%;
    margin: 0 1.67%;
  }
  .catcont{
    margin-top: 40px
  }
}
</style>