<template>
	<div>
		<mt-header fixed title="注册">
			<router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
		    </router-link>
			<router-link to="/login" slot="right">
			    <mt-button >登录</mt-button>
		    </router-link>
		</mt-header>
		<div class="reg_main">
			<div>
				<input class="flas_icon1" type="text" placeholder="请输入账号" v-model="tel"/><br>
			</div>
			<div>
				<input class="flas_icon2" type="text" placeholder="请输入密码" v-model="name"/><br>
			</div>
			<div class="login_d"><button @click="login" class="login_button">注册</button></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:'',
				name:''
			}
		},
		methods:{
			login:function () {
				if(this.tel && this.name){
					this.$store.state.user = this.tel
					this.$store.state.pass = this.name
					this.$router.push('/login')
				}else{
					alert('请输入正确的信息！')
				}
			}
		}
	}
</script>

<style>
	
</style>