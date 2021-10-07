<template>
  <div class="mt-6 lg:mt-0 py-6 px-3  border border-solid rounded-xl lg:mb-20">
      <div v-if="reviews.length < 1" class="py-8">
        <svg class="block w-full mx-auto" width="118" height="114" viewBox="0 0 118 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M20.2578 27.914L16.1982 30.6058C15.7475 30.912 15.5299 31.5803 15.5777 32.0901L16.7019 36.9313C16.8347 37.533 16.8052 37.955 16.5243 38.2773C16.3325 38.5187 16.0637 38.6691 15.7235 38.6453C15.4664 38.6274 15.128 38.5212 14.8056 38.2431L11.0671 35.0924C10.6577 34.8085 9.886 34.7546 9.52452 34.9845L5.55359 37.4823L5.38784 37.5845C4.66832 38.0407 3.98582 37.9105 3.67516 37.4648C3.45628 37.1275 3.46778 36.7357 3.64758 36.2108C3.65755 36.1762 3.66835 36.1412 3.68292 36.1033L5.46966 31.4693C5.67523 30.9737 5.46938 30.2796 5.06171 29.9139L1.42226 26.5969C0.692246 25.9526 0.814782 25.4508 0.92557 25.117C1.02636 24.8692 1.31874 24.3828 2.25972 24.4486L7.06402 24.6981C7.57427 24.7338 8.20499 24.3539 8.41059 23.8579L10.2843 19.2303C10.6895 18.3242 11.2157 18.1887 11.4724 18.2066C11.7299 18.2246 12.2321 18.4321 12.5112 19.386L13.7187 24.2291C13.8533 24.7489 14.425 25.2129 14.9392 25.2488L19.7271 25.67C20.6685 25.7358 20.8903 26.2582 20.9596 26.5179C21.0249 26.778 20.9834 27.3715 20.2578 27.914Z" fill="#7B8994"/>
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M65.3817 8.18978L61.9983 10.7997C61.6231 11.0959 61.4738 11.6954 61.5467 12.1396L62.825 16.3167C62.9779 16.8364 62.9779 17.2083 62.7521 17.5082C62.5992 17.7317 62.3735 17.8801 62.0747 17.8801C61.8489 17.8801 61.5467 17.8078 61.248 17.5836L57.7881 15.0495C57.413 14.8256 56.7352 14.8256 56.4334 15.0495L53.1156 17.4838L52.977 17.5836C52.3761 18.0279 51.7716 17.9556 51.4729 17.5836C51.261 17.3013 51.2471 16.9569 51.3721 16.4855C51.3787 16.4545 51.386 16.4231 51.3965 16.389L52.6748 12.215C52.8242 11.7677 52.6018 11.1716 52.2232 10.8758L48.8398 8.18978C48.1624 7.66945 48.2388 7.22178 48.3153 6.92219C48.3882 6.6987 48.614 6.25412 49.4404 6.25412L53.6544 6.17836C54.1025 6.17836 54.6305 5.80645 54.7799 5.35878L56.1346 1.18511C56.4334 0.36553 56.885 0.214355 57.1104 0.214355C57.3365 0.214355 57.7881 0.36553 58.0903 1.18511L59.4416 5.35878C59.591 5.80645 60.119 6.17836 60.5706 6.17836L64.7807 6.25412C65.6075 6.25412 65.8333 6.6987 65.9097 6.92219C65.9827 7.14637 65.9827 7.66945 65.3817 8.18978Z" fill="#7B8994"/>
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M102.232 17.3855L99.2946 18.8597C98.9678 19.0282 98.767 19.459 98.7569 19.8051L99.1091 23.1469C99.1482 23.5617 99.0936 23.8425 98.8791 24.0359C98.7309 24.1822 98.5386 24.2611 98.313 24.2173C98.1426 24.1841 97.925 24.0852 97.7323 23.8721L95.4917 21.4507C95.2413 21.2266 94.7296 21.1271 94.4688 21.2519L91.6062 22.603L91.4869 22.6581C90.9679 22.9053 90.5221 22.762 90.3512 22.4373C90.2326 22.193 90.2726 21.9309 90.4363 21.5933C90.4458 21.5709 90.4559 21.5483 90.4688 21.5241L92.0467 18.5599C92.2251 18.244 92.1448 17.7613 91.9023 17.4824L89.7417 14.9576C89.3066 14.4652 89.43 14.1384 89.5317 13.9234C89.6196 13.7654 89.8553 13.4628 90.4793 13.5841L93.6724 14.1454C94.0108 14.2112 94.4641 14.0078 94.6426 13.6917L96.2781 10.7391C96.624 10.164 96.9872 10.1162 97.1574 10.1493C97.3282 10.1824 97.647 10.3629 97.7549 11.0261L98.1626 14.376C98.2097 14.7359 98.5538 15.0943 98.8948 15.1605L102.063 15.8357C102.687 15.957 102.792 16.3259 102.817 16.5059C102.839 16.6858 102.763 17.0808 102.232 17.3855Z" fill="#7B8994"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M69.9338 36.7419L37.0717 40.7769C31.2401 41.4929 27.0866 46.7555 27.7956 52.5299L30.1981 72.0968C30.8827 77.6722 35.847 81.6846 41.4368 81.3151L42.4338 89.4348L55.6124 79.5904L74.9041 77.2217C80.7357 76.5056 84.8892 71.2431 84.1802 65.4686L81.7777 45.9018C81.0687 40.1273 75.7655 36.0259 69.9338 36.7419Z" fill="#21CE99"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M82.7331 54.1754L84.1197 65.4685C84.6791 70.0243 82.2118 74.2615 78.2816 76.1987L80.1912 69.9633C80.5819 68.7933 80.0004 67.2343 79.0102 66.4607L70.1612 59.4357C68.3896 58.0748 68.5895 56.904 68.7894 56.1204C68.9802 55.5359 69.5707 54.3732 71.7321 54.3732L82.7331 54.1754Z" fill="#1AA47A"/>
          <g filter="url(#filter0_f)">
          <path d="M53.0257 112C60.9106 112 67.3025 110.783 67.3025 109.281C67.3025 107.779 60.9106 106.561 53.0257 106.561C45.1409 106.561 38.749 107.779 38.749 109.281C38.749 110.783 45.1409 112 53.0257 112Z" fill="#EFEFF0"/>
          </g>
          <g filter="url(#filter1_f)">
          <path d="M90.4166 112C96.424 112 101.294 111.087 101.294 109.96C101.294 108.834 96.424 107.921 90.4166 107.921C84.4091 107.921 79.5391 108.834 79.5391 109.96C79.5391 111.087 84.4091 112 90.4166 112Z" fill="#EFEFF0"/>
          </g>
          <path d="M44.1875 57.6125C46.4403 57.6125 48.2665 55.7862 48.2665 53.5334C48.2665 51.2806 46.4403 49.4543 44.1875 49.4543C41.9347 49.4543 40.1084 51.2806 40.1084 53.5334C40.1084 55.7862 41.9347 57.6125 44.1875 57.6125Z" fill="#1AA47A"/>
          <path d="M65.9423 54.8931C68.1951 54.8931 70.0214 53.0669 70.0214 50.814C70.0214 48.5612 68.1951 46.735 65.9423 46.735C63.6895 46.735 61.8633 48.5612 61.8633 50.814C61.8633 53.0669 63.6895 54.8931 65.9423 54.8931Z" fill="#1AA47A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9229 64.2366C47.9229 64.2366 54.2208 63.4633 66.8166 61.9167C67.3657 66.3888 63.5813 70.5334 58.3639 71.174C53.1466 71.8146 48.4719 68.7086 47.9229 64.2366Z" fill="#1AA47A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M116.143 58.076L107.294 64.9019C106.313 65.6765 105.923 67.2445 106.113 68.4063L109.457 79.3311C109.857 80.6901 109.857 81.6628 109.266 82.4473C108.866 83.0318 108.276 83.42 107.494 83.42C106.904 83.42 106.113 83.2308 105.332 82.6445L96.2833 76.0167C95.3021 75.4313 93.5296 75.4313 92.7401 76.0167L84.0629 82.3833L83.7004 82.6445C82.1287 83.8063 80.5479 83.6172 79.7665 82.6445C79.2123 81.906 79.176 81.0054 79.5031 79.7724C79.5203 79.6913 79.5394 79.6094 79.5667 79.5202L82.91 68.6035C83.3006 67.4336 82.7192 65.8746 81.7289 65.101L72.88 58.076C71.1084 56.7151 71.3083 55.5443 71.5081 54.7607C71.6989 54.1762 72.2895 53.0135 74.4508 53.0135L85.472 52.8153C86.644 52.8153 88.0249 51.8426 88.4156 50.6718L91.9588 39.7561C92.7401 37.6125 93.9212 37.2172 94.5108 37.2172C95.1022 37.2172 96.2833 37.6125 97.0737 39.7561L100.608 50.6718C100.998 51.8426 102.379 52.8153 103.561 52.8153L114.572 53.0135C116.734 53.0135 117.325 54.1762 117.524 54.7607C117.715 55.347 117.715 56.7151 116.143 58.076Z" fill="#FAC54B"/>
          <defs>
          <filter id="filter0_f" x="36.749" y="104.561" width="32.5534" height="9.43875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"/>
          </filter>
          <filter id="filter1_f" x="77.5391" y="105.921" width="25.755" height="8.07906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"/>
          </filter>
          </defs>
        </svg>
        <p class="text-base text-center text-gray-500 mt-6">Be the first to review this expert</p>
      </div>
      <div v-else>
        <div class="lg:flex lg:gap-8">
          <div class="lg:w-full left lg:border-r lg:border-solid lg:pr-10">
            <p class="font-bold">Reviews</p>
            <div class="flex justify-between md:gap-4 items-center">
              <star-rating value="2" :disabled="true"></star-rating>
              <p class="font-bold">2 out of 5</p>
            </div>
            <p class="mt-4 text-gray-500">32 Clients ratings</p>
          </div>
          <div class="mt-6 lg:mt-0 lg:w-full right">
            <div class="md:flex md:items-center justify-between">
              <p>5 stars</p>
              <div class="mt-2 md:mt-0 fillbox md:w-3/4">
                <div class="filling h-full" :style="{width: 50 +'%'}"></div>
              </div>
              <p class="mt-4 md:mt-0">50%</p>
            </div>
            <div class="mt-4 md:items-center md:flex justify-between">
              <p>4 stars</p>
              <div class="mt-2 md:mt-0 fillbox md:w-3/4">
                <div class="filling h-full" :style="{width: 50 +'%'}"></div>
              </div>
              <p class="mt-4 md:mt-0">50%</p>
            </div>
            <div class="mt-4 md:flex md:items-center justify-between">
              <p>3 stars</p>
              <div class="mt-2 md:mt-0 fillbox md:w-3/4">
                <div class="filling h-full" :style="{width: 50 +'%'}"></div>
              </div>
              <p class="mt-4 md:mt-0">50%</p>
            </div>
            <div class="mt-4 md:flex md:items-center justify-between">
              <p>2 stars</p>
              <div class="mt-2 md:mt-0 fillbox md:w-3/4">
                <div class="filling h-full" :style="{width: 50 +'%'}"></div>
              </div>
              <p class="mt-4 md:mt-0">50%</p>
            </div>
            <div class="mt-4 md:flex md:items-center justify-between">
              <p>1 star</p>
              <div class="mt-2 md:mt-0 fillbox md:w-3/4">
                <div class="filling h-full" :style="{width: 50 +'%'}"></div>
              </div>
              <p class="mt-4 md:mt-0">50%</p>
            </div>
          </div>
        </div>
        <div class="border-t border-solid mt-6">
          <div v-for="(review, index) in reviews" :key="index" class="mb-8 py-6 lg:flex lg:gap-6" :class="[index < reviews.length - 1 ? 'border-b border-solid' : '']">
            <div class="person">
              <img src="@/assets/Images/categories/Ellipse 10.png" alt="" class="w-full h-full">
            </div>
            <div>
              <p class="font-bold text-lg">{{review.name}}</p>
              <div class="flex gap-6 items-center">
                <star-rating value="4" :disabled="true"></star-rating>
                <p class="text-gray-500">{{review.rating}}</p>
              </div>
              <p class="mt-6 text-gray-500">
                {{review.text}}
              </p>
              <p class="mt-4 text-sm text-gray-400">{{review.time}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import starrating from "@/components/HomePage/StarRating"
import StarRating from '../../components/HomePage/StarRating.vue'
export default {
  components: { StarRating },
data(){
  return {
    components:{starrating},
    reviews: [
      {name: 'kenechuwku', rating: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!Lorem ipsum dolor sit amet.', time:'4 days ago'},
      {name: 'kenechuwku', rating: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!Lorem ipsum dolor sit amet.', time:'4 days ago'},
      {name: 'kenechuwku', rating: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!Lorem ipsum dolor sit amet.', time:'4 days ago'},
      {name: 'kenechuwku', rating: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eum ipsum, numquam odio consectetur atque omnis totam nulla aliquam eaque nostrum vitae eos facere dolorum blanditiis ab facilis voluptas fugit!Lorem ipsum dolor sit amet.', time:'4 days ago'},
    ]
  }
}
}
</script>

<style scoped>
.fillbox{
  height: 4px;
  background: #DEDEDE;
  border-radius: 9px;
}
.filling{
  background-color: #F1BA4F;
  border-radius: 9px;
}
.person{
  min-width: 50px;
  height: 50px;
  border-radius: 50%
}
@media only screen and (min-width: 1024px){
  .left{
    width: 30%;
    min-width: 230px
  }
  .right{
    width: 50%;
  }
}
</style>