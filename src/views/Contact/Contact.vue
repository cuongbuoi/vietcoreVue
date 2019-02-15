<template>
    <div class="page-main">
        <vue-headful
                :title="meta.title"
                :description="meta.description"
                keywords=""
                :image="meta.image"
                lang="vi"
                ogLocale=""
                url=""
        />
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="mb-3 text-center text-main">
                                {{$WebsiteName}}
                            </h3>
                            <p><i class="fe fe-map"></i> Địa chỉ: {{meta.address}}</p>
                            <p><i class="fe fe-phone"></i> Số điện thoại: {{meta.phone}}</p>
                            <p><i class="fe fe-mail"></i> Email: <span><a
                                    :href="'mailto:'+meta.email">{{meta.email}}</a></span>
                            </p>
                            <p><i class="fe fe-chrome"></i> Website: <a href=""><?= URL ?></a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <form v-on:submit="postContact" action="#" method="post" enctype='multipart/form-data'>
                                <div class="form-group">
                                    <label for="ten">Họ tên:</label>
                                    <input id="ten" v-model="name" type="text" placeholder="Họ tên" class="form-control"
                                           required>
                                </div>
                                <div class="form-group">
                                    <label for="sdt">Số điện thoại:</label>
                                    <input id="sdt" v-model="sdt" type="text" placeholder="Số điện thoại"
                                           class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input id="email" v-model="email" type="email" placeholder="Email"
                                           class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="tinnhan">Tin nhắn:</label>
                                    <textarea v-model="tinnhan" id="tinnhan" cols="30" rows="10" class="form-control"
                                              placeholder="Tin nhắn"></textarea>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-primary"><i class="fa fa-paper-plane"></i> Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                name: '',
                sdt: '',
                email: '',
                tinnhan: '',
                meta:{
                    title: '',
                    description: '',
                    keywords: '',
                    image: '',
                    phone: '',
                    email: '',
                    address:'',
                }

            }
        },
        created(){
            this.getInfoContact()
        },
        methods: {
            postContact(e) {
                e.preventDefault();
                let vm = this;
                vm.$Http.post('/lienhe/send', {
                    name: this.name,
                    sdt: this.sdt,
                    email: this.email,
                    tinnhan: this.tinnhan
                }).then(response => {
                    if (response.data.tinhtrang == 1) {
                        console.log(response.data)
                        console.log('Đã gửi')
                    } else {
                        console.log('Lỗi')
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            getInfoContact() {
                let vm = this;
                vm.$Http.get('/lienhe').then(response => {
                    this.meta.title = response.data.meta.title,
                        this.meta.description = response.data.meta.mieuta,
                        this.meta.keywords = response.data.meta.keywords,
                        this.meta.image = response.data.meta.image,
                        this.meta.phone = response.data.meta.phone,
                        this.meta.email = response.data.meta.email,
                        this.meta.address = response.data.meta.address
                })
            }
        }
    }
</script>