<template>
  <div id="app">
    <router-view></router-view>
		<Buttom class='btom' ></Buttom>
  </div>
</template>

<script>
import Buttom from './components/Bottom.vue'
export default {
  data(){
  	return{
  		
  	}
  },
  components:{Buttom}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
ul,li{
	list-style: none;
}
</style>
