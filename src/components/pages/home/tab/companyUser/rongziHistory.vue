<template>
  <div class="content">
    <div class="top">
      <Breadcrumb>
        <BreadcrumbItem>企业用户管理</BreadcrumbItem>
        <BreadcrumbItem>融资历史审核</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <Button type="primary">搜索</Button>
        <Input v-model="value" placeholder="请输入关键字搜索" style="width: 300px;margin-right: 5px"></Input>
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
          title: '企业全称',
          key: 'name'
        },
        {
          title: '本次提交融资历史',
          key: 'benCi'
        },
        {
          title: '上次审核融资历史',
          key: 'shangCi'
        },
        {
          title: '提交审核时间',
          key: 'time'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h,params) => {
            return h('div',[
              h('span',{
                style: {
                  color:'#57A3F3',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    console.log('审核');
                  }
                }
              },'审核'),
              h('span',{
                style: {
                  color:'#57A3F3',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    console.log('退回');
                  }
                }
              },'退回'),
            ])
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
} 
.top{
  text-align: left
}
.table{
  margin-top: 10px 
}
</style>
 