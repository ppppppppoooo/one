<template>
  <div>
    <div class="header-actions row">
      <div class="language-selector">
        <ul class="list-inline list-inline-divide">
          <li class="list-item selected">
            <a
              class="list-item-target"
              href="?locale=zh"
            >中文 <i class="fa fa-caret-left icon"></i></a>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <!-- -->
          </li>
          <li class="list-item"><a
              class="list-item-target"
              href="?locale=en"
            >English <i class="fa fa-caret-left icon"></i></a></li>
        </ul>
      </div>
      <div class="my-account-quicklinks">
        <ul class="list-inline list-inline-divide">

          <li class="list-item"><el-link
             class="el-icon-s-custom el-icon--right"
              href="javaScript:void(0)"
              data-toggle="modal"
              data-target="#signin"
             @click.native="drawer=true"
              
            >登录</el-link></li>
             &nbsp; &nbsp; &nbsp; &nbsp;
          <li class="list-item"><a
              class="list-item-target"
              href="#trackOrder"
              data-toggle="modal"
              data-target="#trackOrder"
            >追踪订单</a></li>

        </ul>
      </div>
    </div>
    <div class="tou">
      <div id="i">
        <router-link to="/">
          <img src="static\img\onet1.jpg" />
        </router-link>

      </div>
      <div>
        <ul class="nav">
          <li class="">
            <router-link to="/meun">
              <i class="">
              </i> 浏览菜单
            </router-link>
          </li>
          <li class="">
            <a
              class=""
              href="#"
            >
              <i class=""></i> 优惠券
            </a>
          </li>
          <li class="">
            <router-link to="/user">
              <i class=""></i> 我的账户
            </router-link>
            <ul
              class="dropdown-menu"
              v-show="cc"
            >
              <li class="dropdown-menu-item">
                <a
                  class="dropdown-menu-item-target"
                  href="#trackOrder"
                  data-toggle="modal"
                >追踪订单</a>

              </li>
              <li class="dropdown-menu-item">
                <a
                  class="dropdown-menu-item-target"
                  href="/cn/account-order-history.html"
                >订餐记录</a>
              </li>

              <li class="dropdown-menu-item">
                <a
                  class="dropdown-menu-item-target"
                  href="/cn/addressBook.html"
                >地址簿</a>
              </li>

              <li class="dropdown-menu-item">
                <a
                  class="dropdown-menu-item-target"
                  href="/cn/editProfile.html"
                >账户设置</a>
              </li>
              <li class="dropdown-menu-item">
                <a
                  class="dropdown-menu-item-target"
                  href="/cn/changeUserPassword.html"
                >更改密码</a>
              </li>
            </ul>
          </li>
          <li class="bangzhu">
            <a
              class=""
              href="#"
              @click="sho()"
            >
              <i class=""></i> 帮助<span class=""></span>
            </a>
            <ul
              class="dw"
              v-show="ti"
            >
              <li class="">
                <a
                  class=""
                  href="#"
                >
                  网站条款</a>
              </li>
              <li class="">
                <a
                  class=""
                  href="#"
                >
                  隐私政策</a>
              </li>
              <li class="">
                <a
                  class=""
                  href="#"
                >
                  订餐须知</a>
              </li>
              <li class="">
                <a
                  class=""
                  href="#"
                >
                  常见问题</a>
              </li>
              <li class="">
                <a
                  class=""
                  href="#"
                >
                  关于30分钟必达</a>
              </li>
              <li class="">
                <a
                  class=""
                  href="#"
                >经营公示</a>
              </li>
              <li class="">
                <a href="">网络餐饮公示</a>
              </li>

            </ul>
          </li>

        </ul>
      </div>

    </div>


<el-drawer

  :visible.sync="drawer"
  :with-header="false">
  <regits/>
</el-drawer>

  </div>
</template>

<script>
import regits from './tou/regits'
export default {
  data () {
    return {
      drawer: true,
      cc: false,
      ti: false
    };
  },
  components: {regits},
  methods: {
    // 帮助显示
    sho: function () {
      
      this.ti = !this.ti
    },
    yonghu () {
      this.cc = !this.cc
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.list-inline list-inline-divide {
  display: inline-block;
}

.language-selector {
  width: 1030px;
  text-align: left;
}

ul.list-inline.list-inline-divide {
  display: -webkit-box;
}

.header-actions.row {
  display: inline-flex;
  width: 1170px;
}

ul.list-inline.list-inline-divide {
  padding: 0;
}

.list-inline list-inline-divide ul{padding 0}, .dropdown-menu {
  z-index: 10;
  background-color: #fff;
}

li.dropdown-menu-item {
  line-height: 30px;
}

* {
  z-index: 10;
  box-sizing: border-box;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #3d3d3d;
}

li.dropdown-menu-item {
}

ul.dropdown-menu {
  margin-top: 5px;
}

ul.dropdown-menu {
  background-image: linear-gradient(#5c5c5c, #3d3d3d 30%, #3d3d3d);
  width: 158px;
}

ul.dropdown-menu {
  margin-left: 20px;
}

ul.dropdown-menu a {
  font-family: 'Din Black', 'SimHei', 'Microsoft YaHei', 'STXihei', '\3C3\EC\C4\B5\FB\E7\3C4\2557\E5\398\2557\E6', sans-serif;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
}

ul.dropdown-menu {
  padding: 0;
  text-align: center;
}

.nav {
  display: block;
  list-style-type: disc;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  display: flex;
  flex-flow: row;
}

.nav>li {
  height: 60px;
  width: 200px;
  border-right: 1px solid #222;
  list-style-type: none;
  text-align: center;
}

.nav>li>a {
  font-family: 'Din Black', 'SimHei', 'Microsoft YaHei', 'STXihei', 'σìÄµûçτ╗åΘ╗æ', sans-serif;
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}

.tou {
  margin-bottom: 20px;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0 5px 5px;
  background-clip: content-box;
  background-image: linear-gradient(#5c5c5c, #3d3d3d 30%, #3d3d3d);
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  height: 60px;
  width: 1164px;
  background-color: #3d3d3d;
}

.bangzhu {
  position: relative;
}

.dw>li {
  text-align: center;
}

.dw>li a {
  font-family: 'Din Black', 'SimHei', 'Microsoft YaHei', 'STXihei', 'σìÄµûçτ╗åΘ╗æ', sans-serif;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
}

.dw {
  background-image: linear-gradient(#5c5c5c, #3d3d3d 30%, #3d3d3d);
  border-radius: 6px;
  line-height: 25px;
  position: absolute;
  top: 100%;
  z-index: 1000;
  min-width: 160px;
  padding: 5px 0;
  margin: 5px 0 0;
  margin-left: 15px;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

#i {
  width: 200px;
  border-radius: 6px 0px 0px 6px;
  line-height: 60px;
  vertical-align: middle;
  background-color: #e71b23;
  max-width: 100%;
  border-right: solid 1px dimgrey;
}

#i>img {
  padding-top: 8px;
  padding-right: 5px;
}
</style>
