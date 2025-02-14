<script setup>
import { computed } from 'vue'

const colorMode = useColorMode()
const githubLink = ref('https://github.com/dev-brunoreis')
const whatsappLink = ref('')

const iconName = computed(() => (colorMode.value === 'dark' ? 'uil:sun' : 'uil:moon'))

const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
    whatsappLink.value = isMobile
        ? 'whatsapp://send?phone=5543988488170'
        : 'https://web.whatsapp.com/send?phone=5543988488170'
})
</script>

<template>
    <header>
        <div class="flex justify-between items-center gap-4">
            <a target="_blank" :href="whatsappLink"
                class="p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ease-in">
                <Icon class="flex size-6" name="uil:whatsapp" />
            </a>

            <a target="_blank" :href="githubLink"
                class="p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ease-in">
                <Icon class="flex size-6" name="uil:github" />
            </a>

            <div @click="toggleColorMode"
                class="p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ease-in">
                <Icon :name="iconName" class="size-6 flex" />
            </div>
        </div>
    </header>
</template>