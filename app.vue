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
</script>

<style>
* {
    font-family: "GeistMono",ui-monospace,SFMono-Regular,Roboto Mono,Menlo,Monaco,Liberation Mono,DejaVu Sans Mono,Courier New,monospace;
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

.page-enter-active,
.page-leave-active {
    transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
