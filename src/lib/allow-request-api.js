/* eslint-disable no-undef */

;(global || window).allowRequestAPI = (() => {
    let date = Date.now()
    return () => {
      const sleep = 3000 + parseInt(Math.random() * 2000)

      if (Date.now() > date + sleep) {
          date = Date.now()
          return true
      } else {
          return false
      }
    }
})()

export default () => {}