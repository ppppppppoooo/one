<template>
  <div class="block">
    <el-carousel
      trigger="click"
      height="470px"
    >
      <el-carousel-item
        v-for="(item,i) in img"
        :key="i" class="q"
      >
        <h3 class="small">
            <img
            :src="item.src"
            alt=""
          ></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.el-carousel__container{
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
.q{

    border-radius:10px 10px 10px 10px;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script>
export default {
  data () {
    return {
      img: [
        {
          src: 'static\\img\\onelbt1.jpg'
        },
        {
          src: 'static\\img\\onelbt3.jpg'
        },
        {
          src: 'static\\img\\onelbt2.jpg'
        }
      ]
    }
  }
}
</script>
