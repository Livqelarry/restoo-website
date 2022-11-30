<template>
  <div class="card-menu p-3 rounded d-flex justify-content-between mb-3">
    <div class="d-flex flex-column justify-content-between">
      <div>
        <h3 class="fw-bold mb-0">{{ item.title }}</h3>
        <p class="mb-0">{{ item.desc }}</p>
      </div>
      <p class="mb-0">{{ item.price }}</p>
    </div>
    <div class="d-flex flex-column align-items-end">
      <img class="img-product rounded mb-2" src="/img/dummy.jpg" alt="dummy" />
      <button
        v-if="showButton"
        @click="tambah"
        class="btn btn-menu btn-outline-primary"
      >
        tambah
      </button>
      <div v-else class="d-flex align-items-center gap-3">
        <button class="btn btn-transparent" @click="kurang">
          <img src="/img/icon-minus.svg" alt="minus" />
        </button>
        <p class="mb-0">{{ item.selected }}</p>
        <button class="btn btn-transparent" @click="tambah">
          <img src="/img/icon-add.svg" alt="add" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMenus",
  props: ["item"],
  data() {
    return {
      showButton: true,
    };
  },
  methods: {
    tambah() {
      this.$emit("tambah", this.item.id);
      if (this.item.selected == 0) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    kurang() {
      this.$emit("kurang", this.item.id);
      if (this.item.selected == 0) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
  },
  mounted() {
    if (this.item.selected == 0) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  },
};
</script>

<style>
</style>