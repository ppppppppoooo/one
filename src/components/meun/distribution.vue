<template>
  <div id="qd">
    <p class="gb"></p>
    <div class="diz">
      <p>请选择送餐地址</p>
      <p>
        <el-input
          placeholder="请输入内容"
          v-model="input"
          :disabled="true"
        >
        </el-input>
      </p>
      <el-dialog
        title="收货地址"
        :visible.sync="dialogTableVisible"
      >
        <el-table :data="gridData">
          <el-table-column
            property="date"
            label="日期"
            width="150"
          ></el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="200"
          ></el-table-column>
          <el-table-column
            property="address"
            label="地址"
          ></el-table-column>
        </el-table>
      </el-dialog>
      <p>
        <el-link type="primary">添加送餐地址</el-link> <el-link type="primary" @click.native="dialogTableVisible=true">选择其他地址</el-link>
      </p>
      <p>预计送餐时间会在订单确认后30分钟内送达</p>
    </div>
    <div class="rqsj">
      <p>请选择送餐日期和时间</p>
      <div class="dc">
        <template>
          <p>
            <el-radio
              v-model="radio"
              label="1"
            >立即订餐</el-radio>
          </p>
          <p>
            <el-radio
              v-model="radio"
              label="2"
            >预约订餐（至少提前一小时预约）</el-radio>
          </p>
        </template>
      </div>

      <div class="rq">
        <div class="rqz">日期：</div>
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>

        <div class="sjz">时间：</div>
        <div>
          <el-time-picker
            v-model="value1"
            :picker-options="{
							selectableRange: '00:00:00 - 23:59:59'
							}"
            placeholder="任意时间点"
          >
          </el-time-picker>
        </div>

      </div>

    </div>
    <div class="we">
      <p>任何提前99.999天的预约订单，请致电麦乐送 4008-517-517.</p>
      <p>预约订餐-任何提前7天的预约订单，请致电麦乐送4008-517-517.</p>
      <p>天气原因-送餐时间会受您所在地区的天气影响。</p>
      <p>Law and order- In the event of any unforeseen law and order situation, McDonald's will not be heldliable in case of non-delivery of your order.</p>
      <p>Natural disaster - In the event of any unforeseen natura/ calamity McDonald's will nol be held liablein case of non- delivery of your order.</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value1: new Date(2016, 9, 10, 18, 40),
      radio: true,
      input :'',
      gridData:[{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #e6e6e6;
}
#qd {
  text-align: left;
  width: 700px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #717578;
  background-color: white;
}
#qd div {
  margin-right: 15px;
  margin-left: 15px;
}
.gb {
  font-size: 30px;
  text-align: right;
  padding: 10px;
}
.diz {
  border-bottom: 1px solid #999999;
}
.diz p {
  padding-bottom: 15px;
}
.diz p:nth-child(1) {
  font-size: 18px;
}
.diz p:nth-child(2) {
  padding-bottom: 0px;
  padding-right: 15px;
}
.diz p:nth-child(3) {
  padding-left: 15px;
  padding-top: 5px;
  font-size: 14px;
}
.diz p:nth-child(4) {
  font-size: 15px;
  padding-top: 15px;
  color: #999999;
}

.rqsj p {
  padding-bottom: 15px;
}
.rqsj .dc p:nth-child(1) {
  padding-bottom: 5px;
}
.rq div {
  padding-bottom: 5px;
}
.rqz,
.sjz {
  padding-left: 15px;
}
.qr {
  padding: 15px 0px 10px 0px;
}
.qr input {
  width: 15%;
  height: 40px;
  font-size: 18px;
  color: white;
  background-color: #e71b23;
  border: 1px solid #e71b23;
  border-radius: 5px;
  outline: none;
}
.we {
  padding: 20px 0px 30px 15px;
  color: #999999;
}
.we p {
  padding-top: 5px;
  font-style: italic;
}
</style>
