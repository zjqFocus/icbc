<template>
	<div id="bDiv">
		<h3>B子组件中的内容</h3>
		收到A组件的数据是：
		{{parentData}}
	</div>
</template>
<script>
	export default{
		data(){
			return {
			}
		},
		props:["parentData"]
	}
</script>

<style scoped>


</style>