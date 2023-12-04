<template>

  <div>
    <div class="grid grid-cols-4 gap-5">

      <div v-for="p in products">
        <ProductCars :product="p" />
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products"
})

const {data: products } = await useFetch('https://fakestoreapi.com/products')


useHead({
  title: 'Products list | Merch',

  meta: [
    {
      name: 'description', content: 'Products catalog',
    }
  ],

  link: [
    {
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }
  ]
})
</script>