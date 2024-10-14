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
                    <div class="col-sm-12">
                        <div class="card shadow-sm p-4">
                            <div class="row">
                                <div class="col-sm-4">
                                    <button class="btn btn-outline-info" data-toggle="modal"
                                        data-target="#modal-income"><i class="fas fa-plus-circle"></i> ເພີ່ມ </button>
                                </div>
                                <div class="col-sm-4">
                                    <h2 class="text-center text-info"><b>ຕາຕະລາງຮຽນ</b></h2>
                                </div>

                                <div class="col-sm-2"></div>

                                <div class="col-sm-2">
                                    <div class="form-group float-end d-flex">
                                           
                                                <select required v-model="searchQuery" class="form-control" id="">
                                                    <option value=""></option>
                                                    <option value="ຈັນ">ຈັນ</option>
                                                    <option value="ຄານ">ຄານ</option>
                                                    <option value="ພຸດ">ພຸດ</option>
                                                    <option value="ພະຫັດ">ພະຫັດ</option>
                                                    <option value="ສຸກ">ສຸກ</option>


                                                </select>
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
                                            <th>ຊົ່ວໂມງທີ່1</th>
                                            <th>ຊົ່ວໂມງທີ່2</th>
                                            <th>ຊົ່ວໂມງທີ່3</th>
                                            <th>ຊົ່ວໂມງທີ່4</th>
                                            <th>ວັນ</th>
                                            <th>ວັນທີ່ເລີ່ມຫາວັນທີ່ສິ່ນສຸດ</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            <th>ເເກ້ໄຂ</th>
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(school, num) in schools" :key="school.id">
                                            <td>{{ num + 1 }}</td>
                                            <td>{{ school.time_one }}</td>
                                            <td>{{ school.time_two }}</td>
                                            <td>{{ school.time_three }}</td>
                                            <td>{{ school.time_four }}</td>
                                            <td>{{ school.day }}</td>
                                            <td style="font-size: 8px;">{{ school.sdate }} ຫາ {{ school.edate }}</td>
                                            <td style="font-size: 8px;">{{ school.create_at }}</td>
                                            <td style="font-size: 8px;">{{ school.update_at }}</td>
                                            <td>
                                                <button @click="Showdatatoedit(school.id)" data-toggle="modal"
                                                    data-target="#modal-update" class="btn btn-outline-info"><i
                                                        class="fas fa-edit"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmDelete(school.id)"
                                                    class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- ====================== -->


                <div class="modal fade" id="modal-income">
                    <div class="modal-dialog  modal-lg modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h2><b>ເພີ່ມຕາຕະລາງຮຽນ</b></h2>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="CreateSchooltable" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່1<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="time_one" class="form-control"
                                                    id="">
                                            </div>


                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່2<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="time_two" class="form-control"
                                                    id="">
                                            </div>

                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່3<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="time_three" class="form-control"
                                                    id="">
                                            </div>

                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່4<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="time_four" class="form-control"
                                                    id="">
                                            </div>

                                        </div>


                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="tel">ວັນ <span class="text-danger">*</span></label>
                                                <select v-model="day" class="form-control" id="">
                                                    <option value=""></option>
                                                    <option value="ຈັນ">ຈັນ</option>
                                                    <option value="ຄານ">ຄານ</option>
                                                    <option value="ພຸດ">ພຸດ</option>
                                                    <option value="ພະຫັດ">ພະຫັດ</option>
                                                    <option value="ສຸກ">ສຸກ</option>


                                                </select>
                                            </div>

                                        </div>


                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ວັນທີເລີ່ມ<span class="text-danger">*</span></label>
                                                <input type="date" required v-model="sdate" class="form-control" id="">
                                            </div>

                                        </div>

                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ວັນທີສີ່ນສຸດ<span class="text-danger">*</span></label>
                                                <input type="date" required v-model="edate" class="form-control" id="">
                                            </div>

                                        </div>

                                    </div>



                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i> ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-outline-primary"><i
                                            class="fas fa-plus-circle"></i>
                                        ເພີ່ມ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->


                <!-- ====================== -->


                <div class="modal fade" id="modal-update">
                    <div class="modal-dialog  modal-lg modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h2><b>ເເກ້ໄຂຕາຕະລາງຮຽນ</b></h2>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_data" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່1<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="updatetime_one"
                                                    class="form-control" id="">
                                            </div>


                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່2<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="updatetime_two"
                                                    class="form-control" id="">
                                            </div>

                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່3<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="updatetime_three"
                                                    class="form-control" id="">
                                            </div>

                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ຊົ່ວໂມງທີ່4<span class="text-danger">*</span></label>
                                                <input type="text" required v-model="updatetime_four"
                                                    class="form-control" id="">
                                            </div>

                                        </div>


                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="tel">ວັນ <span class="text-danger">*</span></label>
                                                <select v-model="updateday" class="form-control" id="">
                                                    <option :value="updateday">{{ updateday }}</option>
                                                    <option value="ຈັນ">ຈັນ</option>
                                                    <option value="ຄານ">ຄານ</option>
                                                    <option value="ພຸດ">ພຸດ</option>
                                                    <option value="ພະຫັດ">ພະຫັດ</option>
                                                    <option value="ສຸກ">ສຸກ</option>


                                                </select>
                                            </div>

                                        </div>


                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ວັນທີເລີ່ມ<span class="text-danger">*</span></label>
                                                <input type="date" required v-model="updatesdate" class="form-control"
                                                    id="">
                                            </div>

                                        </div>

                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="name">ວັນທີສີ່ນສຸດ<span class="text-danger">*</span></label>
                                                <input type="date" required v-model="updateedate" class="form-control"
                                                    id="">
                                            </div>

                                        </div>

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
    name: "SchoolTableComponents",
    components: {
        HeaderC,
        SidebarC
    },
    data() {
        return {
            time_one: '',
            time_two: '',
            time_three: '',
            time_four: '',
            day: '',
            sdate: '',
            edate: '',

            //======================
            updatetime_one: '',
            updatetime_two: '',
            updatetime_three: '',
            updatetime_four: '',
            updateday: '',
            updatesdate: '',
            updateedate: '',

            //=========
            school_ID: null,
            schools: [],

            searchQuery: '',
            none_data: false
        }
    }, created() {
        this.Showschools();
    }, methods: {
        async Showschools() {
            try {
                const respone = await axios.get('https://node-2i60.onrender.com/api/select-schooltable');
                if (Array.isArray(respone.data)) {
                    this.schools = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('Admin error', error);
            }
        },
        async CreateSchooltable() {
            try {
                if (this.day === "") {
                    alert("ວັນຫຍັງເນາະ");
                } else {
                    const respone = await axios.post('https://node-2i60.onrender.com/api/create-schooltable', {
                        time_one: this.time_one,
                        time_two: this.time_two,
                        time_three: this.time_three,
                        time_four: this.time_four,
                        day: this.day,
                        sdate: this.sdate,
                        edate: this.edate
                    });
                    console.log(respone.data);
                    this.ResetAdmin_from();
                    this.Showschools();
                    Swal.fire({
                        title: 'ເພີ່ມສຳເລັດ',
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
            this.schoolname = ""
        },
        // function search

        // async SearchAdmin(){
        //     console.log('Search Admin', this.searchQuery);
        //     const params = new URLSearchParams();
        //     params.append('schoolname',this.searchQuery,
        //     'email',this.searchQuery,
        //     'phone',this.searchQuery
        // );
        //     fetch(`https://node-2i60.onrender.com/api/search-admin?${params.toString()}`)
        //     .then((respone)=>respone.json())
        //     .then((data)=>{
        //         this.schools=data;
        //     })
        //     .catch((error)=>{
        //         console.error('Search error',error);
        //     });
        // },

        async searchBtn() {
            const params = new URLSearchParams();
            params.append('day', this.searchQuery);

            fetch(`https://node-2i60.onrender.com/api/search-schooltable?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.schools = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },

        /////////============== delete
        async ConfrmDelete(school_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + school_ID + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteAdmin(school_ID);
                }
            });
        },
        async DeleteAdmin(school_ID) {
            try {
                const respone = await axios.delete(`https://node-2i60.onrender.com/api/delete-schooltable/${school_ID}`);
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
                    this.Showschools();
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

        async Showdatatoedit(school_ID) {
            this.school_ID = school_ID;
            try {
                const respone = await axios.get(`https://node-2i60.onrender.com/api/select_schooltableid/${school_ID}`);
                this.updatetime_one = respone.data.time_one
                this.updatetime_two = respone.data.time_two
                this.updatetime_three = respone.data.time_three
                this.updatetime_four = respone.data.time_four
                this.updateday = respone.data.day
                this.updatesdate = respone.data.sdate
                this.updateedate = respone.data.edate
            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data


        async Update_data() {
            try {
                const respone = await axios.put(`https://node-2i60.onrender.com/api/update-schooltable/${this.school_ID}`, {
                    time_one: this.updatetime_one,
                    time_two: this.updatetime_two,
                    time_three: this.updatetime_three,
                    time_four: this.updatetime_four,
                    day: this.updateday,
                    sdate: this.updatesdate,
                    edate: this.updateedate

                });
                console.log(respone.data);
                // this.$router.push('/school');
                this.Showschools();
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