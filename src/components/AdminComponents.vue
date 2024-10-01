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
                            <li class="breadcrumb-item"><router-link to="/Admin" class="text-bold text-dark"
                                    href="#">ຜູ້ນຳໃຊ້</router-link></li>

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
                    <div class="col-sm-5">
                        <div class="card shadow p-4">
                            <div class="shadow p-4">
                                <h1 class="text-center text-primary"><b>ເພີ່ມຜູ້ນຳໃຊ້</b></h1>
                            </div>
                            <div class="p-3">
                                <form action="" @submit.prevent="CreateAdmin" method="post">
                                    <div class="form-group">
                                        <label for="name">ຊື່ ເເລະ ນາມສະກຸນ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="username" class="form-control" id="">
                                    </div>
                                    <div class="form-group">
                                        <label for="tel">ເບີໂທລະສັບ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="phone" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="email">ອີເມລ <span class="text-danger">*</span></label>
                                        <input type="email" required v-model="email" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="password">ລະຫັດຜ່ານ <span class="text-danger">*</span></label>
                                        <input type="password" required v-model="password" class="form-control" id="">
                                    </div>

                                    <center>
                                        <button type="reset"
                                            class="btn btn-outline-danger rounded-pill w-50">ຍົກເລີກ</button>

                                        <button type="submit"
                                            class="btn btn-outline-primary rounded-pill w-50">ເພີ່ມ</button>
                                    </center>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-7">
                        <div class="card p-4 shadow">
                            <div class="shadow p-4 d-flex">
                                <span>
                                    <h3><b>ລາຍຊື່ຜູ້ນຳໃຊ້</b></h3>
                                </span>
                                <span class="ml-5">
                                    <div class="form-group float-end d-flex">
                                        <input type="search" required v-model="searchQuery" id="" class="form-control">
                                        <button @click="SearchAdmin" class="btn btn-sm btn-dark ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </span>

                            </div>
                            <div class="p-3 table-responsive">
                                <table class="table table-sm table-striped table-hover">
                                    <thead class="bg-dark text-white">
                                        <tr>
                                            <th>ລຳດັບ</th>
                                            <th>ຊື່ ເເລະ ນາມສະກຸນ</th>
                                            <th>ອີເມລ</th>
                                            <th>ເບີໂທລະສັບ</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            <th>ເເກ້ໄຂ</th>
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="admin in admins" :key="admin.id">
                                            <td>{{ admin.id }}</td>
                                            <td>{{ admin.username }}</td>
                                            <td>{{ admin.email }}</td>
                                            <td>{{ admin.phone }}</td>
                                            <td><span style="font-size: 8px;" class="text-success">{{ admin.created_at
                                                    }}</span></td>
                                            <td>{{ admin.updated_at }}</td>
                                            <td>
                                                <button @click="Showdatatoedit(admin.id)" data-toggle="modal"
                                                    data-target="#modal-primary" class="btn btn-outline-info"><i
                                                        class="fas fa-edit"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmDelete(admin.id)"
                                                    class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="modal-primary">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h1><b>ເເກ້ໄຂຂໍ້ມູນຜູ້ນຳໃຊ້</b></h1>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_data" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ຊື່ ເເລະ ນາມສະກຸນ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="updateusername" class="form-control" id="">
                                    </div>
                                    <div class="form-group">
                                        <label for="tel">ເບີໂທລະສັບ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="updatephone" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="email">ອີເມລ <span class="text-danger">*</span></label>
                                        <input type="email" required v-model="updateemail" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="password">ລະຫັດຜ່ານ <span class="text-danger">*</span></label>
                                        <input type="password" required v-model="updatepassword" class="form-control" id="">
                                    </div>

                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i> ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-outline-primary"><i class="fas fa-edit"></i>
                                        ເເກ້ໄຂ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->



                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import axios from 'axios';
