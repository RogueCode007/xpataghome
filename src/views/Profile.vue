<template>
  <div>
      <div class="cont relative pt-4 pb-10 px-3 lg:px-36 lg:py-8 md:flex md:justify-between md:items-end">
          <div>
                <h1 class="text-white text-2xl lg:text-4xl font-bold">Prof Lateef Sanni</h1>
                <p class="mt-4 light text-white lg:text-xl">Root crop, research specialist</p>
          </div>
          <div class="mt-6">
              <div class="flex items-center md:justify-end">
                    <svg class="mr-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.3335 8.75008C2.3335 8.75008 2.91683 8.16675 4.66683 8.16675C6.41683 8.16675 7.5835 9.33342 9.3335 9.33342C11.0835 9.33342 11.6668 8.75008 11.6668 8.75008V1.75008C11.6668 1.75008 11.0835 2.33341 9.3335 2.33341C7.5835 2.33341 6.41683 1.16675 4.66683 1.16675C2.91683 1.16675 2.3335 1.75008 2.3335 1.75008V8.75008Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.3335 12.8333V8.75" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="text-xs text-white">Report</p>
               </div>
               <div class="mt-4 md:flex md:gap-4">
                   <router-link to="/home/service" class="block link bg-white mt-4 text-center md:mt-0  text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">Book Service</router-link> 
                   <router-link to="/" class="block link border-white border-solid border text-white mt-4 text-center md:mt-0  text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">Get a Quote</router-link> 
               </div> 
          </div>
          <div class="absolute person">
                <img src="@/assets/Images/categories/Ellipse 10.png" alt="" class="w-full h-full">
          </div>
      </div>
      <div class="lg:flex flex-row-reverse">
            <div>
                <div class="mt-10 lg:mt-28 px-3 lg:px-16">
                    <p class="text-xl lg:text-2xl font-bold">Sanni's Services</p>
                </div>
                <div class="box py-8 px-3 lg:px-14">
                    <div v-for="(data, index) in datas" :key="index" class="item py-3">
                        <div class="w-full imgbox relative px-3">
                            <img :src="data.img" class="w-full h-full">
                            <div class="absolute profile">
                                <img src="@/assets/Images/categories/Ellipse 10.png" alt="" class="w-full h-full">
                            </div>
                        </div>
                        <div class="mt-8">
                                <h1 class="font-bold text-base px-3">{{data.title}}</h1> 
                                <p class="mt-4 light px-3">{{data.content}}</p>  
                                <p class="mt-2 text-sm light px-3">Lagos</p> 
                                <p class="mt-2 font-bold text-xs px-3">#12,000 - #15,000</p>
                        </div> 
                    </div>
                </div>
            </div>
     
            <div class="infobox lg:mt-28">
                <div class="px-3 lg:px-14">
                    <div class="border border-solid px-3 py-3 flex justify-between items-center rounded">
                        <p class="text-sm text-gray-500 light">Rating</p>
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
                <div class="mt-6 px-3 lg:px-14 mb-10">
                    <div class="rounded border border-solid">
                            <div class="p-3">
                                <h3 class="font-bold">About Hughes Bankole</h3>
                                <p class="light mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!</p>
                            </div>
                            <div class="p-3 border-t border-solid">
                                <h3 class="font-bold">Skills</h3>
                                <p class="light mt-4">Greenhouse, Farm Equipment, Manual Labor, Irrigation Systems, Heavy Equipment, Weather Conditions</p>
                            </div>
                            <div class="p-3 border-t border-solid">
                                <h3 class="font-bold">Education</h3>
                                <p class="light mt-4">B.A. - Agricultural Engineering</p>
                                <p class="light mt-2 text-gray-500">Federal University of Technology, Akure, Graduated 2020</p>
                            </div>
                            <div class="p-3 border-t border-solid">
                                <h3 class="font-bold">Certification</h3>
                                <p class="light mt-4">Agriculture, Economics and Nature</p>
                                <p class="light mt-2 text-gray-500">University of Western Australia</p>
                                <a href="#" class="block mt-4 text-green-500 font-bold">Download File</a>
                            </div>
                            <div class="p-3 border-t border-solid">
                                <h3 class="font-bold">Portfolio</h3>
                                <div class="mt-4 flex justify-between items-center">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M12.799 1.82849H5.48519C5.00025 1.82849 4.53518 2.02113 4.19228 2.36403C3.84938 2.70693 3.65674 3.172 3.65674 3.65694V18.2845C3.65674 18.7695 3.84938 19.2345 4.19228 19.5774C4.53518 19.9203 5.00025 20.113 5.48519 20.113H16.4559C16.9408 20.113 17.4059 19.9203 17.7488 19.5774C18.0917 19.2345 18.2843 18.7695 18.2843 18.2845V7.31383L12.799 1.82849Z" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.7993 1.82849V7.31383H18.2847" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.6278 11.8849H7.31396" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.6278 15.5417H7.31396" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.14241 8.22803H8.22819H7.31396" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="21.9414" height="21.9414" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <p class="light mt-4">My Agric Science portfolio </p>
                                </div>
                                
                            </div>
                    </div>
                    
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
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
                },
                {
                    img: img1,
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
                },
                {
                    img: img2,
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
                },
                {
                    img: img3,
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
                },
                {
                    img: img,
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
                },
                {
                    img: img2,
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
                },
                {
                    img: img2,
                    title: "Hughes Bankole",
                    content: "Detecting Maize Disease"
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
.link{
    max-width: 200px
}
.person{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    bottom: -40px;
    left: 18px
}
.profile{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    bottom: -12px;
    left: 18px
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
    height: 350px;
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
        flex: 1 1 30%;
        /* max-width: none; */
        margin: 0 1.67%;
        height: auto
    }
    .infobox{
        max-width: 500px
    }
    .person{
        width: 100px;
        height: 100px;
        bottom: -80px;
        left: 25px
    }
}
/* @media only screen and (min-width: 1280px){ */
    /* .box{
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto
    }
    .item{
        flex: 1 1 20%;
        margin: 0 2.5%;
        max-width: 280px
    }
} */
</style>