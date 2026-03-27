<template>
  <div class="about">
    <h1>This Use mixin</h1>
    <!-- <div>{{ ds }}</div> -->

    <b-row>
      <b-col sm="2">
        <b-form-select v-model="level" @input="levelChange" :options="[
          { value: 7, text: 'user' },
          { value: 8, text: 'manager' },
          { value: 9, text: 'Admin' },
        ]">
        </b-form-select>

      </b-col>
      <b-col sm="10">

        <ol>
          <li v-for=" x in ds " :key="x.id">
            <template v-if="x.children == undefined">{{ x }}</template>
            <template v-else>
              {{ x.id }} - {{ x.label }} - {{ x.path }}
              <ol>
                <li v-for="y in x.children" :key="y.id">{{ y }}</li>
              </ol>
            </template>

          </li>
        </ol>


      </b-col>
    </b-row>


  </div>
</template>
<script>
import myMixin from "@/myMixin";
import menuMixin from "@/menuMixin"
export default {
  name: 'HomeView',
  mixins: [
    myMixin,
    menuMixin
  ],
  components: {
  },
  data() {
    return {
      ds: [],
      level: 9
    }
  },
  mounted() {
    let ar = [];
    this.getMenuByLevel(this.level)
      .forEach(x => {
        ar.push(x);
      });
    this.ds = ar;
  },
  methods: {
    levelChange() {
      let ar = [];
      this.getMenuByLevel(this.level)
        .forEach(x => {
          ar.push(x);
        });
      this.ds = ar;
    }
  }
}
</script>

