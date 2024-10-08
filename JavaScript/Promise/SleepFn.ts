// 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。
async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis))
}


/** 
 * 测试样例
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */