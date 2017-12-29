<template>
    <div class="layout">
        <Row type="flex">
            <Col span="3" class="layout-menu-left">
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            基础资料
                        </template>
                        <router-link to="/home/companyInfo"><MenuItem name="1-1">行业信息管理</MenuItem></router-link>
                        <router-link to="/home/Investment"><MenuItem name="1-2">投资机构管理</MenuItem></router-link>
                        <router-link to="/home/homeSetting"><MenuItem name="1-3">首页设置管理</MenuItem></router-link>
                        <router-link to="/home/yueChaSetting"><MenuItem name="1-4">约茶设置管理</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            企业用户管理
                        </template>
                        <router-link to="/home/companyUser"><MenuItem name="2-1">企业用户查询</MenuItem></router-link>
                        <router-link to="/home/companyData"><MenuItem name="2-2">企业资料审核</MenuItem></router-link>
                        <router-link to="/home/companyRongZ"><MenuItem name="2-3">企业融资审核</MenuItem></router-link>
                        <router-link to="/home/rongziHistory"><MenuItem name="2-4">融资历史审核</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            投资人管理
                        </template>
                        <router-link to="/home/mechanism"><MenuItem name="3-1">投资机构管理</MenuItem></router-link>
                        <router-link to="/home/investor"><MenuItem name="3-2">投资人管理</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            消费管理    
                        </template>
                        <router-link to="/home/mechanism"><MenuItem name="4-1">消费记录查询</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            约茶管理
                        </template>
                        <router-link to="/home/companyInfo"><MenuItem name="5-1">约茶管理 1</MenuItem></router-link>
                        <router-link to="/home/companyInfo"><MenuItem name="5-2">约茶管理 2</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            商会管理
                        </template>
                        <router-link to="/home/CofCinfo"><MenuItem name="6-1">商会信息管理</MenuItem></router-link>
                        <router-link to="/home/CofCcompany"><MenuItem name="6-2">商会企业管理</MenuItem></router-link>
                        <router-link to="/home/CofCmoney"><MenuItem name="6-3">商会收益管理</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="7">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            系统管理
                        </template>
                        <router-link to="/home/message"><MenuItem name="7-1">消息推送列表</MenuItem></router-link>
                        <router-link to="/home/account"><MenuItem name="7-2">后台账户管理</MenuItem></router-link>
                        <router-link to="/home/operation"><MenuItem name="7-3">系统操作日志</MenuItem></router-link>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="21">
                <div class="layout-header">
                  <div>商会后台管理系统</div>
                  <div class="user-info">
                    <span class="el-dropdown-link">{{name}}</span>
                    <span @click="handleCommand" class="login-out">退出</span>
                  </div>        
                </div>
                <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>



<script>
export default {
  data(){
    return {
        spanLeft: 3,
        spanRight: 21,
        name: ''
    }
  },
  computed: {
    created() {
          let username = localStorage.getItem('ms_username');
          this.name = username;
          console.log(username)
          return username ? username : this.name;
      }
  },
  methods: {
    handleCommand() {
          // if (command == 'loginout') {
              localStorage.removeItem('ms_username')
              this.$router.push('/');
          // }
      },
    // toggleClick () {
    //     if (this.spanLeft === 5) {
    //         this.spanLeft = 2;
    //         this.spanRight = 22;
    //     } else {
    //         this.spanLeft = 5;
    //         this.spanRight = 19;
    //     }
    // }
  },
    computed: {
        // iconSize () {
        //     return this.spanLeft === 5 ? 14 : 24;
        // }
    },
}
</script>

<style scoped>
.layout{
  background: #f5f7f9;
  position: relative;
  height: 100%;
}
.layout-breadcrumb{
  padding: 10px 15px 0;
}
.layout-content{
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main{
  padding: 10px;
}
.layout-copy{
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left{
  background: #464c5b;
}
.layout-header{
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  display: flex
}
.layout-logo-left{
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.ivu-menu{
  background-color: #3F3F3F
}
a li{
  font-size: 12px;
  background: #3F3F3F!important
}

</style>