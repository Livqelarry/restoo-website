<template>
  <div class="card-menu p-3 rounded d-flex justify-content-between mb-3">
    <div class="d-flex flex-column justify-content-between">
      <div>
        <h3 class="fw-bold mb-0">{{ item.nama }}</h3>
        <p class="mb-0">Dekripsi makanan</p>
      </div>
      <p class="mb-0">{{ this.formatNumberGlobal(item.harga) }}</p>
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
        <p class="mb-0">1</p>
        <button class="btn btn-transparent" @click="tambah">
          <img src="/img/icon-add.svg" alt="add" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import script from "@/mixins/script";
export default {
  name: "CardMenus",
  props: ["item"],
  data() {
    return {
      showButton: true,
    };
  },
  mixins: [script],
  methods: {
    tambah() {
      this.$emit("tambah", this.item.id);
    },
    kurang() {
      this.$emit("kurang", this.item.id);
    },
  },
};
</script>

<style>
</style>