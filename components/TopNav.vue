<script lang="ts" setup>
  const menus = ref([
    {
      label: 'Footwear',
      to: ''
    },
    {
      label: 'About Us',
      to: ''
    },
    {
      label: 'Products',
      to: ''
    },
    {
      label: 'Sale',
      to: ''
    },
  ])
</script>

<template>
  <nav class="w-full flex items-center justify-between">
    <img src="/logo.svg"/>
    
    <div class="flex">
      <a href="/" class="menu" v-for="menu in menus" :key="menu.label">
        <p>{{menu.label}}</p>
        <div class="menu-pointer h-2 w-2"></div>
      </a>
    </div>

    <div class="flex">
      <button class="menu-icon">
        <img src="/icons/ic_search.svg" alt="search">
      </button>
      <button class="menu-icon">
        <img src="/icons/ic_user.svg" alt="profile">
      </button>
      <button class="menu-icon">
        <img src="/icons/ic_cart.svg" alt="cart">
      </button>
    </div>
  </nav>
</template>

<style scoped>
  .menu {
    @apply p-4 font-semibold text-lg hover:text-magenta transition;
  }

  .menu-pointer {
    @apply opacity-0;
  }

  .menu:hover .menu-pointer {
    @apply opacity-100 w-2 h-2 rounded-full bg-magenta mx-auto transition;
  }
  
  .menu-icon {
    @apply p-4;
  }
</style>
