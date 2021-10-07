<template>
  <div class="absolute py-4 pb-6 bg-white mobilemenu">
      <div class="px-4 flex justify-between items-center">
            <svg width="117" height="39" viewBox="0 0 117 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.3758 26L55.2615 19.6296L59.1103 13.4866H56.2095L53.8206 17.4302L51.4127 13.4866H48.493L52.3986 19.6296L48.2465 26H51.1663L53.8206 21.8478L56.475 26H59.3758ZM61.087 26H63.6466V21.5824H65.789C68.4055 21.5824 70.3014 19.914 70.3014 17.525C70.3014 15.1172 68.4055 13.4866 65.789 13.4866H61.087V26ZM63.6466 19.3452V15.7428H65.789C66.9456 15.7428 67.685 16.4633 67.685 17.525C67.685 18.6057 66.9835 19.3452 65.789 19.3452H63.6466ZM78.9029 26H81.652L76.0779 13.2591H75.2247L69.6316 26H72.3808L73.0823 24.3695H78.2014L78.9029 26ZM77.3103 22.265H73.9734L75.6418 18.037L77.3103 22.265ZM84.7602 26H87.3198V15.7997H91.3392V13.4866H80.7597V15.7997H84.7602V26ZM99.677 26H102.426L96.852 13.2591H95.9988L90.4058 26H93.1549L93.8564 24.3695H98.9755L99.677 26ZM98.0844 22.265H94.7475L96.416 18.037L98.0844 22.265ZM103.137 19.7433C103.08 23.3267 106.151 26.3034 109.83 26.2275C111.138 26.2275 112.313 25.9242 113.356 25.2985C114.418 24.6728 115.233 23.8386 115.802 22.8337V19.1366H109.792V21.3549H113.242V22.3787C112.541 23.3457 111.384 23.9334 109.943 23.9334C107.46 23.9334 105.772 22.1702 105.772 19.7433C105.772 17.3544 107.403 15.6291 109.792 15.6291C111.233 15.6291 112.389 16.2358 113.28 17.4682L115.1 15.9703C113.887 14.245 112.029 13.2591 109.83 13.2591C106.132 13.2022 103.061 16.141 103.137 19.7433Z" fill="#585858"/>
                <path d="M15.0479 8.30127L0 32.8766C2.78995 30.5615 9.20685 25.504 12.5548 23.7944C16.7397 21.6574 18.0753 26.9109 18.5205 27.7122C18.9658 28.5136 22.7945 34.7465 26.8014 32.7876C30.0069 31.2204 29.2648 27.8606 28.4932 26.3766L15.0479 8.30127Z" fill="#2D9759"/>
                <path d="M31.9315 25.3767L20 9.88356C28.1918 17.2205 41.3402 6.3516 46.8904 0L31.9315 25.3767Z" fill="#CCCD34"/>
            </svg>
            <svg @click="$store.commit('showMobileNav', false)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#2E3A59"></path>
            </svg>
        </div>
        <u-animate-container class="mt-6 px-4">
            <u-animate
                name="fadeInRight"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="20"
                animateClass="animated"
                :begin="true"
            >
                <router-link to="/" class="text-black text-sm block">Home</router-link>
            </u-animate>
            <u-animate
                name="fadeInRight"
                delay="0s"
                duration="1.2s"
                :iteration="1"
                :offset="20"
                animateClass="animated"
                :begin="true"
            >
                <router-link to="/home/aboutus" class="text-black text-sm mt-4 block">About us</router-link>
            </u-animate>
            <u-animate
                name="fadeInRight"
                delay="0s"
                duration="1.4s"
                :iteration="1"
                :offset="20"
                animateClass="animated"
                :begin="true"
            >
                <router-link to="/home/categories" class="text-black text-sm mt-4 block">Categories</router-link>
            </u-animate>
            <u-animate
                name="fadeInRight"
                delay="0s"
                duration="1.6s"
                :iteration="1"
                :offset="20"
                animateClass="animated"
                :begin="true"
            >
                <router-link to="/" class="text-black text-sm mt-4 block">Why Xpatag</router-link>
            </u-animate>
            <u-animate
                name="fadeInRight"
                delay="0s"
                duration="1.8s"
                :iteration="1"
                :offset="20"
                animateClass="animated"
                :begin="true"
            >
                <router-link to="/home/howitworks" class="text-black text-sm mt-4 block">How it works</router-link>
            </u-animate>
            <u-animate
                name="fadeInRight"
                delay="0s"
                duration="1.8s"
                :iteration="1"
                :offset="20"
                animateClass="animated"
                :begin="true"
            >
                <router-link to="/" style="background: #52B95E;max-width: 130px" class="mt-4 block text-sm rounded-3xl px-6 py-2 text-white oultine-none">Get Started</router-link>
            </u-animate>
        </u-animate-container>
  </div>
</template>

<script>
import "animate.css"
export default {

}
</script>

<style scoped>
.mobilemenu{
  top: 0;
  width: 100%;
  left: 0;
  box-shadow: 0px 9px 45px #00000090;
  z-index: 1002
}

</style>