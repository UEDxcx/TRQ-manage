<template>
  <div class="content">
    <div class="top">
      <Breadcrumb>
        <BreadcrumbItem>企业用户管理</BreadcrumbItem>
        <BreadcrumbItem>企业用户查询</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <Input v-model="value" placeholder="请输入关键字搜索" style="width: 300px;margin-right: 5px"></Input>
        <Button type="primary">搜索</Button>
      </div>
    </div>
    <div class="table">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>

  </div>
</template>

<script>
// import modal from '../../../component/modal.vue';
export default {
  data() {
    return {
      value: '',
      isShow: false,
      columns1: [
        {
          title: '序号',
          key: 'idx'
        },
        {
          title: 'Logo',
          key: 'logo'
        },
        {
          title: '企业全称',
          key: 'name'
        },
        {
          title: '成立时间',
          key: 'time'
        },
        {
          title: '所在区域',
          key: 'region'
        },
        {
          title: '所属商会',
          key: 'CofC'
        },
        {
          title: '企业成员',
          key: 'member'
        },
        // {
        //   title: '当前融资阶段',
        //   key: 'moneyStage'
        // },
        {
          title: '融资需求',
          key: 'business',
          align: 'center',
          render: (h,params) => {
            if(2>3){
            return h('span',{
              style: {
                color:'#57A3F3',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  console.log('附件');
                  this.isShow = true;
                }
              }
            },'附件')
            }else{
              return h('span',{
                style: {
                  color:'#57A3F3',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    console.log('附件');
                    this.isShow = true;
                  }
                }
            },'无')
            }
            }


          
        },
        // {
        //   title: '是否会员',
        //   key: 'VIP'
        // },
        {
          title: '约茶次数',
          key: 'num'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h,params) => {
            return h('span',{
              style: {
                color:'#57A3F3',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  console.log('操作');
                  // this.isShow = true;
                }
              }
          },'操作')
          }
        },
      ],
      data1: [
        {
          idx: '1',
          logo: '',
          name: '中科视拓科技有限公司',
          time: '2016',
          moneyStage: 'Z轮',
          VIP: '是',
          num: '6',
          money: '1999',
          business: '有'
        },
        {
          idx: '2',
          logo: '',
          name: '中科视拓科技有限公司',
          time: '2016',
          moneyStage: 'B轮',
          VIP: '否',
          num: '6',
          money: '5000',
          business: '无'
        },
        {
          idx: '3',
          logo: '',
          name: '中科视拓科技有限公司',
          time: '2016',
          moneyStage: 'A轮',
          VIP: '是',
          num: '6',
          money: '1999',
          business: '有'
        },
        {
          idx: '4',
          logo: '',
          name: 'DCG',
          time: '2016',
          moneyStage: 'B轮',
          VIP: '否',
          num: '6',
          money: '2000',
          business: '无'
        }
      ]
    }
  },
  components: {
    // modal,
  },
  methods: {
    // close() {
    //   if(this.isShow == false){
    //     this.isShow = true;
    //     console.log('sd')
    //   }

    // }
  }
}
</script>
<style scoped>
.content{
  padding: 15px 10px;
  box-sizing: border-box;
  text-align: left
} 
.top{
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.table{
  margin-top: 10px 
}
</style>
 