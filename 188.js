// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

//  

// 示例 1：

// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
// 示例 2：

// 输入：k = 2, prices = [3,2,6,5,0,3]
// 输出：7
// 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
//      随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
//  

// 提示：

// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

// 首先拿到所有波动的区间。
function func(k, prices) {
  let min = prices[0]
  let max = -1
  let end = false
  let ret = []
  for (let i = 0; i < prices.length && !end; i++) {
    if (max > prices[i]) {
      min != max && ret.push([min, max])
      min = prices[i]
      max = -1
    }
    if (min > prices[i]) {
      min = prices[i]
    } 
    if (max < prices[i]) {
      max = prices[i]
    }
  }
  min != max && ret.push([min, max])
  clearData(ret)
  tmp = ret.sort((a, b) => {
    const n = a[1] - a[0]
    const m = b[1] - b[0]
    if (n > m) {
      return -1
    } else if (n < m) {
      return 1
    } else {
      return 0
    }
  })

  let count = 0
  for (let i = 0; i < k; i++) {
    count += tmp[i][1] - tmp[i][0]
  }
  console.log(count)
}

// 合并波动区间有交集部分，将数组内元素数量降低到k个
function clearData(arr) {
  let i = 0; 
  while(i < arr.length) {
    let item = arr[i]
    let next = arr[i+1] || [0, 0]

    if (item[0] <= next[0] && item[1] >= next[0] && item[1] <= next[1]) {
      item[1] = next[1]
      arr.splice(i+1, 1)
    } else {
      i++
    }
  }
}

func(2, [3,2,6,5,0,3,2, 1, 10, 8, 1, 9])