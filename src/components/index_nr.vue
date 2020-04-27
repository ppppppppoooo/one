
  <template>
  <div>
    <div class="block">

      <el-carousel
        trigger="click"
        height="470px"
      >
        <el-carousel-item
          v-for="(item,i) in img"
          :key="i"
          class="q"
        >
          <h3 class="small">
            <img
              :src="item.src"
              alt=""
            ></h3>
        </el-carousel-item>
      </el-carousel>

    </div>
    <div class="w">

      <div class="da">
        <h2>开始订餐</h2>
        <img
          src="static\img\reorder-packing_zh.png"
          alt=""
          class="media-object"
        >

        <div class="media-body">
          <h3 class="media-heading">下次订餐更简单！</h3>
          <p>我们会保存您最近的5笔订单，因此您可以方便快捷的再次订餐！</p>
          <a class="action-link">
            &nbsp;开始订餐 </a>
        </div>
      </div>
      <div>
        <div class="da">
          <h2 style=" padding-bottom:30px;">快速订购超值套餐</h2>
          <div class="wai">
            <div v-for="(item,index) in 10">
              <el-row>
                <el-col>
                  <el-card :body-style="{ padding: '0px' }">
                    <img
                      src="static\img\900020.png"
                      class="image"
                    >
                    <div style="padding: 14px;">
                      <span>好吃的汉堡</span>
                      <div class="bottom clearfix">
                        <time class="time">哈哈哈</time>
                        <el-button
                          type="text"
                          class="button"
                        >操作按钮</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: [
        {
          // eslint-disable-next-line quotes
          src: "static\\img\\onelbt1.jpg"
        },
        {
          src: "static\\img\\onelbt3.jpg"
        },
        {
          src: "static\\img\\onelbt2.jpg"
        }
      ],ss:[]
    }
  },
    mounted: function (){
      let  that =this;
       this.$http.get('http://localhost:8101/dome/g?name=1&i=2', {//这里将axios.get 改为this.$axios.get
          })
          .then(resp=>{
           that.ss=resp;
           console.info(that.ss);
          }).catch(err => {
            console.log(err);
          })
    }
    
  
};
</script>

<style lang="stylus">
.el-carousel__container {
  width: 1140px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.q {
  border-radius: 10px 10px 10px 10px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-card__body {
  height: 246px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before, .clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.wai>div {
  box-sizing: border-box;
  width: 220px;
  height: 250px;
  border: 1px double red;
  margin-bottom: 20px;
}

.wai {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

img {
  vertical-align: top;
}

.da {
  margin: 40px 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 20px;
  text-align: left;
}

.media-body {
  display: inline-block;
}

.w {
  width: 1160px;
}

.media-body {
  vertical-align: top;
  color: #999;
}

a {
  color: red;
  font-size: 0.9375rem;
}
</style>
