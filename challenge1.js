const moves = [
    "a", "b", "c", "d"
]

function danceConvert(pin) {
    const result = pin
        .split("")
        .map(i => +i)
        .map((value, index) => {
            return (value + index) % moves.length
        })
        .map(t => moves[t])

    console.log(result)

    if (result.some(i => i === undefined)) {
        throw "Invalid input"
    }
    // if (
    //     result.filter(i => i !== undefined).length !== pin.length
    // ) {
    //     throw "Invalid input"
    // }


    return result
}

console.log(danceConvert("3544"))