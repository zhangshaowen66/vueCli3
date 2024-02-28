<template>
  <div class="hello">
    <child :title.sync="test"></child>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <div class="audio"  @click="play(url)">
      <span>点击收听老师留言</span>
    </div>
    <downloadExcel :data="json_data" :fields="json_fields">
      Download Data
    </downloadExcel>
  </div>
</template>

<script>
  import child from './child.vue'

  import  {Model}  from '../config/mixins/more'

export default {
  name: 'HelloWorld',
    mixins: [Model],
    data () {
      return{
          title: '淘宝',
          test: [
              {
                  a: [
                      {
                          b:1
                      }
                  ]
              }
          ],
          url: '../assets/bba.amr',
          json_data: [
              {
                  name: "Tony Peña",
                  city: "New York",
                  country: "United States",
                  birthdate: "1978-03-15",
                  phone: {
                      mobile: "1-541-754-3010",
                      landline: "(541) 754-3010",
                  },
              },
              {
                  name: "Thessaloniki",
                  city: "Athens",
                  country: "Greece",
                  birthdate: "1987-11-23",
                  phone: {
                      mobile: "+1 855 275 5071",
                      landline: "(2741) 2621-244",
                  },
              },
          ],
          json_fields: {
                  'Complete name': 'name',
            'City': 'city',
            'Telephone': 'phone.mobile',
            'Telephone 2' : {
                field: 'phone',
                callback: (value) => {
                    return `Landline Phone - ${value.landline}`
                }
            }
        },

    }
    },
    mounted () {
      console.log(this.test, '11233')
        this.testMixin()
        this.tests()
    },
    components: {
      child
    },
    methods: {
      tests () {
          console.log(11)
/*          setTimeout(()=>{
              this.tests()
          }, 1000)*/
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
