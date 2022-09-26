export let randomNumber0 =  function(exclusiveBound) {
    return Math.floor(Math.random(exclusiveBound))
}

export let randomNumber1 = function(inclusiveBound) {
    return Math.floor(Math.random(inclusiveBound)) + 1
}

export let randomNumberCustom = function(startBound, range) {
    let bound = range - startBound
    return Math.floor(Math.random(bound)) + startBound
}

