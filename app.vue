<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
useHead({
    title: "Bruno Reis - Desenvolvedor Fullstack",
    meta: [
        { name: "description", content: "Freelancer especializado em soluções escaláveis e inovadoras." }
    ]
});

const colorMode = useColorMode();
</script>

<style>
* {
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: #ffffff;
    color: #1a1a1a;
    transition: background-color 0.3s ease, color 0.3s ease;
    scroll-behavior: smooth;
}

html.dark {
    background-color: #091a28;
    color: #ebf4f1;
}

.page-enter-active,
.page-leave-active {
    transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
