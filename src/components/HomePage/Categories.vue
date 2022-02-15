<template>
  <div class="px-3  py-8 lg:pb-12 lg:px-16 relative" style="background-color: #F2F2F2">
      <h1 class="text-3xl mb-6 font-bold dark">Our Categories</h1>
        <Skeleton  v-if="categories.length == 0"/>
        <div v-else class="horizontalmenu w-full" ref="menu" >
            <div @click="viewSubs(category)" class="inline-block hrmenuitem" v-for="(category, index) in categories" :key="index">
                <div>
                    <img :src="category.image" alt="Placeholder image" class="skeleton">
                    <p class="dark font-bold mt-3">{{category.name}}</p>
                </div>
            </div>
        </div>
        <button @click="scroll('right')" class="left-arrow hidden lg:flex bg-gray-200 rounded-full items-center justify-center absolute">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="#2E3A59"></path>
          </svg>
        </button>
        <button @click="scroll('left')" class="right-arrow hidden lg:flex bg-gray-200 rounded-full items-center justify-center absolute">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.17 13L12.59 16.59L14 18L20 12L14 6L12.59 7.41L16.17 11H4V13H16.17Z" fill="#2E3A59"></path>
          </svg>
        </button>
        <div class="mt-10 lg:flex lg:gap-6 mx-auto" style="max-width: 500px">
            <a target="blank" href="https://xpatag.herokuapp.com/signup" style="background: #52B95E;" class="block w-2/3 mx-auto text-sm rounded-3xl px-6 py-2 text-center text-white oultine-none focus:outline-none">Register as an expert</a>
            <a target="blank" href="https://xpatagcustomer.herokuapp.com/signup" style="background: #fff;" class="block mt-4 lg:mt-0 w-2/3 mx-auto text-sm rounded-3xl px-6 py-2 text-center text-green-500 border border-solid border-green-500 oultine-none focus:outline-none">Register as a client</a>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Skeleton from "@/components/Skeleton"
export default {
    components: {Skeleton},
    computed:{
        ...mapState({
            categories: state => state.categories
        })
    },
    methods:{
        viewSubs(obj){
            this.$store.commit('selectCategory', obj)
            this.$router.push("/home/subcategories")
        },
        scroll(val){
          if(val == 'left'){
            this.$refs.menu.scrollLeft += 270
          }else if(val == 'right'){
            this.$refs.menu.scrollLeft -= 270
          }
        }
    },
}
</script>

<style scoped>
.dark{
    color: #454545
}
.skeleton {
  /* opacity: .7; */
  animation: skeleton-loading 1s linear infinite alternate;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
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
min-width: 150px;
  max-width: 150px;
  flex: 0 0 auto;
  margin-right: 40px;
  cursor: pointer;
  /* max-height: 260px */
}
.hrmenuitem:last-child{
  margin-right: 0
}
.hrmenuitem img{
    height: 182px;
    border-radius: 12px;
    width: 100%;
}
@media only screen and (min-width: 768px){
.hrmenuitem{
    min-width: 230px
}
.hrmenuitem img{
    height: 282px
}
}
@media only screen and (min-width: 1024px){
  .left-arrow{
    width: 50px;
    height: 50px;
    top: 40%;
    left: 5px;
    z-index: 100000
  }
  .right-arrow{
    width: 50px;
    height: 50px;
    top: 40%;
    right: 5px;
    z-index: 100000
  }
}
</style>