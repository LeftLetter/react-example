import '../src/assets/styles/index.scss'

// MSWの実行
if (typeof global.process === 'undefined') {
  const { worker } = require('../src/mocks/browser')
  worker.start()
}

export const parameters = {
  // 設定が必要であれば追記
}
