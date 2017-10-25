<template>
	<div cla>
		<mt-search v-model="searchQuery" cancel-text="取消" placeholder="搜索" class='search'></mt-search>
	    <input type="text"  placeholder="请输入内容搜索">
	    <ul>
	        <li v-for="(item,id) in searchRes" >
	         <div><router-link :to="'commodit/'+item[1]" >{{item[0]}}</router-link> </div>
	        </li>
	    </ul>
	    <div class="hot">
	    <h4>热门搜索</h4>
		<span v-for="(item,id) in hot" @click="add(item)">{{item}}</span>
		</div>
	</div>
</template>

<script>
  export default{
    data(){
    return{ 
    hot:['黄焖鸡','煎包','蛋糕'],
    list: [],
    searchQuery:''
    }     
        },
         mounted() {
         var i=0
         while(i<this.$store.state.shop.length){
         this.list.push([this.$store.state.shop[i].name,i])        
         i++}          
         },
         
        computed:{
        searchRes(){  
        if(this.searchQuery==''){
        this.searchQuery=null
        }
                var _this = this;
                return this.list.filter(function(val){
                
                        return val[0].indexOf(_this.searchQuery)!==-1;
                })
            }
        },
        methods:{
        clear(){
        this. searchQuery=''
        },
        add(item){
         this.searchQuery=item
        }
        }
    }
</script>
<style>
.hot span{
padding:10px 20px;
}
</style>