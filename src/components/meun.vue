<template>
  <div class="rty">
<router-view></router-view>
    <div id="zong">
      <div class="didan">
        <center>我的订单</center>
      </div>
      <div class="div">
        <div class="bianji">
          <p>送餐至：</p><a href="javaScript:void(0)" @click="centerDialogVisible=true">编辑</a>
        </div>
        <div class="neirong">
          <p>地址</p>
        </div>
      </div>
      <div class="div">
        <div class="bianji">
          <p>送餐时间：</p><a href="#">编辑</a>
        </div>
        <div class="neirong">
          <span>预计送餐时间:</span>
          <p>时间</p>
        </div>
      </div>
      <div class="div">
        <div class="bianji">
          <a href="#">有优惠代码？</a>
        </div>
      </div>
      <div class="div">
        <div class="bianji">
          <p>小计：</p>
          <p>外送费：</p>
          <h2>总计：</h2>
        </div>
        <div class="neirong">
          <p>￥0.00</p>
          <p>￥0.00</p>
          <h2>￥0.00</h2>
        </div>
        <div class="jiezhang">
          <center><button type="button">立即结账</button></center>
        </div>
      </div>
      <div class="div">
        <div class="bianji">
          <h3>订单明细</h3>
         <div  class="rr" v-for="item in  ddmx">
       <img src="static/img/900020.png" style=" width: 100px;
  height: 50px;" >
            <b class="spmx">wqewqewq23133333333333333333ewqeqwe</b>
            <p ><span>1</span> <span>213</span></p>
         </div>
        </div>
      </div>
    </div>
    <el-dialog
  :visible.sync="centerDialogVisible"
  center>
 <distri />
  <span style="" slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">下 一 步</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import distri from  './meun/distribution'
export default {
    data() {
      return {
        ddmx:[{},{}],
        centerDialogVisible: false
      }
    },
    components:{
      distri
    }
  };
</script>
<style>
.rr{
  width: 280px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}

  #meun_sp>div>div{
    margin: 30px 0  0 0;
  }
 
  .el-pagination.is-background {
    margin-top: 20px;
    margin-left: 420px;
}
#spimg>div{
  margin-bottom: 40px;
}
  .rty{
    width: 1160px;
    display: flex;
    justify-content: space-between;
  }
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #e6e6e6;
  font-size: 15px;
}
#zong {
  
  display: flex;
  flex-direction: column;
  background-color: white;

  border: 1px solid #000000;
}
.el-tabs__header.is-left {
    width: 150px;
}
.didan {
  border-bottom: 1px solid #999999;
  padding: 5px;
  font-size: 20px;
}
.div {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #999999;
}
.bianji {
  padding-left: 15px;
  padding-top: 5px;
  width: 40%;
  padding-top: 5px;
  padding-bottom: 5px;
}
.bianji p {
  color: #717578;
  margin-top: 5px;
  margin-bottom: 5px;
}
.bianji a {
  text-decoration: none;
  color: #26a6e3;
}
.neirong {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: right;
  width: 53%;
}
.neirong * {
  margin-top: 5px;
  margin-bottom: 5px;
}
.neirong span {
  color: #717578;
}
.neirong h2 {
  color: #339933;
}
.jiezhang {
  width: 100%;
}
.jiezhang button {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 80%;
  height: 40px;
  background-color: #717578;
  border-color: #717578;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  outline: none;
}

</style>
