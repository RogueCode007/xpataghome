<template>
    <div class="horizontalmenu w-full">
        <div class="inline-block hrmenuitem" v-for="(category, index) in categories" :key="index">
            <div>
                <div class="skeleton skeleton-img"></div>
                <p  class="mt-4 skeleton skeleton-text"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories: [{},{},{},{},{},{}]
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
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
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
.skeleton-img{
    height: 182px;
    border-radius: 12px;
    width: 100%;
}
@media only screen and (min-width: 768px){
.hrmenuitem{
    min-width: 230px
}
.skeleton-img{
    height: 282px
}
}
</style>