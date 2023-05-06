<template>
  <div class="wrap">
    <input type="text" class="input" v-model="inputText" placeholder="search">

    <div class="box">
      <!-- left -->
      <div class="left">
        <div
          :class="{'item': getTitle(item.title).length > 0}"
          v-for="(item, index) in getData"
          :key="item.id"
          @click="handleClick(index)"
        >
          {{ getTitle(item.title) }}
        </div>
      </div>
      <!-- right -->
      <div class="right">
        {{  currentData.detail  }}
        <button class="hidden-btn" @click="handleHidden">隐藏当前项</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';

  const props = defineProps({
    data: {
      type: Array,
      default: [],
      required: true
    }
  })

  const inputText = ref('');
  const currentData = ref({});

  const newData = reactive(props.data.map((item, index) => {
    return {
      ...item,
      id: index,
    }
  }))

  /**
   * @desc 点击title
   */
  const handleClick = (index) => { currentData.value = newData[index];}

  /**
   * @desc 隐藏当前项
   */
  const handleHidden = () => {
    let index = newData.findIndex(item => item.id === currentData.value.id)
    newData.splice(index, 1);

    currentData.value = {};
  }

  /**
   * @desc 筛选标题
   */
  const getTitle = (title) => {
    if (typeof title === 'object' || typeof title === 'undefined') {
      return '';
    }
    return title;
  }

  /**
   * @desc 筛选数据
   */
  const getData = computed(() => {
    if (inputText.value === '') {
      return newData;
    }
    return reactive(newData.filter((item) => {
      const conditionTitle = typeof item.title === 'string' && item.title.includes(inputText.value);
      const conditionDetail = typeof item.detail === 'string' && item.detail.includes(inputText.value);

      if (conditionTitle && conditionDetail) {
        return true;
      }
      return false;
    }))
  })


</script>

<style>
  .wrap {
    display: flex;
    flex-direction: column;
  }

  .box {
    border: 1px solid green;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 20px;
  }

  .left {
    width: 25%;
    border: 1px solid blue;
  }

  .right {
    flex: 1;
  }

  .input {
    width: 10%;
  }
</style>