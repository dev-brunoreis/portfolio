<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
    if (window.scrollY > 50) {
        isSticky.value = true;
    } else {
        isSticky.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div :class="[
        'h-14',
        isSticky ? 'fixed top-0 left-0 right-0 bg-white shadow-md bg-white/50 backdrop-blur-lg' : 'relative'
    ]">
        <div class="md:max-w-[1024px] w-[90%] items-center justify-between mx-auto h-full flex">
            <PageHeaderNavigation class="flex" />
            <PageHeaderButtons class="flex" />
        </div>
    </div>
</template>

<style scoped>
.fixed {
    z-index: 50;
}
</style>
