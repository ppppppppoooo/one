<template>
  <div id="app">
    <el-link @click="q">qowieuuuu</el-link>
    <center>
      <!--头-->
      <tou />
      <!--轮播图-->
      <!-- <lunbo/> -->
      <!--菜单-->
      <!-- <meun/> -->

      <router-view></router-view>
      <!-- <component :is="qieh"></component> -->
      <!--尾巴-->
      <wei />
    </center>

  </div>

</template>

<script>
// 导入怎么写的组件
import tou from "./components/tou.vue";
import nr from "./components/index_nr";
import wei from "./components/wei";
import meun from "./components/meun";
import user from "./components/user";
export default {
  name: "App",

  // 声明存入组件
  components: {
    tou,
    nr,
    wei,
    meun,
    user
  },
  methods: {
    qiehmeun() {
      this.qieh = "meun";
    },
    shouye() {
      this.qieh = "nr";
    },
    q(){
       this.$http.get('http://localhost:8101/dome/g?name=1&i=2', {//这里将axios.get 改为this.$axios.get
          })
          .then(resp=>{
            console.log(resp);
          }).catch(err => {
            console.log(err);
          })
    }
  }

    

    }

</script>

<style>
#app {
  font-family: "Din Black", "SimHei", "Microsoft YaHei", "STXihei",
    "σìÄµûçτ╗åΘ╗æ", sans-serif;

  margin: 0;
  box-sizing: border-box;
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
