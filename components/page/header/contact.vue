<script setup>
const githubLink = ref('https://github.com/dev-brunoreis');
const linkedinLink = ref('https://www.linkedin.com/in/bruno-queirozrq/');
</script>

<template>
    <div class="flex justify-between items-center gap-4">
        <a target="_blank" :href="githubLink" class="p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all ease-in">
            <Icon class="flex size-5" name="uil:github" />
        </a>
        <a target="_blank" :href="linkedinLink" class="p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all ease-in">
            <Icon class="flex size-5" name="uil:linkedin" />
        </a>
    </div>
</template>