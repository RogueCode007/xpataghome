<template>
  <div class="">
      <div class="cont py-4 px-3 lg:px-14 lg:py-8">
          <div>
                <h1 class="text-white text-2xl lg:text-4xl font-bold">{{category.name}}</h1>
                <p class="mt-4 light text-white lg:text-xl">{{category.description}}</p>
          </div>
      </div>
      <div class="py-8 px-3 lg:px-14 header">
          <!-- <div class="lg:flex lg:justify-between">
              <div class="lg:flex lg:gap-6">
                  <select class="py-2 w-full block px-3 rounded outline-none border focus:outline-none  focus:border-transparent">
                      <option value="">Crop disease specialist</option>
                  </select>
                  <select class="mt-4 lg:mt-0 w-full block py-2 px-3 rounded outline-none border focus:outline-none  focus:border-transparent">
                      <option value="">Budget</option>
                  </select>
                  <select class="mt-4 lg:mt-0 w-full block py-2 px-3 rounded outline-none border focus:outline-none focus:border-transparent">
                      <option value="">Location</option>
                  </select>
              </div>
              <div class="mt-4 pl-2 w-full lg:mt-0 flex input items-center border border-solid rounded">
                  <svg class="" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z" fill="black"/>
                  </svg>
                  <input type="text" placeholder="Search" class="bg-white w-full py-2 px-3 outline-none">
              </div>
          </div> -->
          <p v-if="services.length > 0" class="mt-4 text-gray-500">{{services.length}} service(s) available</p>
          <p v-else class="mt-4 text-gray-500">0 service(s) available</p>
      </div>
      <Skeleton v-if="$store.state.loading" />
      <div v-if="services.length > 0" class="box py-8 px-3 lg:px-14">
          <div v-for="(service, index) in paginatedServices" :key="index" class="item py-3 flex flex-col justify-between">
              <div class="w-full imgbox relative px-3">
                  <img :src="service.image" class="w-full h-full">
                  <div class="absolute person">
                      <img src="@/assets/Images/categories/Ellipse 10.png" alt="" class="w-full h-full">
                  </div>
              </div>
              <div class="mt-8">
                    <h1 class="font-bold text-base px-3">{{service.expert.firstname}} {{service.expert.lastname}}</h1> 
                    <p class="mt-4 light px-3">{{service.description | slicer}}</p>  
                    <p class="mt-2 text-sm light px-3">Lagos</p> 
                    <!-- <p class="mt-2 font-bold text-xs px-3">#12,000 - #15,000</p> -->
                    <div class="mt-4 border-t border-solid pt-3 px-3 md:flex md:justify-between md:items-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <button @click="setExpertId(service.expert.id)" class="block view mt-4 text-center md:mt-0  text-sm rounded-3xl px-6 py-2 oultine-none focus:outline-none">View Profile</button> 
                    </div> 
              </div> 
          </div>
      </div>
      <p v-else class="norecord">No records found</p>
        <div v-if="paginatedServices.length > 0" class="my-8">
            <t-pagination
            :total-items="totalRows"
            :per-page="perPage"
            :limit="limit"
            :disabled="disabled"
            v-model="currentPage"
            @change="changePage"
            />
        </div> 
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
import TPagination from 'vue-tailwind/dist/t-pagination'
import Skeleton from "@/components/ServiceSkeleton"
export default {
    components:{Skeleton, TPagination},
    data(){
        return {
            services: [],
            totalRows: 0,
            perPage: 12,
            pages: [],
            page : 1,
            disabled: false,
            limit: 5,
            currentPage: 1,
        }
    },
    computed: {
        ...mapState({
            category : state => state.category
        }),
        paginatedServices(){
            return this.paginate(this.services)
        }
    },
    watch:{
        services(){
            this.setPages()
        }
    },
    methods:{
        setExpertId(val){
            this.$store.commit('setExpertId', val)
            this.$router.push(`/home/profile/${val}`)
        },
        setPages () {
            let numberOfPages = Math.ceil(this.services.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (services) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  services.slice(from, to);
        },
    },
    filters:{
        slicer(val){
            return val.slice(0, 30) + '...'
        }
    },
    mounted(){
        // console.log(this.category)
        this.$store.commit('startLoading')
        axios.get(`${baseURL}/service/category/${this.category.category_id}`)
        .then((res)=>{
            this.services = res.data.data
            this.totalRows = res.data.data.length
            this.$store.commit('endLoading')
        })
        .catch((err)=>{
            this.$store.dispatch('handleError', err)
        })
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
    border-radius: 50%;
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
    select{
        width: 220px;
    }
    .input{
        width: 220px
    }
}
@media only screen and (min-width: 1280px){
    .box, .header{
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