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

export let randomizeIfNullExcl = (val, bound) => {
    return (val !== null ? val : randomNumber0(bound))
}
export let randomizeIfNullIncl = (val, bound) => {
    return (val !== null ? val : randomNumber1(bound))
}
export let randomizeIfNullCustom = (val, bound1, bound2) => {
    return (val !== null ? val : randomNumberCustom(bound1, bound2))
}