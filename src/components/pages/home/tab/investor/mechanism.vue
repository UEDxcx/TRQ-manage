<template>
  <div class="content">
    <div class="top">
      <Breadcrumb>
        <BreadcrumbItem>投资人管理</BreadcrumbItem>
        <BreadcrumbItem>投机构管理</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <Button type="primary">导入</Button>
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
          title: 'Logo',
          key: 'logo'
        },
        {
          title: '机构全称',
          key: 'name'
        },
        {
          title: '机构简称',
          key: 'jianname'
        },
        {
          title: '机构规模',
          key: 'guiMo'
        },
        {
          title: '官网',
          key: 'web'
        },
        {
          title: '偏好行业',
          key: 'pianHao'
        },
        {
          title: '投资阶段',
          key: 'touZi'
        },
        {
          title: '投资期限',
          key: 'qiXian'
        },
        {
          title: '机构简介',
          key: 'jianJie',
          render: (h,params) => {
            return h('span',{
              style: {
                color:'#57A3F3',
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  console.log('查看');
                  // this.isShow = true;
                }
              }
            },'查看')
          }
        },
        {
          title: '审核状态',
          key: 'zhuangTai'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h,params) => {
            return h('div',[
              h('Button',{
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  color:'#fff',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    console.log('审核');
                  }
                }
              },'审核'),
              h('Button',{
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  color:'#fff',
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
 