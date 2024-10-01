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
                            <li class="breadcrumb-item"><router-link to="/income" class="text-bold text-success"
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

                        <!-- =================== -->

                        <div class="card p-4 shadow">
                            <h2 class="text-primary text-bold">ລາຍຮັບ</h2>
                            <div class="shadow-sm p-4">


                                <div class="row">
                                    <div class="col-sm-9">
                                        <span class="btn btn-outline-primary float-end" data-toggle="modal"
                                            data-target="#modal-income"><i class="fas fa-plus-circle"></i> ເພີ່ມ
                                        </span>
                                    </div>

                                    <div class="col-sm-3">
                                        <div class="form-group float-end d-flex">
                                            <input type="search" required v-model="searchInQuery" id=""
                                                class="form-control">
                                            <button @click="SearchIncome" class="btn btn-sm btn-primary ml-2"><i
                                                    class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </div>








                            <div class="p-4 text-danger text-center text-bold mt-5" v-if="none_data">
                                <h3>ບໍ່ພົບຂໍ້ມູນໃດໆ</h3>
                            </div>
                            <div v-else class="p-3 table-responsive">
                                <table class="table table-sm table-striped table-hover">
                                    <thead class="bg-primary text-white">
                                        <tr>
                                            <th>ລຳດັບ</th>
                                            <th>ເງີນ</th>
                                            <th>ຄຳອະທີບາຍ</th>
                                            <th>ສະຖານະ</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            <th>ເເກ້ໄຂ</th>
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(income, index) in incomes" :key="income.id">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ income.income }}</td>
                                            <td>{{ income.income_reason }}</td>
                                            <td>{{ income.status }}</td>
                                            <td><span style="font-size: 8px;" class="text-success">{{ income.create_at
                                                    }}</span></td>
                                            <td><span style="font-size: 8px;" class="text-danger">{{ income.update_at
                                                    }}</span></td>
                                            <td>
                                                <button @click="Showindatatoedit(income.id)" data-toggle="modal"
                                                    data-target="#modal-updateincome" class="btn btn-outline-info"><i
                                                        class="fas fa-edit"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmDelete(income.id)"
                                                    class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>


                    </div>
                    <!-- ========================================== -->


                </div>

                <!-- ====================== -->


                <div class="modal fade" id="modal-income">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h2><b>ເພີ່ມລາຍຮັບ</b></h2>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="CreateIncome" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ຈຳນວນເງີນ<span class="text-danger">*</span></label>
                                        <input type="number" required v-model="income" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="name">ຄຳອະທີບາຍ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="inremark" class="form-control" id="">
                                    </div>


                                    <div class="form-group">
                                        <label for="tel">ສະຖານະ <span class="text-danger">*</span></label>
                                        <select v-model="instatus" class="form-control" id="">
                                            <option value=""></option>
                                            <option value="ເງີນສົດ">ເງີນສົດ</option>
                                            <option value="ເງີນໂອນ">ເງີນໂອນ</option>

                                        </select>
                                    </div>




                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i> ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-outline-primary"><i class="fas fa-plus-circle"></i>
                                        ເພີ່ມ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->





                <!-- ======================================================= -->



                <div class="modal fade" id="modal-updateincome">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h2><b>ເເກ້ໄຂລາຍຮັບ</b></h2>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_incomedata" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ຈຳນວນເງີນ<span class="text-danger">*</span></label>
                                        <input type="number" required v-model="upincome" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="name">ຄຳອະທີບາຍ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="upinremark" class="form-control" id="">
                                    </div>


                                    <div class="form-group">
                                        <label for="tel">ສະຖານະ <span class="text-danger">*</span></label>
                                        <select v-model="upinstatus" class="form-control" id="">
                                            <option :value="upinstatus">{{ upinstatus }}</option>
                                            <option value="ເງີນສົດ">ເງີນສົດ</option>
                                            <option value="ເງີນໂອນ">ເງີນໂອນ</option>

                                        </select>
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
    name: "IncomeDetailComponents",
    components: {
        HeaderC,
        SidebarC
    },
    data() {
        return {
            income: "",
            inremark: "",
            instatus: "",

            // ==========

            upincome: "",
            upinremark: "",
            upinstatus: "",

            Income_ID: null,
            incomes: [],


            // ===================================

            searchInQuery: '',

            none_data: false
        }
    }, created() {
        this.Showincomes();
      
    }, methods: {
        async Showincomes() {
            try {
                const respone = await axios.get('http://localhost:3000/api/select-income');
                if (Array.isArray(respone.data)) {
                    this.incomes = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('Admin error', error);
            }
        },

        async CreateIncome() {
            try {
                if (this.income === "") {
                    alert("ຊື່ເນື້ອຫາວ່າງເປົ່າ");
                } else {
                    const respone = await axios.post('http://localhost:3000/api/create-income', {
                        income: this.income,
                        income_reason: this.inremark,
                        status: this.instatus
                    });
                    console.log(respone.data);
                    this.ResetAdmin_from();
                    this.Showincomes();
                    Swal.fire({
                        title: 'ເພີ່ມສຳເລັດ',
                        icon: 'success',
                        timer: 1000,

                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });
                    window.setTimeout(function () {
                        location.reload();
                    }, 1000);
                }

            } catch (error) {
                console.error('Create error', error);
                this.Showweloginerror();
            }
        },

     


        // function reset add user
        async ResetAdmin_from() {
            this.income = ""
            this.inremark = ""
        },
        // function search


        async SearchIncome() {
            const params = new URLSearchParams();
            params.append('income', this.searchInQuery, 'income_reason', this.searchInQuery, 'status', this.searchInQuery);

            fetch(`http://localhost:3000/api/search-income?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.incomes = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },


       
        /////////============== delete
        async ConfrmDelete(income_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + income_ID + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteAdmin(income_ID);
                }
            });
        },
        async DeleteAdmin(income_ID) {
            try {
                const respone = await axios.delete(`http://localhost:3000/api/delete-income/${income_ID}`);
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
                    this.Showincomes();
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

        async Showindatatoedit(income_ID) {
            this.income_ID = income_ID;
            try {
                const respone = await axios.get(`http://localhost:3000/api/select_incomeid/${income_ID}`);
                this.upincome = respone.data.income,
                    this.upinremark = respone.data.income_reason,
                    this.upinstatus = respone.data.status

            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data

        async Update_incomedata() {
            try {
                const respone = await axios.put(`http://localhost:3000/api/update-income/${this.income_ID}`, {
                    income: this.upincome,
                    income_reason: this.upinremark,
                    status: this.upinstatus

                });
                console.log(respone.data);
                this.$router.push('/income');
                this.Showincomes();
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



    }
}
</script>