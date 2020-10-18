<template>
	<div id="aDiv">
		<h3>A子组件中的内容</h3>
		<button @click="sendData">给B组件传数据</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msgA:'我是A子组件中的数据'
			}
		},
		methods:{
			sendData(){
				this.$emit("getSonData",this.msgA);
			}
		}
	}
</script>

<style scoped>


</style>