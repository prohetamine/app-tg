import { beginCell, toNano } from '@ton/core'

const placeBid = (tonConnectUI, session, blockIndex, map, price) => {
  tonConnectUI.sendTransaction({
    validUntil: Date.now() + 5 * 60 * 1000,
    messages: [
      {
        address: 'UQDfFfEGASoutjXnOmkXStp3SExrFvpLJv9HoBtJfsrt1CUj',
        amount: toNano(price).toString(),
        payload: beginCell().storeUint(0, 32).storeStringTail(`app:${session}:${map.trace.join('')}:${price}:${blockIndex}:${Math.random().toString().replace(/\./gi, '')}`).endCell().toBoc().toString('base64')
      }
    ]
  })
}

export default placeBid