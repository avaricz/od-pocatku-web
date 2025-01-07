<template>
    <div class="gallery-container">
      <button class="gallery-button left" @click="scrollLeft">◀</button>
      <div class="gallery-wrapper" ref="galleryWrapperRef">
        <div 
          v-for="img in media" 
          :key="img.src"
          class="img-wrapper"
        >
          <NuxtImg :src="img.src" :width="720"/>
        </div>
      </div>
      <button class="gallery-button right" @click="scrollRight">▶</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const galleryWrapperRef = ref(null);
  
  const scrollLeft = () => {
    if (galleryWrapperRef.value) {
      galleryWrapperRef.value.scrollBy({
        left: -720, // Adjust scroll amount as needed
        behavior: "smooth"
      });
    }
  };
  
  const scrollRight = () => {
    if (galleryWrapperRef.value) {
      galleryWrapperRef.value.scrollBy({
        left: 720, // Adjust scroll amount as needed
        behavior: "smooth"
      });
    }
  };
  
  defineProps({
    media: {
      type: Array,
      default: () => []
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .gallery-container {
    display: flex;
    align-items: center;
    background: black;
    height: 480px;
    position: relative;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    margin: 2rem 2rem 2rem 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover img {
        scale: 1.05;
    }
  }
  
  .gallery-wrapper {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    height: 100%;
    flex: 1;
  
    /* Hide scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .gallery-wrapper::-webkit-scrollbar {
    display: none;
  }
  
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
  }
  
  .img-wrapper img {
    width: auto;
    height: 100%;
    object-fit: contain; /* Ensures the entire image is visible */
    transition: all ease 0.5s;
  }
  
  .gallery-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ffffff50;
    color: black;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .gallery-button.left {
    left: 10px;
  }
  
  .gallery-button.right {
    right: 10px;
  }
  
  .gallery-button:hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }
  </style>
  