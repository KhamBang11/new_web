<template>

  <div class="bg___login">

    <div class="container p-5">
      <div class="row">
        <!-- <div class="col-sm-3"></div> -->
        <div class="col-sm-6 p-5">
          <div class="shadow-lg">

            <div class="card-body shadow">
              <center>
                <img src="../../public/dist/img/xing.png" width="75%" height="75%" alt="">
              </center>
             
              <div class="card p-5">
                <h2 class="text-center text-primary"><b>ເຂົ້າສູ່ລະບົບ</b></h2>
                <form @submit.prevent="HandleLogin">
                  <div class="input-group mb-3">
                    <input type="text" v-model="phone" class="form-control" placeholder="Tel">
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" v-model="password" class="form-control" placeholder="Password">
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-key"></span>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">ເຂົ້າສູ່ລະບົບ</button>
                </form>
              </div>


            </div>
            <!-- /.card-body -->
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  name: 'LoginComponents',
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    async HandleLogin() {
      try {
        const response = await axios.post('https://node-2i60.onrender.com/login', {
          phone: this.phone,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/dashboard');
        console.log("My login successfully");
        this.Showwelcome();
      } catch (error) {
        this.Showweloginerror();
        // this.ResetAdmin_from();
      }
    },

    //Well come alert
    async Showwelcome() {
      Swal.fire({
        title: "ສະບາຍດີ",
        text: "ຍິນດີຕ້ອນຮັບ",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    },

    //error come alert
    async Showweloginerror() {
      Swal.fire({
        title: "ເຂົ້າສູ່ລະບົບລົ້ມເຫຼວ",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }

    // async ResetAdminl_from() {
    //   this.phone = "",
    //     this.password = ""

    // }
  }
}
</script>
