<template>
  <div class="home">
    <NavbarCompVue />
    <main class="py-5">
      <div class="container">
        <h3 class="fw-bold">Silahkan login terlebih dahulu.</h3>
        <p class="text-secondary">
          Untuk pesan makanan, anda harus login terlebih dahulu.
        </p>
        <div class="d-flex flex-column gap-2 mb-4">
          <label for="Email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Masukkan email anda"
          />
        </div>

        <router-link to="/menus">
          <button class="btn btn-primary">Login</button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarCompVue from "@/components/NavbarComp.vue";

export default {
  name: "HomeView",
  components: {
    NavbarCompVue,
  },
};
</script>
