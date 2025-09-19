/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import TonWeb from 'tonweb'
import hashToPath from './../lib/hash-to-path.js'
import sleep from 'sleep-promise'
import { toNano } from '@ton/core'

;(global || window).LOADDATA = []
;(global || window).used = {}

const account = (new TonWeb.utils.Address('UQDfFfEGASoutjXnOmkXStp3SExrFvpLJv9HoBtJfsrt1CUj')).toString(false)

const loadData = async () => {
  for (let x = 0; x < 10; x++) {
    try {
      const { transactions } = await fetch(`https://toncenter.com/api/v3/transactions?account=${account}&limit=1000&offset=${x * 1000}`).then(e => e.json())
      const _transactions = transactions?.filter(data => data.in_msg && data.in_msg.value).filter(data => data.in_msg.value) || []

      for (let y = 0; y < _transactions.length; y++) {
        const _transaction = _transactions[y]

        const comment = _transaction?.in_msg?.message_content?.decoded?.comment || ''

        const [type, session, trace, price, blockIndex] = comment.split(':') || [null, null, null, null, null]
            , randNumber = hashToPath(_transaction.hash).slice(-3).split('').map(data => data.charCodeAt()).reduce((ctx, elem) => ctx + elem, 0)
            , path = hashToPath(_transaction.hash)
            , address = (new TonWeb.utils.Address(_transaction.in_msg.source)).toString(true, false, false).replace(/\//gi, '_')
            , created_lt = parseInt(_transaction.in_msg.created_lt)
        
        if (type === 'app' && blockIndex !== undefined && !!toNano(price)) {
          if (!(global || window).used[path]) {
            console.log(comment)
          }

          if (!(global || window).used[path]) {
            ;(global || window).used[path] = true
            ;(global || window).LOADDATA = [
              ...(global || window).LOADDATA, 
              { type, session, blockIndex, trace, price, randNumber, path, address, created_lt }
            ].sort((a, b) => b.created_lt - a.created_lt)
          }
        }
      }

      for (;!(global || window).allowRequestAPI();) {
        await sleep(1000)
      }
    } catch (err) {
      console.log(err)
      for (;!(global || window).allowRequestAPI();) {
        await sleep(10000)
      }
    }
  }

  await sleep(1000)
  await loadData()
}

loadData()

export default () => {}