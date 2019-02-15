<template>
    <div id="app" class="page">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        name: "MasterLayout",
        components:{
            Header,
            Footer
        }
    }
</script>

<style lang="scss">
    @import "./assets/css/tabler.css";
    @import "./assets/scss/main";

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
