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
            <div class="blog-detail-title">
                <h3>{{blogTitle}}</h3>
            </div>
            <div class="content" v-html="blogContent"></div>
        </div>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'BlogDetail',
        data() {
            return {
                blogId: '',
                blogTitle: '',
                blogContent: '',
                isLoading: false,
                fullPage: true,
                title:'',
                description: '',
                keywords: '',
                image: ''
            }
        },
        components: {
            Loading
        },
        created() {
            this.blogId = this.$route.params.id;
            this.getBlogDetail();
        },
        mounted(){
            this.isLoading = true;
        },
        watch:{
            '$route'(to,from){
                this.blogId = this.$route.params.id;
                this.getBlogDetail();
            }
        },
        methods: {
            getBlogDetail() {
                this.$Http.get('/baiviet/chitiet/' + this.blogId).then(response => {
                    this.blogTitle = response.data.baiviet.tenbaiviet,
                    this.blogContent = response.data.baiviet.noidung,
                        this.title = response.data.meta.title,
                        this.description = response.data.meta.mieuta,
                        this.keywords = response.data.meta.keywords,
                        this.image = response.data.meta.image
                })
                .finally(() => this.isLoading = false)

            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        }
    }
</script>