<template>
	<div>
		<div class="list-lb">
			<mt-header fixed :title="title">
				<router-link to="/" slot="left">
			      <mt-button icon="back">返回</mt-button>
			    </router-link>
			</mt-header>
			<div class="header_img">
				<img :src="$store.state.shop[$route.params.index].img"/>
			</div>
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">点菜</mt-tab-item>
			  <mt-tab-item id="2">评论</mt-tab-item>
			  <mt-tab-item id="3">商家</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <ul class="list_ul">
				<li v-for="(item,index) in $store.state.shop[$route.params.index].food">
					<div class="list_img-lb"><img :src="item.img"/></div>
					<div class="list_ul_list">
						<div class="list_name">{{item.name}}</div>
						<div class="list_sales">
							<span>月售￥{{item.sales}}</span>
							<span>赞{{item.good}}</span>
						</div>
						<div class="list_text">
							<div class="list_text_left">￥{{item.money}}</div>
							<div class="list_text_right">
								<button v-if="item.num >0" @click="remove(item.money,item.num,index)">-</button>
								<em v-if="item.num >0">{{item.num}}</em>
								<button @click="add(item.money,item.num,index)">+</button>
							</div>
						</div>
					</div>
				</li>
			</ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <div class="commo_cont">
					<div class="commo_main">
						<div class="f8 commo_sil commo_ic1">  057188079777  </div>
						<div class="commo_ic2 f8">商家地址：杭州大厦A座四楼B区</div>
					</div>
					<div class="commo_main">
						<div class="commo_sil commo_ic3 f8">配送时间：10:30-15:00,16:00-23:45</div>
						<div class="commo_ic4 f8">配送服务：提供高品质送餐服务</div>
					</div>
					<div class="commo_tel">
						客服电话：101-097-77
					</div>
					<div class="commo_time">
						服务时间：9:00-23:00
					</div>
				</div>
			  </mt-tab-container-item>
			</mt-tab-container>
			
		</div>
		<div class="bottom-lb">
			<div class="money-lb" v-model="men">{{men}}</div>
			<div @click='cont' class="cont-lb" v-model="com">{{com}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mach:"",
				title:this.$store.state.shop[this.$route.params.index].name,
				men:this.$store.state.shop[this.$route.params.index].mach,
				com:"￥"+this.$store.state.shop[this.$route.params.index].give+"起送",
				selected:"1"
			}
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			},
			add:function(money,num,index){
				if(this.$store.state.shop[this.$route.params.index].food[index].num >= 0){
					this.$store.state.shop[this.$route.params.index].mach = (parseFloat(this.$store.state.shop[this.$route.params.index].mach) + parseFloat(money)).toFixed(2)
					this.$store.state.shop[this.$route.params.index].food[index].num++
					this.mach = this.$store.state.shop[this.$route.params.index].mach
					this.men = "￥"+this.$store.state.shop[this.$route.params.index].mach
					if(this.$store.state.shop[this.$route.params.index].mach >= this.$store.state.shop[this.$route.params.index].give){
						this.com = "去结算~"
					}else{
						this.com = "还差￥"+(parseFloat(this.$store.state.shop[this.$route.params.index].give)-parseFloat(this.$store.state.shop[this.$route.params.index].mach)).toFixed(2)
					}
				}else{
					return
				}
			},
			remove:function(money,num,index){
				if(this.$store.state.shop[this.$route.params.index].food[index].num>0){
					this.$store.state.shop[this.$route.params.index].mach = (parseFloat(this.$store.state.shop[this.$route.params.index].mach) - parseFloat(money)).toFixed(2)
					this.$store.state.shop[this.$route.params.index].food[index].num --
					this.mach = this.$store.state.shop[this.$route.params.index].mach
					if(this.$store.state.shop[this.$route.params.index].mach >= this.$store.state.shop[this.$route.params.index].give){
						this.com = "去结算~"
					}else{
						this.com = "还差￥"+(parseFloat(this.$store.state.shop[this.$route.params.index].give)-parseFloat(this.$store.state.shop[this.$route.params.index].mach)).toFixed(2)
					}
					if (this.$store.state.shop[this.$route.params.index].mach == 0) {
						this.men = '选购车空空如也~~'
						this.com = "￥"+(parseFloat(this.$store.state.shop[this.$route.params.index].give)).toFixed(2)+"起送"
					}else{
						this.men = this.mach
					}
					
				}else{
					return
				}
			},
			cont:function(){
				if(this.$store.state.shop[this.$route.params.index].mach == 0){
					alert("您还没有选购")
				}else{
					for(var i=0;i<this.$store.state.shop[this.$route.params.index].food.length;i++){
						if (this.$store.state.shop[this.$route.params.index].food[i].num > 0) {
							this.$store.state.known.push(this.$store.state.shop[this.$route.params.index].food[i])
						}
					}
					this.$router.push('/order')
				}
			},
		}
	}
</script>

<style>
	
</style>