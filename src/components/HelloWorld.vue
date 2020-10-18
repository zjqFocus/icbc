<template>
  <div class="hello"> 
    <div id="aSonDiv">      
      <Apage  @getSonData="getData"></Apage>
    </div> 
    <div id="bSonDiv">      
      <Bpage :parentData="acceptSonData" ></Bpage>
    </div>
  </div>
</template>
<script>
  import Apage from './A' 
  import Bpage from './B'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        acceptSonData:''
      }
    },
    components:{
      Apage,Bpage
    },
    methods:{
      getData:function(val){
        this.acceptSonData=val;
      }
    }
  };
</script>

<style scoped>

  #aSonDiv{
    height: 200px;
    width:400px;
    border:solid 1px red;
  }
  #bSonDiv{
    height: 200px;
    width:400px;
    border:solid 1px red;
  }
  
</style>
