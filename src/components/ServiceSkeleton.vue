<template>
  <div class="box py-8 px-3 lg:px-14">
          <div v-for="(service, index) in services" :key="index" class="item py-3 flex flex-col justify-between">
              <div class="w-full imgbox relative px-3">
                  <div class="skeleton w-full h-full"></div>
                  <div class="absolute person">
                      <div class="skeleton skeleton-img w-full h-full"></div>
                  </div>
              </div>
              <div class="mt-8 px-4">
                    <h1 class="skeleton skeleton-text"></h1> 
                    <p class="mt-4  skeleton skeleton-text"></p>  
                    <p class="mt-2 skeleton skeleton-text"></p> 
                    <div class="mt-4 border-t border-solid pt-3 px-3 md:flex md:justify-between md:items-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <button  class="skeleton block view mt-4 text-center md:mt-0  text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none"></button> 
                    </div> 
              </div> 
          </div>
      </div>
</template>

<script>
export default {
    data(){
        return {
            services: [{}, {}, {}, {}]
        }
    }
}
</script>

<style scoped>
.skeleton {
  opacity: .7;
  animation: skeleton-loading 1s linear infinite alternate;
}
.skeleton-text {
  width: 100%;
  height: .5rem;
  margin-bottom: .25rem;
  border-radius: .125rem;
}
.skeleton-img{
    object-fit: fill;
    border-radius: 100%;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
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
    height: 150px;
    border-radius: 7.81px
    /* border: 2px solid red */
}
.view {
    background: #fff; border: 1px solid #454545; color: #454545
}
.person{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    /* border: 1px solid black; */
    bottom: -12px;
    left: 18px
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
        flex: 0 0 24%;
        /* max-width: none; */
        margin: 0 0.5%;
        height: auto
    }
    .view{
        max-width: 150px;
        /* margin-top: 20px */
    }
    .imgbox{
        height: 180px;
    }
    .person{
        width: 60px;
        height: 60px;
        bottom: -23px;
        left: 22px
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