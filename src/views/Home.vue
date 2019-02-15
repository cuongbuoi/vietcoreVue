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
        <section class="banner-section">
            <div class="container-fluid">
                <div id="particles-js" class="particles" style="background: none"></div>
                <div class="banner-inner">
                    <h1 class="text-capitalize">{{$WebsiteName}}</h1>
                    <h3>Giải pháp số toàn diện cho doanh nghiệp</h3>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="header-title mb-5">
                    <h2>{{serviceName}}</h2>
                    <p>Cung cấp các hệ thống giải pháp toàn diện cho doanh nghiệp</p>
                    <div class="seperator">
                        <i class="fa fa-circle-o"></i>
                    </div>
                </div>
                <div class="row">
                    <div v-for="item in service" class="col-12 col-lg-4 col-md-6 wow fadeInUp">
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
            </div>
        </section>
        <section class="counter-section">
            <div class="container">
                <div class="counter-section">
                    <div class="row">
                        <div class="col-4">
                            <div class="counter-item">
                                <div class="counter-icon"><i class="fe fe-folder"></i></div>
                                <div class="counter">
                                    <count-to ref="count1" :autoplay="false" :startVal='0' :endVal='1200' :duration=2000></count-to>
                                </div>
                                <p>Dự án</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="counter-item">
                                <div class="counter-icon"><i class="fe fe-user"></i></div>
                                <div class="counter">
                                    <count-to ref="count2" :autoplay="false" :startVal='0' :endVal='500' :duration=2000></count-to>
                                </div>
                                <p>Khách hàng</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="counter-item">
                                <div class="counter-icon"><i class="fe fe-award"></i></div>
                                <div class="counter">
                                    <count-to ref="count3" :autoplay="false" :startVal='3' :endVal='10' :duration=1000></count-to>
                                </div>
                                <p>Năm kinh nghiệm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="customer wow fadeInLeft">
                    <div class="header-title">
                        <h1 class="text-center text-white text-uppercase mb-5">
                            Khách hàng nói gì về Vietcore?
                        </h1>
                    </div>
                    <carousel :autoplay="true" :dots="false" :nav="false" :margin="10">
                        <div class="comment">
                            <div class="info-top clearfix">
                                <div class="img"
                                     :style="{'background-image': 'url('+$BaseUrlApi+'public/upload/anhkhachhang/nhuamientay.jpg'+')'}">
                                </div>
                                <div class="name">
                                    <h4>Mr. Nguyễn Thành Nhân</h4>
                                    <h5>IT - Nhựa Miền Tây</h5>
                                </div>
                            </div>
                            <div class="content-bot">
                                Website của Nhựa Miền Tây và Nhựa Cần Thơ được thiết kế theo phong cách hiện đại và hết sức
                                chuyên nghiệp sau khi được Vietcore tư vấn và thiết kế lại.
                            </div>
                        </div>
                        <div class="comment">
                            <div class="info-top clearfix">
                                <div class="img"
                                     :style="{'background-image': 'url('+$BaseUrlApi+'public/upload/anhkhachhang/cafatex.jpg'+')'}">
                                </div>
                                <div class="name">
                                    <h4>Mr. Ngô Vũ Minh Tân</h4>
                                    <h5>IT - Thủy Sản Cafatex</h5>
                                </div>
                            </div>
                            <div class="content-bot">
                                Sau khi được vietcore thiết kế lại, website của Cafatex đã có một diện mạo mới rất phù hợp
                                với hệ thống nhận diện thương hiệu nhất quán của chúng tôi.
                            </div>
                        </div>
                        <div class="comment">
                            <div class="info-top clearfix">
                                <div class="img"
                                     :style="{'background-image': 'url('+$BaseUrlApi+'public/upload/anhkhachhang/oto-taydo.jpg'+')'}">
                                </div>
                                <div class="name">
                                    <h4>Mr. Đặng Hữu Vĩnh</h4>
                                    <h5>IT - Ô Tô Tây Đô</h5>
                                </div>
                            </div>
                            <div class="content-bot">
                                Với sự đảm bảo và chuyên nghiệp của Vietcore, toàn bộ hệ thống website của chúng tôi từ công
                                ty tới bán hàng đều đã được chuyển sang cho vietcore thiết kế và quản lý.
                            </div>
                        </div>
                        <div class="comment">
                            <div class="info-top clearfix">
                                <div class="img"
                                     :style="{'background-image': 'url('+$BaseUrlApi+'public/upload/anhkhachhang/Kangaroo-cantho.jpg'+')'}">
                                </div>
                                <div class="name">
                                    <h4>Mr. Chí Đàng </h4>
                                    <h5>CEO - Kangaroo Cần Thơ</h5>
                                </div>
                            </div>
                            <div class="content-bot">
                                Vietcore đã xâng dựng cho kênh bán hàng của Kangaroo tại Cần Thơ một website thương mại điện
                                tử tốt, khả năng tương tác và giao diện rất phù hợp với yêu cầu mà Kangaroo đặt ra.
                            </div>
                        </div>
                        <div class="comment">
                            <div class="info-top clearfix">
                                <div class="img"
                                     :style="{'background-image': 'url('+$BaseUrlApi+'public/upload/anhkhachhang/newhope.jpg'+')'}">
                                </div>
                                <div class="name">
                                    <h4>Ms. Trần Trân</h4>
                                    <h5>CV - Tập Đoàn Newhope</h5>
                                </div>
                            </div>
                            <div class="content-bot">
                                Là tập đoàn lớn về thức ăn gia súc và thủy sản trên thế giới, Newhope rất chú trọng về mặt
                                hình ảnh, chúng tôi quyết định chọn vietcore là đơn vị đồng hành tại khu vực miền nam Việt
                                Nam.
                            </div>
                        </div>

                        <div class="comment">
                            <div class="info-top clearfix">
                                <div class="img"
                                     :style="{'background-image': 'url('+$BaseUrlApi+'public/upload/anhkhachhang/mekong.jpg'+')'}">
                                </div>
                                <div class="name">
                                    <h4>Mr. Phạm Võ Trường Duy</h4>
                                    <h5>CV - Quỹ Tín Dụng Nhân Dân Mekong</h5>
                                </div>
                            </div>
                            <div class="content-bot">
                                website là một trong những dịch vụ mà Quỹ Tín Dụng Nhân Dân Mekong đang sử dụng của
                                Vietcore, hài lòng và tin tưởng là giá trị mà Vietcore mang lại cho chúng tôi.
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import "../assets/js/particles";
    import axios from 'axios';
    import carousel from 'vue-owl-carousel'
    import countTo from 'vue-count-to';

    export default {
        name: 'Trangchu',
        data(){
            return{
                serviceName: '',
                service: [],
                title:'',
                description:'',
                image:'',
                firstTime: true
            }
        },
        components: { carousel,countTo },
        created() {
            this.getService();
        },
        mounted(){
            this.initParticles();
            this.startCountTo();
        },
        methods:{
            getService(){
                axios.get('https://vietcore.mientay.top/api/index').then(response=>{
                    this.serviceName = response.data.module[3].thongtin.tenmodule,
                   this.service = response.data.module[3].data,
                    this.title = response.data.meta.title,
                    this.description = response.data.meta.mieuta,
                    this.image = response.data.meta.image
                });
            },
            startCountTo(){
                let vm = this;
                let countArea = $(".counter-section").offset().top-400;
                $(window).scroll(function () {
                    if($(window).scrollTop() >= countArea && vm.firstTime){
                        vm.$refs.count1.start();
                        vm.$refs.count2.start();
                        vm.$refs.count3.start();
                        vm.firstTime = false;
                    }
                });
            },
            initParticles(){
                window.particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 700
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                })
            }
        }
    }
</script>
