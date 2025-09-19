/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import loadData from './../fun/load-data.js'

const prices = ['0.01', '0.05', '0.1', '0.2', '0.3', '0.4', '0.5', '1', '5', '10']

const useData = ({ map, session, price }) => {
  const [step, setStep] = useState(1)
      , [angles, setAngles] = useState(Array(30).fill(0))
      , [transactions, setTransactions] = useState({})

  useEffect(() => {  
    const load = async () => {
      const transactions = {}    
      const data = window.LOADDATA || []

      for (let x = 0; x < data.length; x++) {
        const { type, session: _session, blockIndex, trace, price: _price, randNumber, path, address, created_lt } = data[x]

        if (
          type === 'app' && 
          session === _session && 
          parseFloat(price) === parseFloat(_price) && 
          prices.find(price => price === _price) !== undefined && 
          map.trace.join('').trim() === trace.trim()
        ) {
          const angle = randNumber % (map.schema[blockIndex]?.image === 'line' ? 2 : 4)
              , mathAngle = (map.schema[blockIndex].rotate - 90) + (angle * 90)

          const localTransactionHash = `${blockIndex}-${trace.trim()}-${_price}-${_session}`

          const isExistWinner = !(transactions[localTransactionHash] || []).find(({ angleWin }) => angleWin)

          transactions[localTransactionHash] = [
            ...(transactions[localTransactionHash] || []), 
            { 
              path,
              address, 
              angle: ((map.schema[blockIndex].rotate - 90) + (angle * 90)), 
              isLine: map.schema[blockIndex]?.image === 'line',
              angleWin: isExistWinner && mathAngle === map.schema[blockIndex]?.rotate,
              blockIndex,
              created_lt
            }
          ].sort((a, b) => b.created_lt - a.created_lt)

          if (isExistWinner && mathAngle === map.schema[blockIndex]?.rotate) {
            setStep(() => Object.keys(transactions).map(localTransactionHash => (transactions[localTransactionHash] || []).find(({ angleWin }) => angleWin)).filter(w => w).length + 1)
            setAngles(angles => angles.map((angle, i) => i === parseInt(blockIndex) ? mathAngle : angle))
          }
        }
      }

      setTransactions(transactions)
    }

    const intervalId = setInterval(load, 500)

    return () => {
      setTransactions({})
      setAngles(Array(30).fill(0))
      setStep(1)
      clearInterval(intervalId)
    }
  }, [session, map, price])

  return [step, angles, transactions]
}

export default useData