<template>
  <div class="hero-content">
    <transition-group
      :name="transition"
      tag="div"
      class="slider-wrapper"
    >
      <div
        v-for="number in [currentImg]"
        :key="number"
        :style="{ background: content[Math.abs(currentImg) % content.length].image }"
        class="slide slider-content"
      >
        <div class="inner">
          <img :src="content[Math.abs(currentImg) % content.length].image" alt="">
          <h1 class="font-bold text-black text-lg mt-6">{{ content[Math.abs(currentImg) % content.length].name }}</h1>
          <p class="font-bold" style="color:#52B95E">{{ content[Math.abs(currentImg) % content.length].location }}</p>
          <p class="light mt-6">{{ content[Math.abs(currentImg) % content.length].description }}</p>
        </div>
      </div>
    </transition-group>
    <svg   class="prev bg-white"
      @click="prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.6054 4.00111 4.03446 7.54686 4.00224 11.9413C3.97002 16.3358 7.48858 19.9336 11.8827 19.9991C16.2768 20.0647 19.9011 16.5735 20 12.18V13.963V12C19.995 7.58378 16.4162 4.00496 12 4ZM13.45 16.9L8.5 11.95L13.45 7L14.864 8.414L11.328 11.95L14.863 15.486L13.451 16.9H13.45Z" fill="#2E3A59"></path>
    </svg>
    <svg class="next bg-white"
      @click="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30453 6.63459 1.92796 12.1307 2.00088C17.6268 2.07381 22.0337 6.56889 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM10.55 17L9.136 15.585L12.671 12.05L9.136 8.515L10.55 7.1L15.5 12.05L10.551 17H10.55Z" fill="#2E3A59"></path>
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import './styles';
.light{
    font-family: "Cera Pro Light";
}
</style>

<script>
// import imgAPI from '~/static/images/imgAPI'
import image from "@/assets/Images/Testimonials/Ellipse 16.png"
export default {
  data() {
    return {
      show: true,
      transition: '',
      autoplay: null,
      content: [
        {
          name: 'Isaac Hayden',
          location: 'Lagos, Nigeria',
          description:
            'I love this system, I will use this medium to learn a hire for Agric experts and investing time to get Awesome works. I have always looked for a good and reliable platform to save, this is a great opportunity!!!',
          image: image
        },
        {
          name: 'Isaac Hayden',
          location: 'Lagos, Nigeria',
          description:
            'I love this system, I will use this medium to learn a hire for Agric experts and investing time to get Awesome works. I have always looked for a good and reliable platform to save, this is a great opportunity!!!',
          image: image
        },
        {
          name: 'Isaac Hayden',
          location: 'Lagos, Nigeria',
          description:
            'I love this system, I will use this medium to learn a hire for Agric experts and investing time to get Awesome works. I have always looked for a good and reliable platform to save, this is a great opportunity!!!',
          image: image
        },
        
      ],
      currentImg: 0
    }
  },
  mounted() {
    this.playSlider()
  },
  beforeDestroy() {
    clearInterval(this.autoplay)
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg = this.currentImg + 1
        this.transition = 'slide-right'
      }, 5000)
    },
    manualPlay() {
      clearInterval(this.autoplay)
      setTimeout(() => {
        this.playSlider()
      }, 1)
    },
    next() {
      this.manualPlay()
      this.currentImg += 1
      this.transition = 'slide-right'
    },
    prev() {
      this.manualPlay()
      this.currentImg -= 1
      this.transition = 'slide-left'
    }
  }
}
</script>
