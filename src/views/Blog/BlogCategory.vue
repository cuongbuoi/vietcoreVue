<template>
    <div class="page-main">
        <vue-headful
                :title="title"
                :description="description"
                keywords=""
                :image="image"
                lang="vi"
                ogLocale=""
                url=""
        />
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
        <div class="container py-5">
            <div class="header-title">
                <h2>
                    {{categoryTitle}}
                </h2>
                <div class="seperator">
                    <i class="fa fa-circle-o"></i>
                </div>
            </div>
            <div class="row">
                <div v-for="item in data" class="col-12 col-lg-4 col-md-6 wow fadeInUp">
                    <div class="service-item">
                        <div class="service-image">
                            <router-link :to="'blog/' + item.slug + '-b' + item.id"
                                         :title="item.ten">
                                <img :alt="item.ten"
                                     :src="$BaseUrlApi + item.icon"
                                     title=""/>
                            </router-link>
                        </div>
                        <div class="service-info">
                            <router-link :to="'blog/' + item.slug + '-b' + item.id"
                                         title="">
                                {{item.ten}}
                            </router-link>
                            <div class="service-description" v-html="item.ngangon"></div>
                        </div>
                    </div>
                </div>
            </div>
            <nav v-if="data.length>0">
                <ul class="pagination justify-content-center">
                    <paginate
                            :page-count="paginate.totalPage"
                            :page-range="5"
                            :margin-pages="2"
                            :click-handler="Pagination"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination'"
                            :page-class="'page-item'"
                            :page-link-class="'page-link'"
                            :prev-link-class="'page-link'"
                            :next-link-class="'page-link'"
                    >
                    </paginate>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    export default {
        name: 'BlogCategory',
        data(){
            return{
                categoryId: '',
                categoryTitle: '',
                data:[],
                isLoading: false,
                fullPage: true,
                paginate:{
                    currentPage:1,
                    totalPage:1,
                },
                title:'',
                description: '',
                keywords: '',
                image: ''
            }
        },
        components: {
            Loading
        },
        created(){
            this.categoryId = this.$route.params.id;
            this.getCategory();
        },
        mounted(){
            this.isLoading = true;
            this.getCategoryPaginate();
        },
        watch:{
            '$route'(to,from){
                this.categoryId = this.$route.params.id;
                this.getCategory();
                this.getCategoryPaginate();
            }
        },
        methods:{
            getParamsUrl(data){
                let queryBuilder = [];
                Object.keys(data).forEach(item=>{
                    queryBuilder.push(`${item}=${data[item]}`);

                })
                return queryBuilder.join('&');
            },
            getCategory(){
                let vm = this;
                vm.$Http.get('/baiviet/danhmuc/'+vm.categoryId).then(response=>{
                   vm.categoryTitle = response.data.thongtindanhmuc.tendanhmucbaiviet,
                       vm.data = response.data.data,
                       vm.paginate.totalPage = response.data.phantrang.totalpage,
                       vm.paginate.currentPage = response.data.phantrang.currentpage,
                       vm.title = response.data.meta.title,
                       vm.description = response.data.meta.mieuta,
                       vm.keywords = response.data.meta.keywords,
                       vm.image = response.data.meta.image
                }).finally(() => this.isLoading = false);
            },
            getCategoryPaginate(){
                let vm = this;
                let urlQuery = vm.getParamsUrl(vm.$route.query);
                vm.$Http.get('/baiviet/danhmuc/'+vm.categoryId+'?'+urlQuery).then(response=>{
                    vm.data = response.data.data,
                    vm.paginate.totalPage = response.data.phantrang.totalpage,
                    vm.paginate.currentPage = response.data.phantrang.currentpage
                }).catch((error)=>{
                    this.isLoading = true
                }).finally(() => this.isLoading = false);
            },
            onCancel() {
                console.log('User cancelled the loader.')
            },
            Pagination(pageNum){
                let param = Object.assign({}, this.$route.query);
                param.page = pageNum;
                this.$router.push({name:'blogCategory',query:param});
                this.getCategoryPaginate();
                this.isLoading = true
            }
        }
    }
</script>