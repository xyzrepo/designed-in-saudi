<template>
<div class="bg-gray-50">
    <!-- <Banner url="https://xyz.dev" /> -->
    <Nav />
    <router-view/>
    <Footer :navigation="content.footer"/>
</div>
</template>
<script setup>
import content from '@content';
</script>