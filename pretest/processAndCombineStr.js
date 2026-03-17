function processAndCombineString(Strings, lengthThreshold) {
    const Filter_Srt = Strings.filter((str) => {
        return str.length >= lengthThreshold
    })
    // console.log(Filter_Srt)
    const Upper_Str = Filter_Srt.map((str) => {
        return str.toUpperCase()
    })
    console.log(Upper_Str)
}

const strings = ["apple", "banana", "cherry", "date", "fig", "grape"];

console.log(processAndCombineString(strings, 5));
// console.log(processAndCombineString(strings, 6));