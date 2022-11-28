
export let randomNumber0 =  function(exclusiveBound) {
    return Math.floor(exclusiveBound*Math.random(exclusiveBound))
}

export let randomNumber1 = function(inclusiveBound) {
    return Math.floor(inclusiveBound*Math.random()) + 1
}

export let randomNumberCustom = function(startBound, range) {
    let bound = range - startBound
    return Math.floor(bound*Math.random()) + startBound
}

export let randomizeIfNullExcl = (val, bound) => {
    return (val !== null ? val : randomNumber0(bound))
}
export let randomizeIfNullIncl = (val, bound) => {
    return (val !== null ? val : randomNumber1(bound))
}
export let randomizeIfNullCustom = (val, bound1, bound2) => {
    return (val !== null ? val : randomNumberCustom(bound1, bound2))
}

export let rollGreaterThanPercentile = (bound, percentile) => {
    //logarithmic?
    return randomNumberCustom(bound, 100) > percentile
}