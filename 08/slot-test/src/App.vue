<template>
  <div>
    <NoSlotTest />
    <br />
    <SlotTest />
    <br />
    <NamedSlotTest />
    <br />
    <ScopedSlotTest />
  </div>
</template>


<script setup>
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
import NamedSlotTest from './components/NamedSlotTest.vue';
import ScopedSlotTest from './components/ScopedSlotTest.vue';
</script>