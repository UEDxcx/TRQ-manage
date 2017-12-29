<template>
  <div class="content">
    <div class="top">
      <Breadcrumb>
        <BreadcrumbItem>企业用户管理</BreadcrumbItem>
        <BreadcrumbItem>企业融资审核</BreadcrumbItem>
      </Breadcrumb>
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
          title: '公司全称',
          key: 'name'
        },
        {
          title: '行业类型',
          key: 'hangYe'
        },
        {
          title: '项目简况',
          key: 'jianKuang'
        },
        {
          title: '近两年年份、营业收入、净利润',
          key: 'liRun'
        },
        {
          title: '资本规划',
          key: 'guiHua'
        },
        {
          title: '融资类型',
          key: 'leiXing'
        },
        {
          title: '指定机构',
          key: 'jiGou'
        },
        {
          title: '期望时间',
          key: 'qiWang'
        },
        {
          title: '融资金额',
          key: 'jinE'
        },
        {
          title: '是否并购',
          key: 'bingGou',
          align: 'center',
        },
        {
          title: '营业执照',
          key: 'businessLicense',
          align: 'center',
          render: (h,params) => {
            return h('span',{
              style: {
                color:'#57A3F3',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  console.log('商业计划书');
                  // this.isShow = true;
                }
              }
            },'附件')
          }
        },
        {
          title: '其他需求项',
          key: 'qiTa',

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
 