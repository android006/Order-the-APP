<template>
	<div>
		<mt-header fixed title="订单中心">
			<router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
		    </router-link>
			<router-link to="/login" slot="right">
			    <mt-button ></mt-button>
		    </router-link>
		</mt-header>
		<div class="list_order">
			<ul class="list_ul">
				<li v-for="(item,index) in $store.state.known">
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
								<em v-if="item.num >0">{{item.num}}</em>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottom" >
			<div class="money">￥{{$store.state.shop[0].mach}}</div>
			<div class="cont" @click="alert">付款</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			alert:function(){
				this.$store.state.distory = this.$store.state.known;
				this.$store.state.known = [];
				for (var i=0 ; i<this.$store.state.shop.length; i++) {
					this.$store.state.shop[i].mach=0
					for (var j=0 ; j<this.$store.state.shop[i].food.length; j++) {
						this.$store.state.shop[i].food[j].num=0
					}
				}
				alert("功能开发中~~")
			}
		}
	}
</script>

<style>
	
</style>