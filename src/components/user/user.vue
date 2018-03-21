<template>
	<div class="user">
		<router-link to="/user/login" class="login">用户登录</router-link>
		<router-link to="/user/register" class="register">用户注册</router-link>
	</div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{margin:.2rem .3rem;overflow:hidden;}
.user a.login{float:left;}
.user a.register{float:right;}
</style>
