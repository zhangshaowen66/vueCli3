<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="hh2" v-for="(item) in 20" :key="item">{{item}}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="swiper-button-prev" ></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import "swiper/css/swiper.css";

    export default {
        data () {
            return {
                swiperOption: {
                    // API
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    loop: true,
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 4000,
                    },
                    slidesPerView: 5,
                    spaceBetween: 30,
                }
            }
        },
        computed: {
            swiper () {
                return this.$refs.mySwiper.$swiper
            }
            // 提供一个可操作的swiper对象
        },
        components: {
            Swiper,
            SwiperSlide
        }
    }
</script>
<style>
    .hh2{
        height: 200px;
        background: red;
    }
</style>
