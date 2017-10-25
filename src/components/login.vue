<template>
	<div class="login">
		<mt-header fixed title="登录">
			<router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
		    </router-link>
			<router-link to="/register" slot="right">
			    <mt-button >立即注册</mt-button>
		    </router-link>
		</mt-header>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1" class='bor_left'>手机验证登录</mt-tab-item>
		  <mt-tab-item id="2">美团账号登录</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1" class="flas">
			<input class="flas_icon1" type="text" placeholder="请输入手机号" v-model="tel"/><br>
			<input class="flas_icon2" type="text" placeholder="请输入短信验证码" v-model="name"/><br>
			<div class="login_text">未注册过的手机将自动注册为美团账户</div>
			<button @click="login" class="login_button">登录</button>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2" class="flas">
		   <input class="flas_icon3" type="text" placeholder="美团账户(手机/邮箱/用户名)" v-model="tel"/><br>
			<input class="flas_icon4" type="text" placeholder="请输入密码" v-model="name"/><br>
			<div class="login_d"><button @click="login" class="login_button">登录</button></div>
			<div class="login_l"><span>忘记密码</span></div>
		  </mt-tab-container-item>
		</mt-tab-container>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:'',
				name:'',
				selected:'1'
			}
		},
		methods:{
			login:function(){
				if(this.$store.state.user == this.tel){
					this.$store.state.logined = false;
					this.$router.push('/mine')
				}else{
					alert('请输入正确信息！')
					this.name = ''
					this.tel = ''
				}
			}
		}
	}
</script>

<style>
	
</style>