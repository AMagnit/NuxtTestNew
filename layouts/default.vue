<template>

  <div>
    <header class="shadow-sm bg-white">

      <nav class="container mx-auto p-4 flex justify-between">

        <NuxtLink to="/" class="font-bold">Main</NuxtLink>

        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/products/221">221</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/222">222</NuxtLink>
          </li>
        </ul>

      </nav>

    </header>

    <!--    Page Content-->
    <div class="container mx-auto p-4">
      <slot/>
    </div>


  </div>
</template>

<style scoped>

.router-link-exact-active {
  color: #00dc82;
}

</style>
<script setup lang="ts">
</script>