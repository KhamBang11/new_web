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
                            <li class="breadcrumb-item"><router-link to="/Dailiesdone" class="text-bold text-dark"
                                    href="#">ສຳເລັດເເລ້ວ</router-link></li>
                            <li class="breadcrumb-item"><router-link to="/Dailiesdoing" class="text-bold text-dark"
                                    href="#">ກຳລັງເຮັດ</router-link></li>
                                    <li class="breadcrumb-item"><router-link to="/Dailies" class="text-bold text-info"
                                        href="#">ປະຈຳວັນ</router-link></li>

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
                    <div class="col-sm-12">
                        <div class="card shadow-sm p-4">
                            <div class="row">
                                <div class="col-sm-10">
                                    <h2 class="text-info"><b>ຕາຕະລາງບັນທຶກປະຈຳວັນສຳເລັດເເລ້ວ</b></h2>
                                </div>


                                <div class="col-sm-2">
                                    <div class="form-group float-end d-flex">

                                     
                                        <input type="search" required v-model="searchQuery" placeholder="ວັນທິ" class="form-control" >
                                        <button @click="searchBtn" class="btn btn-sm btn-info ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="show">
                                <table class="table table-sm table-striped table-hover">
                                    <thead class="bg-dark text-white">
                                        <tr>
                                            <th>ລຳດັບ</th>
                                            <th>ຊື່</th>
                                            <th>ວັນທີ</th>
                                            <th>ຊົ່ວໂມງຫາຊົ່ວໂມງ</th>
                                            <th>ສະຖານະ</th>
                                            <th>ໝາຍເຫດ</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            <th>ກູ້ຄືນ</th>
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(dailie, num) in dailies" :key="dailie.id">
                                            <td>{{ num + 1 }}</td>
                                            <td>{{ dailie.dailies_name }}</td>
                                            <td>{{ dailie.dailies_date }}</td>
                                            <td style="font-size: 8px;">{{ dailie.dailies_stime }} ຫາ {{
                                                dailie.dailies_etime }}</td>
                                            <td v-if="dailie.dailies_status === '0'" style="font-size: 8px;"><span
                                                    class="text-danger">ກຳລັງ</span></td>
                                            <td v-else><span class="text-success" style="font-size: 8px;">ສຳເລັດ</span>
                                            </td>
                                            <td>{{ dailie.remark }}</td>

                                            <td style="font-size: 8px;">{{ dailie.create_at }}</td>
                                            <td style="font-size: 8px;">{{ dailie.update_at }}</td>
                                            <td>
                                                <button @click="ConfrmRecover(dailie.id)"
                                                    class="btn btn-outline-info"><i class="fas fa-arrow-left"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmDelete(dailie.id)"
                                                    class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>





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
    name: "DailiesComponents_recover",
    components: {
        HeaderC,
        SidebarC
    },
    props: {
        dailie: Object
    },
    computed: {
        statusClass() {
            return this.dailie.status === 0 ? 'text-danger' : 'text-success';
        }, statusText() {
            return this.dailie.status === 0 ? 'not' : 'not-success';
        }
    },
    data() {
        return {
            // dailies_name: '',
            // dailies_date: '',
            // dailies_stime: '',
            // dailies_etime: '',
            // remark: '',
            //======================
            // updatedailies_name: '',
            // updatedailies_date: '',
            // updatedailies_stime: '',
            // updatedailies_etime: '',
            // updatedailies_status: '',
            // updateremark: '',


            dailies_Id: null,
            dailies: [],
            searchQuery: ''
        }
    }, created() {
        this.Showdailies();
    }, methods: {
        async Showdailies() {
            try {
                const respone = await axios.get('http://localhost:3000/api/select-dailie_recover');
                if (Array.isArray(respone.data)) {
                    this.dailies = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('dailie error', error);
            }
        },
        // async Createdailie() {
        //     try {
        //         if (this.dailies_name === "") {
        //             alert("ຊື່ເເຜນການວ່າງເປົ່າ");
        //         } else {
        //             const respone = await axios.post('http://localhost:3000/api/create-dailie', {
        //                 dailies_name: this.dailies_name,
        //                 dailies_date: this.dailies_date,
        //                 dailies_stime: this.dailies_stime,
        //                 dailies_etime: this.dailies_etime,
        //                 remark: this.remark,
        //             });
        //             console.log(respone.data);
        //             this.Resetdailie_from();
        //             this.Showdailies();
        //             Swal.fire({
        //                 title: 'ເພີ່ມສຳເລັດ',
        //                 icon: 'success',
        //                 timer: 1000,

        //                 didOpen: () => {
        //                     Swal.showLoading();
        //                 }
        //             });
        //         }

        //     } catch (error) {
        //         console.error('Create error', error);
        //         this.Showweloginerror();
        //     }
        // },
        // function reset add user
        // async Resetdailie_from() {
        //     this.name = "",
        //         this.percent = ""

        // },
        // function search

        // async Searchdailie(){
        //     console.log('Search dailie', this.searchQuery);
        //     const params = new URLSearchParams();
        //     params.append('username',this.searchQuery,
        //     'email',this.searchQuery,
        //     'phone',this.searchQuery
        // );
        //     fetch(`http://localhost:3000/api/search-dailie?${params.toString()}`)
        //     .then((respone)=>respone.json())
        //     .then((data)=>{
        //         this.dailies=data;
        //     })
        //     .catch((error)=>{
        //         console.error('Search error',error);
        //     });
        // },

        async searchBtn() {
            const params = new URLSearchParams();
            params.append('dailies_date', this.searchQuery);

            fetch(`http://localhost:3000/api/search-dailie_recover?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.dailies = data;
                })
                .catch((error) => {
                    console.error('Search error', error);
                });
        },

        async ConfrmRecover(dailies_Id) {
            Swal.fire({
                title: 'ຕ້ອງການກູ້ຄືນເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈກູ້ຄືນ' + dailies_Id + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.recoverdailies(dailies_Id);
                }
            });
        },
        async recoverdailies(dailies_Id) {
            try {
                const respone = await axios.delete(`http://localhost:3000/api/delete-dailie_recover/${dailies_Id}`);
                console.log(respone.data);
                Swal.fire({
                    title: 'ກູ້ຄືນສຳເລັດ',
                    icon: 'success',
                    timer: 800,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.Showdailies();
                });
            } catch (error) {
                console.error('Recover error', error);
                Swal.fire({
                    title: 'ກູ້ຄືນບໍສຳເລັດ',
                    icon: 'error',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
            }
        },


        async ConfrmDelete(dailies_Id) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + dailies_Id + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.Deletedailie(dailies_Id);
                }
            });
        },
        async Deletedailie(dailies_Id) {
            try {
                const respone = await axios.delete(`http://localhost:3000/api/delete-dailie_really/${dailies_Id}`);
                console.log(respone.data);
                Swal.fire({
                    title: 'ລົບສຳເລັດ',
                    icon: 'success',
                    timer: 800,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.Showdailies();
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