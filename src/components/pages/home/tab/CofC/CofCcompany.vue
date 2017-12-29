<template>
  <div class="content">
    <div class="top">
      <Breadcrumb>
        <BreadcrumbItem>商会管理</BreadcrumbItem>
        <BreadcrumbItem>商会企业管理</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <Button type="primary" size="small">新增</Button>
        <Button type="primary" size="small">导入</Button>
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
          title: '企业名称',
          key: 'name'
        },
        {
          title: '成立时间',
          key: 'time'
        },
        {
          title: '当前融资阶段',
          key: 'dangQian'
        },
        {
          title: '融资需求',
          key: 'xuQiu'
        },
        {
          title: '是否会员',
          key: 'VIP'
        },
        {
          title: '会员时间',
          key: 'VIPtime',
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
                    console.log('编辑');
                  }
                }
              },'编辑'),
              h('span',{
                style: {
                  color:'#57A3F3',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    console.log('删除');
                  }
                }
              },'删除'),
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
  text-align: left;
  display: flex;

}
.table{
  margin-top: 10px 
}
</style>
 