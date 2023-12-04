<template>
  About: {{data}}
</template>

<script setup>

const  {data} = await useFetch('/api/currency/GBP')
</script>