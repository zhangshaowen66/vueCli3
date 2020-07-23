<template>
    <div>
        <h1>{{title[0].a[0].b}}</h1>
    </div>
</template>

<script>
    // sync 参数只能接收 变量不能直接接收字符串
    // 通过$emit和 update连用 更新父组件参数
    // 只能接受修改整体的data 不接受修改里面的某一参数
    export default {
        name: "child",
        props: ['title'],
        mounted () {
             // this.$emit('update:title[0].a[0].b', '112233') 不生效
              this.$emit('update:title', [{a: [{b: 123333}]}]) // 生效
        }
    }
</script>

<style scoped>

</style>