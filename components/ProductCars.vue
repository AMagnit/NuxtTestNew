<template>

  <div class="card text-center" style="text-align: center">

    <img :src="product.image" alt="some product" style="max-height: 200px">

    <p class="font-bold text-gray-500 m-4 truncate">
      <NuxtLink :to="'/products/' + product.id">

        {{product.title}}

        <p class="btn my-4">
          View Details
        </p>
      </NuxtLink>
    </p>

  </div>

</template>

<script setup>


const {product} = defineProps(['product'])

</script>