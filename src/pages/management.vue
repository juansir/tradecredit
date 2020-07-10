<template>
    <div>
      <!--header-->
      <moreHeader></moreHeader>

      <div class="manageTable">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="company"
            label="公司名称"
            width="160">
          </el-table-column>
          <el-table-column
            prop="department"
            label="部门名称">
          </el-table-column>
          <el-table-column
            prop="code"
            label="工号">
          </el-table-column>
          <el-table-column
            prop="user"
            label="人员">
          </el-table-column>
          <el-table-column
            prop="state"
            label="人员状态">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="60">
          </el-table-column>
          <el-table-column
            prop="level"
            label="权限级别">
          </el-table-column>
          <el-table-column
            prop="ident"
            label="状态标识">
          </el-table-column>
          <el-table-column
            align="right" width="180">
            <template slot="header" slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEditAll(scope.$index, scope.row)">一键启用</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDeleteAll(scope.$index, scope.row)">一键停用</el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">点击启用</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">点击停用</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--公用底部-->
      <allFooter></allFooter>
    </div>
</template>

<script>
  import moreHeader from '@/components/moreHeader'
  import allFooter from '@/components/allFooter'
    export default {
      name: "management",
      components:{moreHeader,allFooter},
      data(){
        return{
          tableData: [{
            company:'浙江省中医药健康产业集团有限公司',
            department:'财务委派',
            code:'20101880',
            user:'张静',
            state:'入职',
            sex:'女',
            level:'',
            ident:'已停用',
          },{
            company:'浙江省中医药健康产业集团有限公司',
            department:'财务委派',
            code:'20101880',
            user:'张静',
            state:'入职',
            sex:'女',
            level:'',
            ident:'已停用',
          },{
            company:'浙江省中医药健康产业集团有限公司',
            department:'财务委派',
            code:'20101880',
            user:'张静',
            state:'入职',
            sex:'女',
            level:'',
            ident:'已停用',
          },],
          multipleSelection: []
        }
      },
      methods:{
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },

        /*列表操作*/
        handleEditAll(){},
        handleDeleteAll(){},
        handleEdit(){},
        handleDelete(){},
      }
    }
</script>

<style scoped>
  .manageTable{
    width: 1200px;
    margin: 20px auto;
  }
  >>>.el-table thead{
    color: #333;
  }
  >>>.el-table th{
    text-align: center;
    padding: 0;
    line-height: 50px;
  }
  >>>.el-table td{
    text-align: center;
    padding: 5px 0;
  }
  >>>.el-button--mini{
    padding: 5px 8px;
  }
</style>
