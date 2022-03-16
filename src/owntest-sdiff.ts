import { sdiff } from "./sdiff"

let owntestSdiff: any = {
  sdiff: (str1: string, str2: string) => sdiff(str1, str2),
}

export default owntestSdiff
module.exports = owntestSdiff
