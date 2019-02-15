<template>
    <div>
        <div class="pre-footer">
            <div class="container">
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <div class="footer-title">
                        <strong>{{$WebsiteName}}</strong>
                        <div class="seperator">
                            <i class="fe fe-chevrons-down"></i>
                        </div>
                    </div>
                    <div class="social-icons social-icons-dark social-icons-colored-hover">
                        <ul>
                            <li class="social-facebook">
                                <a class="text-white" href="">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li class="social-twitter">
                                <a class="text-white" href="">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li class="social-google">
                                <a class="text-white" href="">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li class="social-youtube">
                                <a class="text-white" href="">
                                    <i class="fa fa-youtube-play"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div v-for="item in footer" class="col-12 col-lg-3 col-md-6">
                        <h5 class="text-uppercase pb-3">
                            {{item.ten}}
                        </h5>
                        <ul class="list-unstyled">
                            <li v-for="subItem in item.sub">
                                <router-link :title="subItem.ten"
                                             :to="subItem.slug">
                                    {{subItem.ten}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-3 col-md-6">
                        <h5 class="text-uppercase mb-3">Theo dõi chúng tôi</h5>
                        <div id="fb-root"></div>
                        <div class="fanpage">
                            <div v-if="facebookPage" class="fb-page"
                                 :data-href="facebookUrl" data-tabs="timeline"
                                 data-height="130" data-small-header="false"
                                 data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                <blockquote :cite="facebookUrl"
                                            class="fb-xfbml-parse-ignore"><a
                                        :href="facebookUrl">{{$WebsiteName}}</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="border-top: 1px solid #ddd">
                    <div class="col-md-7">
                        <div class="d-flex flex-column justify-content-center h-100">
                            <div class="mt-3 mt-lg-0 copyright">
                                200 Nguyễn Hiền, KDC 91B, An Khánh, Ninh Kiều, TP. Cần Thơ
                            </div>
                            <div class="mt-3 mt-lg-0 copyright">
                                Phone: 02926.533.323 - Hotline: 0987.609.283 - Email: vietcore.com.vn
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="d-block text-center">
                            <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=46112">
                                <img style="width: 50%"
                                     src="http://vietcore.com.vn/view/vietcore/assets/img/bocongthuong.png"
                                     alt="da thong bao bo cong thuong">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="row align-items-center flex-row">
                    <div class="col-lg-12 col-lg-auto mt-3 mt-lg-0 text-center copyright">
                        Copyright ©{{$WebsiteName}}. Web Designed by <a href="http://thietkewebcantho.net"
                                                                        style="color: #37C6F5">Vietcore</a>.
                        All
                        rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                footer: [],
                facebookUrl: ''
            }
        },
        async created() {
            await this.getFooter();
        },
        mounted() {
            if (!document.getElementById('facebook-jssdk')) {
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            }
        },
        computed: {
            facebookPage(){
                return (this.$store.getters.postLogin) ? this.$store.getters.postLogin.payload.facebook_page : null;
            },
        },
        methods: {
            async getFooter() {
                let vm = this;
                let result = await vm.$Http.get('/footer').then(response => {
                    return response.data.footer
                });

                function checkSub(item) {
                    if (typeof item !== 'undefined')
                        return true;
                    else
                        return false;
                };
                let dataFooter = [];
                result.parent[0].forEach((value) => {
                    let footer = {
                        ten: '',
                        slug: '',
                        sub: []
                    };
                    footer.ten = result.item[value].ten;
                    footer.slug = result.item[value].slug;
                    if (checkSub(result.item[value])) {
                        result.parent[value].forEach((value2) => {
                            footer.sub.push(result.item[value2])
                        });
                    }
                    ;
                    dataFooter.push(footer);
                });
                vm.footer = dataFooter;
                vm.facebookUrl = result.FBpageurl[0]
            }
        }
    }
</script>
<style scoped lang="scss">

</style>