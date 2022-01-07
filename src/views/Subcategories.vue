<template>
  <div class="">
      <div class="cont py-4 px-3 lg:px-14 lg:flex lg:justify-between lg:items-center">
          <div>
                <h1 class="text-white text-2xl lg:text-4xl font-bold">Explore XpatAg Categories</h1>
                <p class="mt-4 light text-white lg:text-xl">Your window to the world of experts</p>
          </div>
          <img src="@/assets/Images/categories/image 3.png" alt="" class=" hidden lg:block">
      </div>
      <div v-if="category.sub_category.length > 0" class="box py-8 px-3 lg:px-14">
          <div v-for="(category, index) in category.sub_category" :key="index" class="item p-3 flex flex-col justify-between">
              <div class="w-full imgbox" style="border-radius: 7.81px">
                  <img :src="category.image" class="skeleton w-full h-full">
              </div>
              <div class="mt-2">
                    <h1 class="font-bold text-lg">{{category.name}}</h1> 
                    <p class="mt-4 light">{{category.description | slicer}} </p>  
                    <button @click="viewService" class="block view mt-4 text-center lg:mt-0  text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">View Services</button> 
              </div> 
          </div>
      </div>
      <p v-else class="norecord">No records found</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
        }
    },
    methods:{
        viewService(){
            this.$router.push("/home/services")
        }
    },
    computed:{
        ...mapState({
            category: state => state.category
        }),
    },
    filters:{
        slicer(val){
            return val.slice(0, 30) + '...'
        }
    },
    mounted(){
        console.log(this.category)
    }      
}
</script>

<style scoped>
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
.cont{
    background: linear-gradient(114.28deg, #2EA05B -9.79%, #CCCD34 104.57%);

}
.box{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    flex-wrap: nowrap;
    
}

.box::-webkit-scrollbar
{
  height: 0px;
	background-color: #F5F5F5;
}
.item{
    max-width: 230px;
    height: 426px;
    flex: 0 0 auto;
    margin-right: 40px;
    cursor: pointer;
    border-radius: 17px;
    border: 0.976378px solid #E8E8E8;
}
.imgbox{
    height: 150px
}
.view {
    background: #fff; border: 1px solid #52B95E; color: #52B95E
}
@media only screen and (min-width: 768px){
    .box{
        flex-wrap: wrap;
        overflow: hidden;
        justify-content: space-between;
    }
    .item{
        flex: 0 0 auto;
        margin: 0 0 20px 0;
    }
}
@media only screen and (min-width: 1024px){
    .box{
        /* column-gap: 10px; */
        row-gap: 20px;
        justify-content: flex-start;
    }
    .item{
        flex: 1 1 24%;
        /* max-width: none; */
        margin: 0 0.5%;
        height: auto
    }
    .view{
        /* max-width: 150px; */
        margin-top: 20px
    }
    .imgbox{
        height: 180px;
    }
}
@media only screen and (min-width: 1280px){
    .box{
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto
    }
    .item{
        flex: 0 0 20%;
        margin: 0 2.5%;
        max-width: 280px
    }
}
</style>