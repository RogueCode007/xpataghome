<template>
  <div class="">
      <div class="cont py-4 px-3 lg:px-14 lg:flex lg:justify-between lg:items-center">
          <div>
                <h1 class="text-white text-2xl lg:text-4xl font-bold">Explore XpatAg Categories</h1>
                <p class="mt-4 light text-white lg:text-xl">Your window to the world of experts</p>
          </div>
          <img src="@/assets/Images/categories/image 3.png" alt="" class="hidden lg:block">
      </div>
      <div class="box py-8 px-3 lg:px-14">
          <div v-for="(data, index) in datas" :key="index" class="item p-3">
              <div class="w-full imgbox" style="border-radius: 7.81px">
                  <img :src="data.img" class="w-full h-full">
              </div>
              <div class="mt-2">
                    <h1 class="font-bold text-lg">{{data.title}}</h1> 
                    <p class="mt-4 light">{{data.content}}</p>  
                    <router-link to="/home/subcategories" class="block view mt-4 text-center lg:mt-0  text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">View Services</router-link> 
              </div> 
          </div>
      </div>
  </div>
</template>

<script>
import img from "@/assets/Images/categories/Rectangle 11.png"
import img1 from "@/assets/Images/categories/Rectangle 11 (1).png"
import img2 from "@/assets/Images/categories/Rectangle 11 (2).png"
import img3 from "@/assets/Images/categories/Rectangle 11 (3).png"
export default {
    data(){
        return {
            datas: [
                {
                    img: img,
                    title: "Crop Production",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
                {
                    img: img1,
                    title: "Animal Production",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
                {
                    img: img2,
                    title: "Forestry Servcies",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
                {
                    img: img3,
                    title: "Forestry",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
                {
                    img: img,
                    title: "Crop Production",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
                {
                    img: img2,
                    title: "Crop Production",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
                {
                    img: img2,
                    title: "Crop Production",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliqua."
                },
            ]
        }
    }
}
</script>

<style scoped>
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
        max-width: 150px;
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
        flex: 1 1 20%;
        margin: 0 2.5%;
        max-width: 280px
    }
}
</style>