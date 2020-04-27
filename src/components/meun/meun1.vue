<template>

    <div id="as">
        <router-view></router-view>
      <el-tabs
        :tab-position="tabPosition"
        style="height: 400px;"
      >
        <el-tab-pane label="促销产品和热卖产品">
          <div id="s">
            <div id="meun_sp">
               <div
                v-for="item in sp"
                class="grid-content bg-purple"
              >
                <div id="spimg">
                  <div>
                    <img :src="item.img" />
                    <h5>qwjewqlkjelkjdklsa</h5>
                  </div>
                  <p
                    name="p"
                    style="text-align: left;"
                    id="sf"
                  >
                    <span class="s">￥14</span>
                    <el-button
                      type="danger"
                      round
                    >添加</el-button>
                  </p>
                </div>
              </div>
            </div>
              <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
          </div>
        
        </el-tab-pane>
        <el-tab-pane label="主食和超值套餐">
                <div id="s">
            <div id="meun_sp">
              <div
                v-for="item in sp"
                class="grid-content bg-purple"
              >
                <div id="spimg">
                  <div>
                    <img :src="item.img" />
                    <h5>qwjewqlkjelkjdklsa</h5>
                  </div>
                  <p
                    name="p"
                    style="text-align: left;"
                    id="sf"
                  >
                    <span class="s">￥14</span>
                    <el-button
                      type="danger"
                      round
                    >添加</el-button>
                  </p>
                </div>
              </div>
            </div>
              <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="小食">
            <div id="s">
            <div id="meun_sp">
              <div
                v-for="item in sp"
                class="grid-content bg-purple"
              >
                <div id="spimg">
                  <div>
                    <img :src="item.img" />
                    <h5>qwjewqlkjelkjdklsa</h5>
                  </div>
                  <p
                    name="p"
                    style="text-align: left;"
                    id="sf"
                  >
                    <span class="s">￥14</span>
                    <el-button
                      type="danger"
                      round
                    >添加</el-button>
                  </p>
                </div>
              </div>
            </div>
              <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="甜品">
                 <div id="s">
            <div id="meun_sp">
              <div
                v-for="item in sp"
                class="grid-content bg-purple"
              >
                <div id="spimg">
                  <div>
                    <img :src="item.img" />
                    <h5>qwjewqlkjelkjdklsa</h5>
                  </div>
                  <p
                    name="p"
                    style="text-align: left;"
                    id="sf"
                  >
                    <span class="s">￥14</span>
                    <el-button
                      type="danger"
                      round
                    >添加</el-button>
                  </p>
                </div>
              </div>
            </div>
              <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="饮品">
                <div id="s">
            <div id="meun_sp">
              <div
                v-for="item in sp"
                class="grid-content bg-purple"
              >
                <div id="spimg">
                  <div>
                    <img :src="item.img" />
                    <h5>qwjewqlkjelkjdklsa</h5>
                  </div>
                  <p
                    name="p"
                    style="text-align: left;"
                    id="sf"
                  >
                    <span class="s">￥14</span>
                    <el-button
                      type="danger"
                      round
                    >添加</el-button>
                  </p>
                </div>
              </div>
            </div>
              <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="开心乐园餐">
               <div id="s">
            <div id="meun_sp">
              <div
                v-for="item in sp"
                class="grid-content bg-purple"
              >
                <div id="spimg">
                  <div>
                    <img :src="item.img" />
                    <h5>qwjewqlkjelkjdklsa</h5>
                  </div>
                  <p
                    name="p"
                    style="text-align: left;"
                    id="sf"
                  >
                    <span class="s">￥14</span>
                    <el-button
                      type="danger"
                      round
                    >添加</el-button>
                  </p>
                </div>
              </div>
            </div>
              <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
</template>

<script>
export default {
  data () {
    return {
      tabPosition: 'left',
      sp: [
        {
          img: 'static\\img\\900020.png',
          name: '',
          moery: 2
        },
        {
          // eslint-disable-next-line quotes
          img: "static\\img\\900020.png",
          name: '',
          moery: 2
        },
        {
          img: 'static\\img\\900020.png',
          name: '',
          moery: 2
        },
        {
          img: 'static\\img\\900020.png',
          name: '',
          moery: 2
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tabs__content > div {
  text-align: center;
}

div#as {
    margin-right: 0px;
}
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: white;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

#meun_sp {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  background-color: #ffc423;
  text-align: center;
  width: 700px;
}

#meun_sp > div {
  margin-bottom: 20px;
  width: 220px;
  height: 280px;
  margin: 5px;
}

* {
  box-sizing: border-box;
}

#s {
  width: 640px;
  text-align: center;
}

#spimg img {
  width: 170px;
  height: 128px;
}

#sf {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.s {
  text-indent: 1em;
  display: inline-block;
  padding-right: 50px;
}

.el-tabs--left {
  overflow: inherit;
}

.el-tabs__active-bar {
  background-color: yellow;
}

.el-tabs--left .el-tabs__active-bar.is-left,
.el-tabs--left .el-tabs__active-bar.is-right,
.el-tabs--right .el-tabs__active-bar.is-left,
.el-tabs--right .el-tabs__active-bar.is-right {
  width: 9px;
}

.el-tabs__item.is-active {
  color: burlywood;
  font-weight: bold;
}

#as {
  width: 900px;
  margin: 0 auto;
  height: 600px;
  display: inline-block;
}
</style>
