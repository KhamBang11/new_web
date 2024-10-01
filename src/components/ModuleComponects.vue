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
                            <li class="breadcrumb-item"><router-link to="/Module" class="text-bold text-success"
                                    href="#">ເນື້ອຫາ</router-link></li>

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
                                <h1 class="text-center text-success"><b>ເພີ່ມເນື້ອຫາ</b></h1>
                            </div>
                            <div class="p-3">
                                <form action="" @submit.prevent="CreateAdmin" method="post">
                                    <div class="form-group">
                                        <label for="name">ຊື່ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="modulename" class="form-control" id="">
                                    </div>
                                    
                                    <center>
                                        <button type="reset"
                                            class="btn btn-outline-danger rounded-pill w-50">ຍົກເລີກ</button>

                                        <button type="submit"
                                            class="btn btn-outline-success rounded-pill w-50">ເພີ່ມ</button>
                                    </center>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-7">
                        <div class="card p-4 shadow">
                            <div class="shadow p-4 d-flex">
                                <span>
                                    <h3><b>ລາຍຊື່ເນື້ອຫາ</b></h3>
                                </span>
                                <span class="ml-5">
                                    <div class="form-group float-end d-flex">
                                        <input type="search" required v-model="searchQuery" id="" class="form-control">
                                        <button @click="SearchAdmin" class="btn btn-sm btn-success ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </span>

                            </div>
                            <div class="p-4 text-danger text-center text-bold mt-5" v-if="none_data"><h3>ບໍ່ພົບຂໍ້ມູນໃດໆ</h3></div>
                            <div v-else class="p-3 table-responsive">
                                <table class="table table-sm table-striped table-hover">
                                    <thead class="bg-success text-white">
                                        <tr>
                                            <th>ລຳດັບ</th>
                                            <th>ຊື່</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            <th>ເເກ້ໄຂ</th>
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="module in modules" :key="module.id">
                                            <td>{{ module.id }}</td>
                                            <td>{{ module.module_name }}</td>
                                            <td><span style="font-size: 8px;" class="text-success">{{ module.create_at
                                                    }}</span></td>
                                            <td><span style="font-size: 8px;" class="text-danger">{{ module.update_at
                                                    }}</span></td>
                                            <td>
                                                <button @click="Showdatatoedit(module.id)" data-toggle="modal"
                                                    data-target="#modal-success" class="btn btn-outline-info"><i
                                                        class="fas fa-edit"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmDelete(module.id)"
                                                    class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="modal-success">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h1><b>ເເກ້ໄຂຂໍ້ມູນເນື້ອຫາ</b></h1>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_data" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ຊື່ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="updatemodulename" class="form-control" id="">
                                    </div>
                                  

                                 

                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i> ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-outline-success"><i class="fas fa-edit"></i>
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
    name: "ModuleComponects",
    components: {
        HeaderC,
        SidebarC
    },
    data() {
        return {
            modulename: '',
            //======================
            updatemodulename: '',
            Module_ID: null,
            modules: [],
            searchQuery: '',
            none_data: false
        }
    }, created() {
        this.Showmodules();
    }, methods: {
        async Showmodules() {
            try {
                const respone = await axios.get('http://localhost:3000/api/select-module');
                if (Array.isArray(respone.data)) {
                    this.modules = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('Admin error', error);
            }
        },
        async CreateAdmin() {
            try {
                if (this.modulename === "") {
                    alert("ຊື່ເນື້ອຫາວ່າງເປົ່າ");
                } else {
                    const respone = await axios.post('http://localhost:3000/api/create-module', {
                        module_name: this.modulename
                    });
                    console.log(respone.data);
                    this.ResetAdmin_from();
                    this.Showmodules();
                    Swal.fire({
                        title: 'ເພີ່ມເນື້ອຫາສຳເລັດ',
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
            this.modulename = ""
        },
        // function search

        // async SearchAdmin(){
        //     console.log('Search Admin', this.searchQuery);
        //     const params = new URLSearchParams();
        //     params.append('modulename',this.searchQuery,
        //     'email',this.searchQuery,
        //     'phone',this.searchQuery
        // );
        //     fetch(`http://localhost:3000/api/search-admin?${params.toString()}`)
        //     .then((respone)=>respone.json())
        //     .then((data)=>{
        //         this.modules=data;
        //     })
        //     .catch((error)=>{
        //         console.error('Search error',error);
        //     });
        // },

        async SearchAdmin() {
            const params = new URLSearchParams();
            params.append('module_name', this.searchQuery);

            fetch(`http://localhost:3000/api/search-module?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.modules = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },

        /////////============== delete
        async ConfrmDelete(Module_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + Module_ID + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteAdmin(Module_ID);
                }
            });
        },
        async DeleteAdmin(Module_ID) {
            try {
                const respone = await axios.delete(`http://localhost:3000/api/delete-module/${Module_ID}`);
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
                    this.Showmodules();
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

        async Showdatatoedit(Module_ID) {
            this.Module_ID = Module_ID;
            try {
                const respone = await axios.get(`http://localhost:3000/api/select_moduleid/${Module_ID}`);
                this.updatemodulename = respone.data.module_name
                   
            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data

        async Update_data() {
            try {
                const respone = await axios.put(`http://localhost:3000/api/update-module/${this.Module_ID}`, {
                    module_name: this.updatemodulename,
                  
                });
                console.log(respone.data);
                this.$router.push('/Module');
                this.Showmodules();
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