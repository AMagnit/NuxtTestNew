<template>

  <head>

  </head>

  <span class="btn btn-secondary rounded-pill me-2">
    {{ id }}
  </span>

  <ProductDetails :product="product"/>


  <span type="button" class="btn btn-secondary rounded-pill me-2"
        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
    Tooltip on top
  </span>

  <button type="button" class="btn btn-secondary rounded-3"
          data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
    Popover on top
  </button>


</template>

<script setup>
import {onBeforeMount} from "vue";

const {id} = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

const {data: product} = await useFetch(uri, {key: id})

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found'})
}


definePageMeta({
  layout: "products"
})

useHead({
  title: 'Product: ' + product.value.title,

  meta: [
    {
      name: 'description', content: product.value.description,
    }
  ],

  link: [
    {
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }
  ]
})


onBeforeMount(() => {

  console.log(id)
})
</script>