// import sweetalert2 from'sweetalert2';
import HeaderC from './include/HeaderC.vue';
import SidebarC from './include/SidebarC.vue';
import Swal from 'sweetalert2';
export default {
    name: "AdminComponents",
    components: {
        HeaderC,
        SidebarC
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',
            phone: '',
            //======================
            updateusername: '',
            updateemail: '',
            updatepassword: '',
            updatephone: '',


            Admin_Id: null,
            admins: [],
            searchQuery: ''
        }
    }, created() {
        this.ShowAdmins();
    }, methods: {
        async ShowAdmins() {
            try {
                const respone = await axios.get('http://localhost:3000/api/select-admin');
                if (Array.isArray(respone.data)) {
                    this.admins = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('Admin error', error);
            }
        },
        async CreateAdmin() {
            try {
                if (this.username === "") {
                    alert("ຊື່ຜູ້ນຳໃຊ້ວ່າງເປົ່າ");
                } else {
                    const respone = await axios.post('http://localhost:3000/api/create-admin', {
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        phone: this.phone
                    });
                    console.log(respone.data);
                    this.ResetAdmin_from();
                    this.ShowAdmins();
                    Swal.fire({
                        title: 'ເພີ່ມຜູ້ນຳໃຊ້ສຳເລັດ',
                        icon: 'success',
                        timer: 1000,

                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });
                }

            } catch (error) {
                console.error('Create error', error);
                this.Showweloginerror();
            }
        },
        // function reset add user
        async ResetAdmin_from() {
            this.username = "",
                this.email = "",
                this.phone = "",
                this.password = ""

        },
        // function search

        // async SearchAdmin(){
        //     console.log('Search Admin', this.searchQuery);
        //     const params = new URLSearchParams();
        //     params.append('username',this.searchQuery,
        //     'email',this.searchQuery,
        //     'phone',this.searchQuery
        // );
        //     fetch(`http://localhost:3000/api/search-admin?${params.toString()}`)
        //     .then((respone)=>respone.json())
        //     .then((data)=>{
        //         this.admins=data;
        //     })
        //     .catch((error)=>{
        //         console.error('Search error',error);
        //     });
        // },

        async SearchAdmin() {
            const params = new URLSearchParams();
            params.append('username', this.searchQuery,
                'email', this.searchQuery,
                'phone', this.searchQuery
            );

            fetch(`http://localhost:3000/api/search-admin?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.admins = data;
                })
                .catch((error) => {
                    console.error('Search error', error);
                });
        },

        async ConfrmDelete(Admin_Id) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + Admin_Id + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteAdmin(Admin_Id);
                }
            });
        },
        async DeleteAdmin(Admin_Id) {
            try {
                const respone = await axios.delete(`http://localhost:3000/api/delete-admin/${Admin_Id}`);
                console.log(respone.data);
                Swal.fire({
                    title: 'ລົບສຳເລັດ',
                    icon: 'success',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.ShowAdmins();
                });
            } catch (error) {
                console.error('Delete error', error);
                Swal.fire({
                    title: 'ລົບບໍສຳເລັດ',
                    icon: 'error',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
            }
        },

        //function show data to edit

        async Showdatatoedit(Admin_Id) {
            this.Admin_Id = Admin_Id;
            try {
                const respone = await axios.get(`http://localhost:3000/api/select_id/${Admin_Id}`);
                this.updateusername = respone.data.username,
                    this.updateemail = respone.data.email,
                    this.updatepassword = "",
                    this.updatephone = respone.data.phone
            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data

        async Update_data() {
            try {
                const respone = await axios.put(`http://localhost:3000/api/update-user/${this.Admin_Id}`, {
                    username: this.updateusername,
                    email: this.updateemail,
                    password: this.updatepassword,
                    phone: this.updatephone,
                });
                console.log(respone.data);
                this.$router.push('/admin');
                this.ShowAdmins();
                Swal.fire({
                    title: 'ເເກ້ໄຂສຳເລັດ',
                    icon: 'success',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
                window.setTimeout(function () {
                    location.reload();
                }, 1000);
            } catch (error) {
                console.error(error.respone.data);
                alert('Update error', error);
            }
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

    }
}
</script>