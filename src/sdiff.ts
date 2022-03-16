export function sdiff(str1: string, str2: string): any[] {
  let diffs: any[] = []

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (str1[i] !== str2[i]) {
      if (str2[i] === undefined) {
        diffs.push({ tag: "REMOVED", value: str1[i], index: i, to: "" })
      } else if (str1[i] === undefined) {
        diffs.push({
          tag: "ADDED",
          value: str1[i] || "",
          index: i,
          to: str2[i] || "",
        })
      } else if (str1[i] !== str2[i]) {
        diffs.push({
          tag: "CHANGED",
          value: str1[i],
          index: i,
          to: str2[i] || "",
        })
      } else {
        throw new Error("Unable to diff strings")
      }
    }
  }

  return diffs
}
