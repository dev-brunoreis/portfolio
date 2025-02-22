<template>
    <footer class="md:max-w-[1024px] w-[90%] text-right mx-auto text-[10px]">
        <div class="flex flex-wrap justify-between gap-2">
            <div class="flex text-gray-400">
                <a title="humans.txt" class="underline" target="_blank" href="/humans.txt">humans.txt</a>
            </div>
            <div class="flex gap-2 text-gray-300">
                <span v-if="searchRanking">Ranking: {{ searchRanking }}</span>
                <span class="italic" title="Scripts carregados">Scripts: {{ scriptsLoaded }}</span>
                <span class="italic" title="Cache utilizado" v-if="cacheInfo">Cache: {{ cacheInfo }}</span>
                <span class="italic" title="Tempo total de carregamento">Tempo de carregamento: {{ loadTimeInSeconds }}s</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { usePerformanceMetrics } from '@/composables/usePerformanceMetrics'

const { loadTimeInSeconds, searchRanking, scriptsLoaded, cacheInfo } = usePerformanceMetrics()
</script>