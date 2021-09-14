<template>
    <div>
        <div>
            111
        </div>
        <div v-if="v">22222333</div>
        <button @click="v=true">显示</button>
        <button @click="v=false">隐藏</button>
    </div>
</template>

<script>
    export default {
        name: "regular",
        data () {
            return {
                v: false
            }
        },
        mounted () {
/*            let time1 = '02:59'
            let reg = /^([0-9]{0,2}):([0-9]{0,2})$/g
            console.log(reg.test(time1));*/

            var s = "5241111>11qqqq>>";
            var regs = /([>~])(?=.*\1{2})|(['" ])/g;
            console.log(regs.test(s));
        }
    }
</script>

<style scoped>

</style>