    <template >
<div> 
   <template id="qwe">
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: "
    >
      <el-table-column
        prop="date"
        label="名字"
        width="90"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="电话"
        width="140"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="240"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
      >

        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type="primary"
      icon="el-icon-edit"
    >添加新地址</el-button>

  </template></div>
</template>
<script>
export default {
  data () {
    return {
      
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "13974121147",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ]
    };
  },
  methods: {
       formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button.el-button.el-button--primary {
margin-top:25px;
}
th.el-table_1_column_3.is-leaf {
  text-align: center;
}
#qwe {
  border-radius: 10px;
}
.el-table {
  position: relative;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  max-width: 800px;
  font-size: 14px;
  color: #606266;
}
</style>
