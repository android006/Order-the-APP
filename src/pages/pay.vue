<template>
	<div class="pay">
		<mt-header fixed :title="$store.state.cate[$route.params.index].name">
			<router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
		    </router-link>
		</mt-header>
		<div class="list pay_list">
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
</script>

<style>
	
</style>