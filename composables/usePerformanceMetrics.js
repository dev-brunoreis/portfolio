import { ref, computed, onMounted, onUnmounted } from 'vue'

export function usePerformanceMetrics() {
    const loadTime = ref(0)
    const loadTimeInSeconds = computed(() => (loadTime.value / 1000).toFixed(2))
    const searchRanking = ref(null)
    const scriptsLoaded = ref(0)
    const cacheInfo = ref('')
    const metricsWorker = ref(null)

    if (typeof Worker !== 'undefined') {
        metricsWorker.value = new Worker(new URL('@/workers/metrics.js', import.meta.url))
    }

    onMounted(async () => {
        const timing = window.performance.timing
        loadTime.value = Math.round(timing.loadEventEnd - timing.navigationStart)
        scriptsLoaded.value = document.getElementsByTagName('script').length

        if (metricsWorker.value) {
            const resources = performance.getEntriesByType('resource').map(r => ({
                transferSize: r.transferSize,
                name: r.name
            }))

            metricsWorker.value.postMessage({ 
                resources,
                navigator: {
                    deviceMemory: navigator.deviceMemory,
                    hardwareConcurrency: navigator.hardwareConcurrency
                }
            })

            metricsWorker.value.onmessage = (e) => {
                const { cache } = e.data
                cacheInfo.value = cache
            }
        }
    })

    onUnmounted(() => {
        if (metricsWorker.value) {
            metricsWorker.value.terminate()
        }
    })

    return {
        loadTimeInSeconds,
        searchRanking,
        scriptsLoaded,
        cacheInfo
    }
} 