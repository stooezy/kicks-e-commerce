<script lang="ts" setup>
import YButton from "../components/common/YButton.vue";
import FeaturedProductSection from "~~/components/home/FeaturedProductSection.vue";</script>

<template>
  <div class="w-full flex flex-wrap bg-gray-100 justify-center">
    
    <!-- Hero -->
    <div class="p-8">
      <TopNav class="max-w-screen-2xl mx-auto"/>
      <div class="w-full max-w-screen-2xl mx-auto">
        <div class="w-full flex items-center h-full">
          <div class="w-full">
            <p class="mb-8 text-7xl max-w-3xl font-bold">Get your awesome sneakers.</p>
            <p class="mb-8 text-xl max-w-md text-dark-grey font-medium">We offer the best deals in our shop. Check them out now. We have awesome stuff on sale for you.</p>

            <div class="flex space-x-10 mb-16">
              <YButton>Shop Now</YButton>
              <button>
                <img src="/icons/ic_favorite.svg" alt="search">
              </button>
            </div>

            <div class="flex space-x-10">
              <div class="flex space-x-4 items-center">
                <img src="/icons/ic_check.svg" alt="features"> 
                <p class="text-dark-grey">Free shipping</p>
              </div>
              
              <div class="flex space-x-4 items-center">
                <img src="/icons/ic_check.svg" alt="features"> 
                <p class="text-dark-grey">Free returns</p>
              </div>
            </div>
          </div>

          <div class="w-full relative">
              <img class="w-full h-full" src="/icons/bg_decoration.svg" alt="">
              <img class="absolute inset-0 w-full h-full object-cover" src="/sample_image.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <FeaturedProductSection />
  </div>
</template>

<style scoped>
</style>
