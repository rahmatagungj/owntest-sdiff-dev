const owntestSdiff = require("./owntest-sdiff")

let result = owntestSdiff.sdiff("abcss", "as23")
console.log(result)

result.forEach(function (element) {
  if (element.tag === "ADDED") {
    console.log("Added: " + element.value)
  }
  if (element.tag === "REMOVED") {
    console.log("Removed: " + element.value)
  }
  if (element.tag === "CHANGED") {
    console.log("Changed: " + element.value)
  }
})
