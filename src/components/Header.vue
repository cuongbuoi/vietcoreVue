<template>
    <header>
        <div class="header header-first py-0">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between headerlogo">
                    <router-link class="header-brand d-lg-none" to="/"
                       title="Thiết kế web miễn phí | thiet ke web gia re | thiết kế web giá rẻ">
                        <img :src="logo" class="header-brand-img" alt="">
                    </router-link>
                    <div class="d-flex d-lg-none align-items-center">
                        <button @click="toogleMenu()" class="header-toggler d-lg-none ml-3 ml-lg-0" id="show-menu-button">
                            <span class="header-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="header header-second d-lg-flex py-0 " :class="{show: isActive}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="close-menu d-flex d-lg-none justify-content-end w-100">
                        <button @click="closeMenu()" id="btn-close-menu"><i class="fa fa-times"></i></button>
                    </div>
                    <div id="mainMenu" class="col-lg order-lg-first">
                        <nav class="d-block d-lg-flex justify-content-between align-items-center">
                            <router-link to="/" class="header-brand d-none d-lg-block">
                                <img :src="logo" class="header-brand-img" :alt="$WebsiteName">
                            </router-link>
                            <ul>
                                <li :class="{add:item.sub.length > 0}" v-for="item in menu">
                                    <router-link :to="item.slug">
                                        {{item.ten}}
                                        <i class="fa fa-angle-down" v-if="item.sub.length > 0"></i>
                                    </router-link>
                                    <button v-if="item.sub.length > 0" class="click-dropdown"><i class="fa fa-chevron-down"></i></button>
                                    <ul class="dropdown-menu" v-if="item.sub.length > 0">
                                        <li class="add" v-for="subItem in item.sub">
                                            <router-link :to="subItem.slug">
                                                {{subItem.ten}}
                                            </router-link>
                                            <button class="click-dropdown"><i class="fa fa-plus"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!--END: NAVIGATION-->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Header',
        data() {
            return {
                logo: 'http://vietcore.com.vn/public/upload/logo/vietcore.png',
                menu: [],
                isActive: false
            }
        },
        components: {
            axios
        },
        async created() {
            await this.getMenu();
        },
        methods: {
            async getMenu() {
                let vm = this;
                let result = await vm.$Http.get('/menu').then(response => {
                    return response.data.menu;
                });

                function checkSub(item) {
                    if (typeof item !== 'undefined')
                        return true;
                    else
                        return false;
                };
                let dataMenu = [];
                result.parent[0].forEach((value) => {
                    let menu = {
                        ten: '',
                        slug: '',
                        sub: []
                    };
                    menu.ten = result.item[value].ten;
                    menu.slug = result.item[value].slug;
                    if (checkSub(result.parent[value])) {
                        result.parent[value].forEach((value2) => {
                            menu.sub.push(result.item[value2]);
                        });
                    }
                    dataMenu.push(menu)
                });
                vm.menu = dataMenu;
            },
            toogleMenu(){
                this.isActive = !this.isActive;
            },
            closeMenu(){
                if(this.isActive == true){
                    this.isActive = false;
                }
            }
        }
    }
</script>
<style scoped lang="scss">

</style>