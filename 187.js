// 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

// 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

//  

// 示例 1：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]
// 示例 2：

// 输入：s = "AAAAAAAAAAAAA"
// 输出：["AAAAAAAAAA"]

function func(s, len) {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    const subStr = s.substring(i, i+10)
    if (obj[subStr]) {
      obj[subStr]++
    } else {
      obj[subStr] = 1
    }
  }

  const ret = []
  Object.keys(obj).forEach((item) => {
    if (obj[item] > 1) {
      ret.push(item)
    }
  })
  return ret
};

console.log(func("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", 10))

