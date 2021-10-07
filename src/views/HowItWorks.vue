<template>
  <div class="">
      <div class="grd px-3 lg:px-14 py-10 pb-14 relative">
          <h1 class="text-2xl font-bold text-white">Get expert support in 3 easy steps</h1>
          <p class="mt-6 text-white light">We make it so simple, you won't need the hassle</p>
          <div class="mt-10 bg-white relative flex gap-4 items-center py-2 px-2" style="border-radius: 45px">
                <input type="text" class="w-full focus:outline-none" placeholder="Enter your email address">
                <button class="text-white bg-green-500 py-1 px-6" style="border-radius: 45px">continue</button>
         </div>
         <div class="imgdiv absolute">
            <div class="relative w-full h-full">
                <a class="play" target="_blank" href="https://youtube.com" rel="noopener noreferrer" style="display: block;">
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b)">
                        <circle cx="56" cy="56" r="56" fill="white" fill-opacity="0.49"/>
                        </g>
                        <path d="M42.208 37.125L70.7913 55.5L42.208 73.875V37.125Z" fill="white"/>
                        <defs>
                        <filter id="filter0_b" x="-10" y="-10" width="132" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </a>
            </div>
         </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.grd{
    background: linear-gradient(114.28deg, #2EA05B -9.79%, #CCCD34 104.57%);
    margin-bottom: 300px
}
.imgdiv{
    height: 300px;
    width: 90%;
    bottom: -280px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    background-image: url("../assets/Images/howitworks/Rectangle 88.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.play{
    height: 112px;
    width: 112px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    /* transform: translateX(-50%); */
}
@media only screen and (min-width: 1024px){
    .grd{
        margin-bottom: 500px;
    }
    .imgdiv{
        width: 80%;
        bottom: -480px;
        height: 500px
    }
}
</style>