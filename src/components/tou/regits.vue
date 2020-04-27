
		<style type="text/css">
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #e6e6e6;
}
#qubu {
  display: flex;
  flex-direction: column;
  width: 600px;
  background-color: white;
}
.tou {
  text-align: center;
}
.tou span:nth-child(1) {
  display: inline-block;
  width: 180px;
  background-color: #e71b23;
  margin-left: 30px;
}
.cha {
  float: right;
  font-size: 35px;
  padding-right: 5px;
}
.dc {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
}
.denglu p {
  margin-top: 15px;
}
.denglu p:nth-child(1) {
  border: 1px solid #c6c6c6;
  width: 260px;
  padding: 15px;
}
.denglu p:nth-child(1) input {
  height: 20px;
  border: none;
  outline: none;
}
.denglu p:nth-child(2) {
  border: 1px solid #c6c6c6;
  width: 260px;
  padding: 15px;
  margin-top: 0px;
}
.denglu p:nth-child(2) input {
  height: 20px;
  border: none;
  outline: none;
}
.denglu p:nth-child(3) {
  text-align: left;
  width: 290px;
}
.denglu p:nth-child(3) input {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  margin-right: 15px;
}
.denglu p:nth-child(3) span:nth-child(2) {
  height: 40px;
  position: absolute;
  line-height: 40px;
}
.denglu p:nth-child(4) {
  width: 290px;
  margin-top: 0px;
}
.denglu p:nth-child(4) input {
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: white;
  background-color: #e71b23;
  border: 1px solid #e71b23;
  border-radius: 5px;
  outline: none;
}
.denglu p:nth-child(5) {
  width: 290px;
  padding-bottom: 10px;
  border-bottom: 1px solid #c6c6c6;
}
.denglu p:nth-child(6) {
  margin-top: 0px;
  font-size: 18px;
}
.denglu p:nth-child(7) {
  margin-top: 5px;
  padding-bottom: 30px;
  font-size: 15px;
}
a {
  text-decoration: none;
  color: black;
}
</style>

<template>
  <div><div id="qubu">
    <div class="tou">
      <span><img src="static\img\onet1.jpg"></span>
    
    </div>
    <div class="dc">
      <center>欢迎，登陆后开始订餐 <i class="el-icon-info"></i></center>
    </div>
    <div class="denglu">
      <center>
        <p><input
            type="text"
            placeholder="邮箱/手机号"
            name=""
            size="30"
            value=""
          /></p>
        <p><input
            type="password"
            placeholder="密码"
            name=""
            size="30"
            value=""
          /></p>
        <p>
          <span><input
              type="checkbox"
              name=""
              value=""
            /></span>
          <span>下次自动登陆</span>
        </p>
        <p><input
            type="button"
            name=""
            value="登陆"
          /></p>
        <p><a href="#">忘记密码 ?</a></p>
        <p><a href="#">新用户</a></p>
        <p><a href="#"><i class="el-icon-edit"></i> 请输入您的送餐地址</a></p>
      </center>
    </div>
        </div>
    </div>

</template>
		<script>
export default{
    
}

</script>


