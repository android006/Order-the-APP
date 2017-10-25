<template>
	<div class="mine">
		<div class="mine_header">
			<div class="mine_he">
				<div class="head_pic"><img :src="$store.state.head"/></div>
				<div class="mine_text">{{$store.state.user}}</div>
			</div>
			<div class="mine_banner">
				<img src="../assets/imgs/user-banner.8c03fc75.png"/>
			</div>
		</div>
		<div class="mine_cont">
			<div class="mine_main">
				<div class="f8 text_sil mine_ic1">收获地址管理</div>
				<div class="mine_ic2 f8">商家代金券</div>
			</div>
			<div class="mine_main">
				<div class="text_sil mine_ic3 f8">意见反馈</div>
				<div class="mine_ic4 f8">常见问题</div>
			</div>
			<div class="mine_tel">
				客服电话：101-097-77
			</div>
			<div class="mine_time">
				服务时间：9:00-23:00
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	
</style>