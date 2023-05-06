<template>
  <ListAndDetail :data="data" />
</template>

<script setup>
  import { reactive } from 'vue';
  import ListAndDetail from './components/listAndDetail/index.vue';

  const data = reactive([
    {
      title: 'title1',
      detail: 'detail1',
    },
    {
      title: 'title',
      detail: 'detail2'
    },
    {
      title: 'title',
      detail: 'detail3'
    },
    {
      title: 123,
      detail: 'detail'
    },
    {
      title: {},
      detail: 'detail'
    },
    {
      title: null,
      detail: 'detail'
    },
    {
      title: undefined,
      detail: 'detail'
    },
    {
      title: '1',
      detail: '1'
    },
    {
      title: 'some',
      detail: 'some'
    },
  ])

</script>

<style scoped>
  .wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
