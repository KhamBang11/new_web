<template>

  <HeaderC />
  <SidebarC />


  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"><b>ຍິນດີຕ້ອນຮັບ</b></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/Dashboard" class="text-bold text-dark"
                  href="#">ໜ້າລາຍງານ</router-link></li>

            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>{{ sum_income }} ກີບ</h3>

                <p>ລາຍຮັບທັງໝົດ</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <router-link to="/Income" href="#" class="small-box-footer">ເພີ່ມເຕີມ<i
                  class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>{{ sum_expense }} ກີບ</h3>

                <p>ລາຍຈ່າຍທັງໝົດ</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <router-link to="/Income" href="#" class="small-box-footer">ເພີ່ມເຕີມ<i
                  class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ sum_income_today }} ກີບ</h3>

                <p>ລາຍຮັບມື້ນີ້</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <router-link to="/Income" href="#" class="small-box-footer">ເພີ່ມເຕີມ<i
                  class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>{{ sumexpense_today }} ກີບ</h3>

                <p>ລາຍຈ່າຍມື້ນີ້</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <router-link to="/Income" href="#" class="small-box-footer">ເພີ່ມເຕີມ<i
                  class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
        </div>


        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-warning elevation-1"><span class="text-white">₭</span></span>

              <div class="info-box-content">
                <span class="info-box-text">ເງີນທີຍັງເຫຼືອງ</span>
                <span class="info-box-number">
                  10
                  <!-- <small>%</small> -->
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-primary elevation-1"><i class="fas fa-book-open"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ເເຜນການທັງໝົດ</span>
                <span class="info-box-number">41,410</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->

          <!-- fix for small devices only -->
          <div class="clearfix hidden-md-up"></div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-success elevation-1"><i class="fas fa-thumbs-up"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ເເຜນການສຳເລັດ</span>
                <span class="info-box-number">760</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-warning elevation-1"><i class="fas text-white fa-thumbs-down"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ເເຜນການຍັງບໍ່ສຳເລັດ</span>
                <span class="info-box-number">2,000</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import HeaderC from './include/HeaderC.vue';
import SidebarC from './include/SidebarC.vue';
import axios from 'axios';
export default {
  name: "DashboardComponents",
  components: {
    HeaderC,
    SidebarC
  },
  data() {
    return {
      sum_income: 0,
      sum_income_today: 0,
      sum_expense: 0,
      sumexpense_today:0,
    }
  }, created() {
    this.Sumincome();
    this.Sumincome_today();
    this.Sumexpense();
    this.Sumexpense_today();
  },
  
  methods:{
    async Sumincome() {
      await axios.get('https://node-2i60.onrender.com/api/select-sumincome').then(respone => {
        this.sum_income = respone.data.sum_income;
      }).catch(error => {
        console.log("errro", error);
      });

    },
    async Sumincome_today() {
      await axios.get('https://node-2i60.onrender.com/api/select-sumincome_today').then(respone => {
        this.sum_income_today = respone.data.sum_income;
      }).catch(error => {
        console.log("errro", error);
      });

    },async Sumexpense() {
      await axios.get('https://node-2i60.onrender.com/api/select-sumexpense').then(respone => {
        this.sum_expense = respone.data.sum_expense;
      }).catch(error => {
        console.log("errro", error);
      });

    },

    async Sumexpense_today() {
      await axios.get('https://node-2i60.onrender.com/api/select-sumexpense_today').then(respone => {
        this.sumexpense_today = respone.data.sum_expense;
      }).catch(error => {
        console.log("errro", error);
      });

    },
  }
}
</script>