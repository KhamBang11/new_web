<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
        style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>



      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item">
            <router-link to="/Dashboard" href="#" class="nav-link active">
              <i class="nav-icon fas fa-th"></i>
              <p class="text-bold">
                ໜ້າຫຼັກ
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Admin" href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                ຜູ້ນຳໃຊ້
                <span class="right badge badge-danger">New</span>
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Module" href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                ພາກສວ່ນ
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Note" href="#" class="nav-link">
              <i class="nav-icon fas fa-book-open"></i>
              <p>
                ເນື້ອຫາ
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Income" href="#" class="nav-link">
              <i class="nav-icon fas fa-book-open"></i>
              <p>
                ລາຍຮັບ-ລາຍຈ່າຍ
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file"></i>
              <p>
                ເພີ່ມເຕີມ
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/Plan" href="#" class="nav-link">
                  <i class="nav-icon fas fa-book-open"></i>
                  <p>
                    ເເຜນການ
                  </p>
                </router-link>
                <router-link to="/Dailies" href="#" class="nav-link">
                  <i class="nav-icon fas fa-pen"></i>
                  <p>
                    ບັນທຶກປະຈຳວັນ
                  </p>
                </router-link>
                <router-link to="/SchoolTable" href="#" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    ເເຜນຮຽນ
                  </p>
                </router-link>
              </li>

            </ul>
          </li>
          <li class="nav-item">
            <a href="#" @click="ConfrmDelete" class="nav-link">
              <i class="nav-icon text-danger fas fa-power-off"></i>
              <p>
                ອອກຈາກລະບົບ
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import Swal from 'sweetalert2';
export default {
  name: "SidebarC",
  methods:{
    async ConfrmDelete() {
            Swal.fire({
                title: 'ຕ້ອງການອອກຈາກລະບົບເເທ້ບໍ?',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.HandleLogout();
                }
            });
        },

        async HandleLogout(){
          localStorage.removeItem('token');
          this.$router.push('/');
          this.showAlertsuccess();
        },
        

        async showAlertsuccess(){
          Swal.fire({
                    title: 'ອອກຈາກລະບົບເເລ້ວ',
                    icon: 'success',
                    timer: 800,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                })
        }

  }
}
</script>