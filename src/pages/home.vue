<template>
	<div class="content">
		<div class="hearder">
			<router-link to='serch'><mt-search v-model="value" cancel-text="取消" placeholder="搜索" class='search'></mt-search></router-link>
			<div class="bnrs-wrap">
				<div class="bnrs">
					<a href="#" class="baitem">
						<img src="../assets/bannertemp.e8a6fa63.jpg"/>
					</a>
				</div>
			</div>
		</div>
		<div id="icon_list">
			<ul>
				<router-link v-for="(n,index) in $store.state.cate" :to="{name:'/pay',params:{index}}">
					<li >
						<div class="icon"><img :src="n.img"></div>
						<p>{{n.name}}</p>
					</li>
				</router-link>
			</ul>
		</div>
		
		<div class="list">
			<h4>——附近商家——</h4>
			<ul class="list_ul">
				<router-link v-for="(item,index) in $store.state.shop" :to="{name:'/commodit',params:{index}}">
				<li >
					<div class="list_ul_img">
						<img :src="item.img"/>
					</div>
					<div class="list_ul_text">
						<span class="text_title">{{item.name}}</span>
						<div class="text_cont">
							<span>月售￥{{item.sales}}</span>
							<i>{{item.time}}分钟 | </i>
							<i>{{item.distance}}米</i>
						</div>
						<div class="text_cont">
							<span>起送￥{{item.give}}</span>
							<span>配送￥{{item.delivery}}</span>
							<span>人均￥{{item.average}}</span>
						</div>
					</div>
				</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:''
			}
		}
	}
</script>

<style>
	
</style>