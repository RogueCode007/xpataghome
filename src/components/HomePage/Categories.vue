<template>
  <div class="px-3 lg:pl-14 lg:pr-0 py-8 lg:pb-12" style="background-color: #F2F2F2">
      <h1 class="text-3xl mb-6 font-bold dark">Our Categories</h1>
        <div class="horizontalmenu w-full">
            <div to="/home/subcategories" @click="viewSubs(category)" class="inline-block hrmenuitem" v-for="(category, index) in categories" :key="index">
                <div>
                    <img :src="category.image" alt="Placeholder image">
                    <p class="dark font-bold mt-3">{{category.name}}</p>
                </div>
            </div>
            
        </div>
        <div class="mt-10 lg:flex lg:gap-6 mx-auto" style="max-width: 500px">
            <a target="blank" href="https://xpatag.herokuapp.com/signup" style="background: #52B95E;" class="block w-2/3 mx-auto text-sm rounded-3xl px-6 py-2 text-center text-white oultine-none focus:outline-none">Register as an expert</a>
            <router-link to="/" style="background: #fff; border: 1px solid #52B95E; color: #52B95E" class="block w-2/3 mt-4 text-center lg:mt-0 mx-auto text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">Register as a client</router-link>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            categories: state => state.categories
        })
    },
    methods:{
        viewSubs(obj){
            this.$store.commit('selectCategory', obj)
            this.$router.push("/home/subcategories")
        }
    },
    mounted(){
        console.log(this.categories)
    }
}
</script>

<style scoped>
.dark{
    color: #454545
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
</style>