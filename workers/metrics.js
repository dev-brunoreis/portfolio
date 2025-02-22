self.onmessage = async (e) => {
    const { resources, navigator } = e.data
    
    const cachedResources = resources.filter(r => r.transferSize === 0).length
    const totalResources = resources.length
    const cacheInfo = `${cachedResources}/${totalResources}`

    let memory = 'N/A'
    if (navigator.deviceMemory) {
        memory = `${navigator.deviceMemory}GB`
    }

    self.postMessage({
        cache: cacheInfo,
        resources: totalResources,
        memory: memory
    })
} 