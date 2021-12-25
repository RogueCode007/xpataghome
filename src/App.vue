<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Loading v-if="$store.state.loading"/>
    <Failure v-if="$store.state.showError"/> 
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import Loading from "@/components/Loading"
import Failure from "@/components/FailureModal"
import Footer from "@/components/Footer"
export default {
  components: {Loading, Footer, Failure},
  data(){
    return {
      baseURL: "https://api.xpatag.com/v1"
    }
  },
  methods:{
    getcategories(){
        this.$store.commit('startLoading')
        axios.get(`${this.baseURL}/category`)
        .then((res)=>{
            this.$store.commit('endLoading')
            console.log(res.data.data)
            this.$store.commit('setCategories', res.data.data)
        })
        .catch((err)=>{
            this.$store.dispatch('handleError', err)
        })
    }
    },
    computed:{
      ...mapState({
          categories: state => state.categories
      })
    },
    mounted(){
      if(this.categories.length < 1){
        this.getcategories()
      }
      console.log(this.categories)
    }
}
</script>
<style lang="scss">
#app {
  font-family: 'Cera Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "Cera Pro";
  src: local("Cera Pro"),
   url("./assets/fonts/cera pro font/Cera Pro Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Cera Pro Light";
  src: local("Cera Pro"),
   url("./assets/fonts/cera pro font/Cera Pro Light.ttf") format("truetype");
}
.light{
  font-family: "Cera Pro Light";
}
.l-modal{
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0, 0.3);
}
.loading-modal{
  min-height: 350px; 
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
