<template>
  <div class="px-3 lg:pl-14 lg:pr-0 py-8 lg:pb-12" style="background-color: #F2F2F2">
      <h1 class="text-3xl mb-6 font-bold dark">Our Categories</h1>
        <div class="horizontalmenu w-full">
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11.png" alt="">
                    <p class="dark font-bold mt-3">Crop Production</p>
                </div>
            </router-link>
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11 (1).png" alt="">
                    <p class="dark font-bold mt-3">Animal Production</p>
                </div>
            </router-link>
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11 (2).png" alt="">
                    <p class="dark font-bold mt-3">Agro Processing</p>
                </div>
            </router-link>
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11 (3).png" alt="">
                    <p class="dark font-bold mt-3">Agri Tech</p>
                </div>
            </router-link>
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11 (3).png" alt="">
                    <p class="dark font-bold mt-3">Agri Tech</p>
                </div>
            </router-link>
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11 (3).png" alt="">
                    <p class="dark font-bold mt-3">Agri Tech</p>
                </div>
            </router-link>
            <router-link to="/home/subcategories" class="inline-block hrmenuitem">
                <div>
                    <img src="@/assets/Images/categories/Rectangle 11 (3).png" alt="">
                    <p class="dark font-bold mt-3">Agri Tech</p>
                </div>
            </router-link>
        </div>
        <div class="mt-10 lg:flex lg:gap-6 mx-auto" style="max-width: 500px">
            <a target="blank" href="https://xpatag.herokuapp.com/signup" style="background: #52B95E;" class="block w-2/3 mx-auto text-sm rounded-3xl px-6 py-2 text-center text-white oultine-none focus:outline-none">Register as an expert</a>
            <router-link to="/" style="background: #fff; border: 1px solid #52B95E; color: #52B95E" class="block w-2/3 mt-4 text-center lg:mt-0 mx-auto text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">Register as a client</router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dark{
    color: #454545
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
  max-width: 230px;
  flex: 0 0 auto;
  margin-right: 40px;
  cursor: pointer;
  /* max-height: 260px */
}
.hrmenuitem img{
    height: 182px
}
@media only screen and (min-width: 768px){
.hrmenuitem img{
    height: 282px
}
}
</style>