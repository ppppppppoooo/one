<template>
  <div id="cv">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    > <router-link to="/user">  
      <el-menu-item index="1">
         <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      </router-link>
     <router-link to='/order'>  
      <el-menu-item index="2">
         <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      </router-link>
   
      <el-menu-item index="3">
         <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
     
  <router-link to='/order'>  
      <el-menu-item index="4">
         <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      </router-link>
    </el-menu>
     <div id="five">
       <router-view></router-view>
     </div>
   </div>
</template>

<script>


export default {
  data (){
  return{
  isCollapse: true
  }
  },
  // eslint-disable-next-line space-before-function-paren
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
  
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
   
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#five{
  width: 900px;
  
}
#cv {
  text-align: center;
  width: 1160px;
  display: flex;
  justify-content: space-around;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
