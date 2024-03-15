<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  name: { value: string; categoryIdList: number[]; categoryId: number } = {
    categoryId: 123,
    categoryIdList: [123],
    value: "",
  };

  get nameWithHello() {
    return this.name;
  }

  async beforeMount() {
    this.name.categoryId = Math.random() * 100;

    if (this.name.categoryId === 20) this.name.categoryId = 1;
  }
}
</script>
