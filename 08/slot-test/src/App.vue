<template>
  <div>
    <NoSlotTest />
    <br />
    <SlotTest />
    <br />
    <NamedSlotTest />
  </div>
</template>


<script setup>
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
import NamedSlotTest from './components/NamedSlotTest.vue';
</script>