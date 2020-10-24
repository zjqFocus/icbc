<template>
  <div class="box">

    <div class="blockDiv">
        {{msga}}
      <div id="aSonDiv">
        <Apage @getSonData="getData"></Apage>
      </div>
      <div id="bSonDiv">
        <Bpage :parentData="acceptSonData"></Bpage>
      </div>
    </div>

    <div class="blockDiv">
      <button @click="moveUp">向上</button>
      <button @click="moveDown">向下</button>
      <div class="moveDiv" :class="{'moveUpStyle':moveDirection==='up','moveDownStyle':moveDirection==='down'}"></div>
    </div>



  </div>
</template>
<script>
import Apage from "./A";
import Bpage from "./B";
export default {
  name: "HelloWorld",
  data() {
    return {
      msga:'2个子组件传值',
      acceptSonData: "",
      moveDirection:'up'
    };
  },
  components: {
    Apage,
    Bpage,
  },
  methods: {
    getData: function (val) {
      this.acceptSonData = val;
    },
    moveUp(){
      this.moveDirection='up'
    },
    moveDown(){
      this.moveDirection='down'
    }
  },
};
</script>

<style scoped>
.box{
  display:flex;
  justify-content: space-around;
}
.blockDiv{
  width:300px;
  height: 260px;
  border: solid 1px black;

}
#aSonDiv {
  height: 100px;
  width: 260px;
  border: solid 1px red;
}
#bSonDiv {
  height:100px;
  width: 260px;
  border: solid 1px red;
}

.moveDiv{
  border: solid 1px red; width: 100px; height: 100px;
  margin-top: 100px;
}
.moveUpStyle{
  transform: translateY(-100px);
  transition: all 0.3s;
}
.moveDownStyle{
  transform: translateY(0px);
  transition: all 0.3s;
}
</style>
