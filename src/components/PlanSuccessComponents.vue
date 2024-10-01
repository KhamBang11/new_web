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
                            <li class="breadcrumb-item"><router-link to="/Plan" class="text-bold text-dark"
                                    href="#">ເເຜນການ</router-link></li>

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
                        <div class="card p-4 shadow">
                            <div class="shadow p-4 d-flex">
                                <span>
                                    <h3 class="text-success"><b>ເເຜນການສຳເລັດເເລ້ວ</b></h3>
                                </span>
                                <span class="ml-5">
                                    <div class="form-group float-end d-flex">
                                        <input type="search" required v-model="searchQuery" id="" class="form-control">
                                        <button @click="Searchplan" class="btn btn-sm btn-dark ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </span>

                            </div>
                            <div class="p-3 table-responsive">
                                <table class="table table-sm table-striped table-hover">
                                    <thead class="bg-dark text-white">
                                        <tr>
                                            <th>ລຳດັບ</th>
                                            <th>ເເຜນ</th>
                                            <th>ອັດຕາ</th>
                                            <th>ການເຄື່ອນໄຫວ</th>
                                            <th>ສະຖານະ</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="plan in plans" :key="plan.id">
                                            <td>{{ plan.id }}</td>
                                            <td>{{ plan.name }}</td>
                                            <td>{{ plan.percent }} %</td>
                                            <td>{{ plan.active }} %</td>
                                            <!-- <td v-if="plan.active <= plan.percent"><i
                                                    class="fas fa-circle text-danger"></i></td>
                                            <td v-else><i class="fas fa-check-circle text-success"></i></td> -->
                                            <td :class="plan.status===0 ? 'text-danger':'text-success'">
                                                <span style="font-size: 8px;">{{ plan.status==0 ? 'ຍັງບໍ່ທັນສຳເລັດ':'ສຳເລັດເເລ້ວ' }}</span>
                                            </td>
                                            <td><span style="font-size: 8px;" class="text-success">{{ plan.create_at
                                                    }}</span></td>
                                            <td><span style="font-size: 8px;" class="text-info">{{ plan.update_at }}</span></td>
                                           
                                            <td>
                                                <button @click="ConfrmDelete(plan.id)" class="btn btn-outline-danger"><i
                                                        class="fas fa-trash"></i></button>
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
                                <h1><b>ເເກ້ໄຂຂໍ້ມູນເເຜນການ</b></h1>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_data" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="name">ແຜນການ <span class="text-danger">*</span></label>
                                        <input type="text" required v-model="updatename" class="form-control" id="">
                                    </div>
                                    <div class="form-group">
                                        <label for="tel">ອັດຕາສວ່ນ <span class="text-danger">*</span></label>
                                        <input type="number" required v-model="updatepercent" class="form-control"
                                            id="">
                                    </div>

                                    <div class="form-group">
                                        <label for="email">ການເຄື່ອນໄຫວ <span class="text-danger">*</span></label>
                                        <input type="number" required v-model="active" class="form-control" id="">
                                    </div>

                                
                                    <div class="form-group">
                                        <label for="tel">ສະຖານະ <span class="text-danger">*</span></label>
                                        <select v-model="status" class="form-control" id="">
                                            <option :value="status">
                                                <span v-if="status===1">ສຳເລັດເເລ້ວ</span>
                                                <span v-if="status===0">ຍັງບໍ່ທັນສຳເລັດ</span>
                                            </option>
                                            <option value="1">ສຳເລັດເເລ້ວ</option>
                                            <option value="0">ຍັງບໍ່ທັນສຳເລັດ</option>

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
    name: "PlanSuccessComponents",
    components: {
        HeaderC,
        SidebarC
    },
    props: {
        plan: Object
    },
    computed: {
        statusClass() {
            return this.plan.status === 0 ? 'text-danger' : 'text-success';
        }, statusText() {
            return this.plan.status === 0 ? 'not' : 'not-success';
        }
    },
    data() {
        return {
            name: '',
            percent: '',
            //======================
            updatename: '',
            updatepercent: '',
            active: "",
            status: "",


            plan_Id: null,
            plans: [],
            searchQuery: ''
        }
    }, created() {
        this.Showplans();
    }, methods: {
        async Showplans() {
            try {
                const respone = await axios.get('http://localhost:3000/api/select-plan-success');
                if (Array.isArray(respone.data)) {
                    this.plans = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('plan error', error);
            }
        },
        async Createplan() {
            try {
                if (this.name === "") {
                    alert("ຊື່ເເຜນການວ່າງເປົ່າ");
                } else {
                    const respone = await axios.post('http://localhost:3000/api/create-plan', {
                        name: this.name,
                        percent: this.percent
                    });
                    console.log(respone.data);
                    this.Resetplan_from();
                    this.Showplans();
                    Swal.fire({
                        title: 'ເພີ່ມເເຜນການສຳເລັດ',
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
        async Resetplan_from() {
            this.name = "",
                this.percent = ""

        },
        // function search

        // async Searchplan(){
        //     console.log('Search plan', this.searchQuery);
        //     const params = new URLSearchParams();
        //     params.append('username',this.searchQuery,
        //     'email',this.searchQuery,
        //     'phone',this.searchQuery
        // );
        //     fetch(`http://localhost:3000/api/search-plan?${params.toString()}`)
        //     .then((respone)=>respone.json())
        //     .then((data)=>{
        //         this.plans=data;
        //     })
        //     .catch((error)=>{
        //         console.error('Search error',error);
        //     });
        // },

        async Searchplan() {
            const params = new URLSearchParams();
            params.append('name', this.searchQuery
            );

            fetch(`http://localhost:3000/api/search-plan-success?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.plans = data;
                })
                .catch((error) => {
                    console.error('Search error', error);
                });
        },

        async ConfrmDelete(plan_Id) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + plan_Id + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.Deleteplan(plan_Id);
                }
            });
        },
        async Deleteplan(plan_Id) {
            try {
                const respone = await axios.delete(`http://localhost:3000/api/delete-plan/${plan_Id}`);
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
                    this.Showplans();
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

        async Showdatatoedit(plan_Id) {
            this.plan_Id = plan_Id;
            try {
                const respone = await axios.get(`http://localhost:3000/api/select_planid/${plan_Id}`);
                this.updatename = respone.data.name,
                    this.updatepercent = respone.data.percent
                this.active = respone.data.active
                this.status = respone.data.status
            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data

        async Update_data() {
            try {
                const respone = await axios.put(`http://localhost:3000/api/update-plan/${this.plan_Id}`, {
                    name: this.updatename,
                    percent: this.updatepercent,
                    active: this.active,
                    status: this.status
                });
                console.log(respone.data);
                this.$router.push('/plan');
                this.Showplans();
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