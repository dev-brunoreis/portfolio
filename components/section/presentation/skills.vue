<template>
    <div class="flex gap-2 flex-wrap">
        <div v-for="skill in skills" :key="skill" class="relative group">
            <Icon :name="skill" class="size-8 transition-transform duration-200 group-hover:-translate-y-1" />
            <span class="absolute top-[80%] left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-y-1 pointer-events-none z-10">
                {{ getSkillName(skill) }}
            </span>
        </div>
    </div>
</template>

<script setup>
const skills = [
    'skill-icons:php-dark',
    'skill-icons:docker',
    'skill-icons:laravel-dark',
    'skill-icons:vuejs-dark',
    'skill-icons:nuxtjs-dark',
    'skill-icons:tailwindcss-dark',
    'skill-icons:mysql-dark',
    'skill-icons:aws-dark',
    'skill-icons:nginx',
    'skill-icons:git',
    'skill-icons:wordpress',
    'skill-icons:webpack-dark',
    'skill-icons:vite-dark',
    'skill-icons:symfony-dark',
    'skill-icons:pinia-dark',
    'skill-icons:cloudflare-dark',
    'skill-icons:heroku',
    'skill-icons:html',
    'skill-icons:markdown-dark'
]

function getSkillName(skillIcon) {
    return skillIcon.replace('skill-icons:', '').replace('-light', '').replace('-dark', '').split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
}
</script>