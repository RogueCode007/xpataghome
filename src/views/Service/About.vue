<template>
  <div class="mt-6 lg:mt-0 py-6 px-3 md:px-8 border border-solid rounded-xl lg:mb-20">
    <h1 class="font-bold text-lg">About this service</h1>
    <div class="mt-4 serviceimg" style="border-radius: 15px;">
      <img :src="service.img" alt="" class="w-full h-full">
    </div>
    <p class="mt-4 text-gray-500">{{service.description}}</p>
    <div class="mt-8 border-b border-solid pb-6  md:flex md:justify-between">
      <div class="flex border-b border-solid md:border-r md:border-b-0 pb-6 md:w-full">
        <div class="person">
          <img src="@/assets/Images/categories/Ellipse 10.png" alt="" class="w-full h-full">
        </div>
        <div class="ml-3">
          <p>{{service.name}}</p>
          <div class="flex gap-1 mt-4">
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
          <router-link to="/" class="block link mt-4 text-center  text-sm rounded-3xl px-6 py-2 oultine-none" style="border: 1px solid #52B95E; color: #52B95E">
            Contact expert
          </router-link>
        </div>
      </div>
      <div class="mt-4 md:mt-0 md:ml-4 md:w-full">
        <div class="flex justify-between mb-4">
          <p>Location</p>
          <p class="font-bold text-gray-500">{{service.location}}</p>
        </div>
        <div class="flex justify-between mb-4">
          <p>Member Since</p>
          <p class="font-bold text-gray-500">{{service.year}}</p>
        </div>
        <div class="flex justify-between mb-4">
          <p>Active</p>
          <p class="font-bold text-gray-500">{{service.active}}</p>
        </div>
      </div>
    </div>
    <p class="mt-4 text-gray-500">{{service.bio}}</p>
  </div>
</template>

<script>
import img from "@/assets/Images/services/Rectangle 84.png"
export default {
  data(){
    return {
      service: {
        img: img,
        bio: "Former Deputy Vice-Chancellor (Development) of FUNAAB-2017. He has a career journey with IITA-Ibadan from a Postharvest Specialist to a Consultant and Project Coordinator in Cassava Value Chain Development. He has over 27 years' experience in research, consultancy and collaborations as a postharvest expert on tropical root crops mostly implemented by the International Institute of Tropical Root Crop and Natural Resources Institute, UK. He is a project leader to multi-million-dollar EU/Gates Foundation sponsored projects since 2008 till date. He was the Principal Investigator, Food Developers Initiative and Food Science and Nutrition Network sponsored by Association of African Universities.",
        name: "Lateef Sanni",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!",
        year: '2010',
        location: 'Abeokuta, Nigeria',
        active: '2 hours ago',
        about: "Former Deputy Vice-Chancellor (Development) of FUNAAB-2017. He has a career journey with IITA-Ibadan from a Postharvest Specialist to a Consultant and Project Coordinator in Cassava Value Chain Development. He has over 27 years' experience in research, consultancy and collaborations as a postharvest expert on tropical root crops mostly implemented by the International Institute of Tropical Root Crop and Natural Resources Institute, UK. He is a project leader to multi-million-dollar EU/Gates Foundation sponsored projects since 2008 till date. He was the Principal Investigator, Food Developers Initiative and Food Science and Nutrition Network sponsored by Association of African Universities."
      }
    }
  }
}
</script>

<style scoped>
.person{
  width: 50px;
  height: 50px;
  border-radius: 50%
}
.serviceimg{
  height: 200px
}
@media only screen and (min-width: 1024px){
  .serviceimg{
    height: 400px
  }
}
</style>