<template>
	<div class="list-sj">
		<h4>商家列表</h4>
		<ul class="list_ul-sj">
			<router-link v-for="(item,index) in $store.state.shop" :to="{name:'/commodit',params:{index}}">
			<li >
				<div class="list_img-sj"><img :src="item.img"/></div>
				<div>
					<h4>{{item.name}}</h4>
					<p>
						<span>月售￥{{item.sales}}</span>
						<span>{{item.time}}分钟 |</span>
						<span>{{item.distance}}米</span>
					</p>
					<p>
						<span>起送￥{{item.give}}</span>
						<span>配送￥{{item.delivery}}</span>
						<span>人均￥{{item.average}}</span>
					</p>
				</div>
			</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	
</style>