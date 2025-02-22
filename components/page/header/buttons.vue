<script setup>
const githubLink = ref('https://github.com/dev-brunoreis')
const whatsappLink = ref('')

onMounted(() => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
    const message = encodeURIComponent('Oi, quero fazer um orçamento!')
    whatsappLink.value = `https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?phone=5543988488170&text=${message}`
})
</script>

<template>
    <header>
        <div class="flex justify-between items-center gap-4 group">
            <a :href="githubLink" target="_blank">
                <Icon name="skill-icons:github-dark" class="size-6 flex cursor-pointer transition-transform duration-200 group-hover:-translate-y-1" />
            </a>
        </div>
    </header>
</template>