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
                            <h2 class="text-danger text-bold">ລາຍຈ່າຍ</h2>
                            <div class="shadow-sm p-4">


                                <div class="row">
                                    <div class="col-sm-9">
                                        <span class="btn btn-outline-danger float-end" data-toggle="modal"
                                            data-target="#modal-expense"><i class="fas fa-plus-circle"></i> ເພີ່ມ
                                        </span>
                                    </div>

                                    <div class="col-sm-3">
                                        <div class="form-group float-end d-flex">
                                            <input type="search" required v-model="searchInQuery" id=""
                                                class="form-control">
                                            <button @click="SearchExpense" class="btn btn-sm btn-danger ml-2"><i
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
                                    <thead class="bg-danger text-white">
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
                                        <tr v-for="(expense, num) in expenses" :key="expense.id">
                                            <td>{{ num + 1 }}</td>
                                            <td>{{ expense.expense }}</td>
                                            <td>{{ expense.expense_reason }}</td>
                                            <td>{{ expense.status }}</td>
                                            <td><span style="font-size: 8px;" class="text-success">{{ expense.create_at
                                                    }}</span></td>
                                            <td><span style="font-size: 8px;" class="text-danger">{{ expense.update_at
                                                    }}</span></td>
                                            <td>
                                                <button @click="Showexdatatoedit(expense.id)" data-toggle="modal"
                                                    data-target="#modal-updateexpense" class="btn btn-outline-info"><i
                                                        class="fas fa-edit"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmExDelete(expense.id)"
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


                <div class="modal fade" id="modal-expense">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h2><b>ເພີ່ມລາຍຈ່າຍ</b></h2>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="CreateExpense" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ຈຳນວນເງີນ<span class="text-danger">*</span></label>
                                        <input type="number" required v-model="expense" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="name">ຄຳອະທີບາຍ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="exremark" class="form-control" id="">
                                    </div>


                                    <div class="form-group">
                                        <label for="tel">ສະຖານະ <span class="text-danger">*</span></label>
                                        <select v-model="exstatus" class="form-control" id="">
                                            <option value=""></option>
                                            <option value="ເງີນສົດ">ເງີນສົດ</option>
                                            <option value="ເງີນໂອນ">ເງີນໂອນ</option>

                                        </select>
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





          
                <!-- ======================================================= -->



                <div class="modal fade" id="modal-updateexpense">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg p-2">
                            <div class="modal-header shadow">
                                <h2><b>ເເກ້ໄຂລາຍຈ່າຍ</b></h2>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_expensedata" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ຈຳນວນເງີນ<span class="text-danger">*</span></label>
                                        <input type="number" required v-model="upexpense" class="form-control" id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="name">ຄຳອະທີບາຍ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="upexremark" class="form-control" id="">
                                    </div>


                                    <div class="form-group">
                                        <label for="tel">ສະຖານະ <span class="text-danger">*</span></label>
                                        <select v-model="upexstatus" class="form-control" id="">
                                            <option :value="upexstatus">{{ upexstatus }}</option>
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
    name: "ExpenseDetailComponents",
    components: {
        HeaderC,
        SidebarC
    },
    data() {
        return {
          

            expense: "",
            exremark: "",
            exstatus: "",

            // ==========

            upexpense: "",
            upexremark: "",
            upexstatus: "",

            Expense_ID: null,
            expenses: [],


            // ===================================

            searchExQuery: '',

            none_data: false
        }
    }, created() {
        this.Showexpenses();
    }, methods: {
        
        async Showexpenses() {
            try {
                const respone = await axios.get('https://node-2i60.onrender.com/api/select-expense');
                if (Array.isArray(respone.data)) {
                    this.expenses = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('Admin error', error);
            }
        },


     

        async CreateExpense() {
            try {
                if (this.expense === "") {
                    alert("ຊື່ເນື້ອຫາວ່າງເປົ່າ");
                } else {
                    const respone = await axios.post('https://node-2i60.onrender.com/api/create-expense', {
                        expense: this.expense,
                        expense_reason: this.exremark,
                        status: this.exstatus
                    });
                    console.log(respone.data);
                    this.ResetAdmin_from();
                    this.Showexpenses();
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


     
        // ========== search


        async SearchExpense() {
            const params = new URLSearchParams();
            params.append('expense', this.searchInQuery, 'expense_reason', this.searchInQuery, 'status', this.searchInQuery);

            fetch(`https://node-2i60.onrender.com/api/search-expense?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.expenses = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },

   
        /////////============== delete
        async ConfrmExDelete(Expense_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + Expense_ID + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteExpense(Expense_ID);
                }
            });
        },
        async DeleteExpense(Expense_ID) {
            try {
                const respone = await axios.delete(`https://node-2i60.onrender.com/api/delete-expense/${Expense_ID}`);
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
                    this.Showexpenses();
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



        //function show data to edit===============================================================================

        async Showexdatatoedit(Expense_ID) {
            this.Expense_ID = Expense_ID;
            try {
                const respone = await axios.get(`https://node-2i60.onrender.com/api/select_expenseid/${Expense_ID}`);
                this.upexpense = respone.data.expense,
                    this.upexremark = respone.data.expense_reason,
                    this.upexstatus = respone.data.status

            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data

        async Update_expensedata() {
            try {
                const respone = await axios.put(`https://node-2i60.onrender.com/api/update-expense/${this.Expense_ID}`, {
                    expense: this.upexpense,
                    expense_reason: this.upexremark,
                    status: this.upexstatus

                });
                console.log(respone.data);
                this.$router.push('/income');
                this.Showexpenses();
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