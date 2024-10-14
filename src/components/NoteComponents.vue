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
                            <li class="breadcrumb-item"><router-link to="/note" class="text-bold text-dark"
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
                                <h1 class="text-center text-primary"><b>ເພີ່ມເນື້ອຫາ</b></h1>
                            </div>
                            <div class="p-3">
                                <form action="" @submit.prevent="Createnote" method="post">
                                    <div class="form-group">
                                        <label for="tel">ພາກສວ່ນ <span class="text-danger">*</span></label>
                                        <select v-model="module_id" class="form-control" id="">
                                            <option value=""></option>
                                            <option v-for="module_s in modules" :key="module_s.id" :value="module_s.id">
                                                {{ module_s.module_name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="tel">ເນື້ອຫາ <span class="text-danger">*</span></label>
                                        <textarea v-model="note_name" class="form-control" cols="" rows="3"
                                            id=""></textarea>
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
                                    <h3><b>ລາຍການເນື້ອຫາ</b></h3>
                                </span>
                                <span class="ml-5">
                                    <div class="form-group float-end d-flex">
                                        <select v-model="searchmodule_ids" class="form-control" id="">
                                            <option value=""></option>
                                            <option v-for="module_s in modules" :key="module_s.id" :value="module_s.id">
                                                {{ module_s.module_name }}</option>
                                        </select>
                                        <button @click="Searchmodule_id" class="btn btn-sm btn-dark ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </span>
                                <span class="ml-5">
                                    <div class="form-group float-end d-flex">
                                        <input type="search" required v-model="searchQuery" id="" class="form-control">
                                        <button @click="Searchnote" class="btn btn-sm btn-dark ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </span>

                            </div>
                            <div class="p-4 text-danger text-center text-bold mt-5" v-if="none_data"><h3>ບໍ່ພົບຂໍ້ມູນໃດໆ</h3></div>
                            <div v-else class="p-3 table-responsive">
                                <table class="table table-sm table-striped table-hover">
                                    <thead class="bg-dark text-white">
                                        <tr>
                                            <th>ລຳດັບ</th>
                                            <th>ພາກສວ່ນ</th>
                                            <th>ເນື້ອຫາ</th>
                                            <th>ສ້າງວັນທີ</th>
                                            <th>ເເກ້ໄຂວັນທີ</th>
                                            <th>ເເກ້ໄຂ</th>
                                            <th>ລົບ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <tr v-for="note in notes" :key="note.id">
                                            <td>{{ note.id }}</td>
                                            <td>{{ note.module_name }}</td>
                                            <td>{{ note.content }}</td>

                                            <td><span style="font-size: 8px;" class="text-success">{{ note.created_at
                                                    }}</span></td>
                                            <td>{{ note.updated_at }}</td>
                                            <td>
                                                <button @click="Showdatatoedit(note.id)" data-toggle="modal"
                                                    data-target="#modal-primary" class="btn btn-outline-info"><i
                                                        class="fas fa-edit"></i></button>

                                            </td>
                                            <td>
                                                <button @click="ConfrmDelete(note.id)" class="btn btn-outline-danger"><i
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
                                <h1><b>ເເກ້ໄຂຂໍ້ມູນຜູ້ນຳໃຊ້</b></h1>
                                <button type="button" class="btn btn-outline-danger p-1 pl-2 pt-0 pb-0"
                                    data-dismiss="modal"><i class="fas fa-times mr-1"></i></button>
                            </div>
                            <form @submit.prevent="Update_data" action="" enctype="multipart/form-data">
                                <div class="modal-body p-3">

                                    <div class="form-group">
                                        <label for="tel">ພາກສວ່ນ <span class="text-danger">*</span></label>

                                        <select v-model="updatemodule_id" class="form-control" id="">
                                            <option :value="updatemodule_id">{{ updatemodule_idname }}</option>
                                            <option v-for="module_s in modules" :key="module_s.id" :value="module_s.id">
                                                {{ module_s.module_name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="tel">ເນື້ອຫາ <span class="text-danger">*</span></label>
                                        <textarea v-model="updatenote_name" class="form-control" cols="" rows="3"
                                            id=""></textarea>
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
    name: "NoteComponents",
    components: {
        HeaderC,
        SidebarC
    },
    data() {
        return {
            module_id: '',
            note_name: '',
            //======================
            updatemodule_id: '',
            updatenote_name: '',


            Note_Id: null,
            notes: [],
            Module_ID: null,
            modules: [],
            searchQuery: '',
            none_data: false
        }
    }, created() {
        this.Shownotes();
        this.Showmodules();
    }, methods: {
        async Shownotes() {
            try {
                const respone = await axios.get('https://node-2i60.onrender.com/api/select-note');
                if (Array.isArray(respone.data)) {
                    this.notes = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('note error', error);
            }
        },
        async Showmodules() {
            try {
                const respone = await axios.get('https://node-2i60.onrender.com/api/select-module');
                if (Array.isArray(respone.data)) {
                    this.modules = respone.data;
                } else {
                    console.error('Invalid error', respone.data);
                }
            } catch (error) {
                console.error('Admin error', error);
            }
        },
        async Createnote() {
            try {
                if (this.module_id === "") {
                    alert("ຊື່ຜູ້ນຳໃຊ້ວ່າງເປົ່າ");
                } else {
                    const respone = await axios.post('https://node-2i60.onrender.com/api/create-note', {
                        content: this.note_name,
                        module_id: this.module_id,
                    });
                    console.log(respone.data);
                    this.Resetnote_from();
                    this.Shownotes();
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
        async Resetnote_from() {
            this.module_id = "",
                this.note_name = ""
        },
        // function search

        // async Searchnote(){
        //     console.log('Search note', this.searchQuery);
        //     const params = new URLSearchParams();
        //     params.append('username',this.searchQuery,
        //     'email',this.searchQuery,
        //     'phone',this.searchQuery
        // );
        //     fetch(`https://node-2i60.onrender.com/api/search-note?${params.toString()}`)
        //     .then((respone)=>respone.json())
        //     .then((data)=>{
        //         this.notes=data;
        //     })
        //     .catch((error)=>{
        //         console.error('Search error',error);
        //     });
        // },

        async Searchnote() {
            const params = new URLSearchParams();
            params.append('content', this.searchQuery
            );

            fetch(`https://node-2i60.onrender.com/api/search-note?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.notes = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },

        async Searchmodule_id() {
            const params = new URLSearchParams();
            params.append('module_id', this.searchmodule_ids
            );

            fetch(`https://node-2i60.onrender.com/api/search-module_id?${params.toString()}`)
                .then((respone) => respone.json())
                .then((data) => {
                    this.notes = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },


        async ConfrmDelete(Note_Id) {
            Swal.fire({
                title: 'ຕ້ອງການລົບເເທ້ບໍ?',
                text: 'ທ່ານເເນ່ໃຈລົບລະຫັດ' + Note_Id + 'ເເທ້ບໍ',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ຕົກລົງ'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.Deletenote(Note_Id);
                }
            });
        },
        async Deletenote(Note_Id) {
            try {
                const respone = await axios.delete(`https://node-2i60.onrender.com/api/delete-note/${Note_Id}`);
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
                    this.Shownotes();
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

        async Showdatatoedit(Note_Id) {
            this.Note_Id = Note_Id;
            try {
                const respone = await axios.get(`https://node-2i60.onrender.com/api/select_noteid/${Note_Id}`);
                this.updatemodule_id = respone.data.module_id,
                    this.updatemodule_idname = respone.data.module_name,
                    this.updatenote_name = respone.data.content
            } catch (error) {
                console.error(error.respone.data);
            }
        },

        //update data

        async Update_data() {
            try {
                const respone = await axios.put(`https://node-2i60.onrender.com/api/update-note/${this.Note_Id}`, {
                    note_name: this.updatenote_name,
                    module_id: this.updatemodule_id
                });
                console.log(respone.data);
                this.$router.push('/note');
                this.Shownotes();
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