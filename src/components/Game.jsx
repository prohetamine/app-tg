import { useEffect, useState } from 'react'
import { useTonConnectUI } from '@tonconnect/ui-react'
import arrow from '../assets/arrow.png'
import useData from '../hooks/use-data'
import placeBid from '../fun/place-bid'
import mathPrize from '../lib/math-prize'

import { 
  GameMainOverflow,
  GameContainer,
  GameOpacityLayer,
  GameLayer,
  OverflowGameBlock,
  GameBlock,
  GamePlaceBidBlock,
  GamePlayer,
  GameBonus,
  GameNavigation,
  GamePixelBackground,
  GameEmptyBackground,
  NavigationTopOverflow,
  WrapperNavigationBlockButton,
  NavigationBlockButton,
  NatigationBlockTitle,
  NavigationOverflow,
  NavigationBlockMiddleTitle,
  NavigationBidsTitleOverflow,
  NavigationLeftDealOverflow,
  NavigationDealOverflow,
  NavigationLeftDealContainer,
  NavigationRightDealContainer,
  NavigationBidsRowsOverflow,
  NavigationRowOverflow,
  ButtonPlaceBid,
  RowText,
  RowLink,
  AngleIcon
} from '../styled'

const Game = ({ price, session, data: { images, map, player, bonus, cursor, background } }) => {
  const [tonConnectUI] = useTonConnectUI()
      , [step, angles, transactions] = useData({ map, session, price })
      , [selectBlock, setSelectBlock] = useState(0)

  const trace = map.trace.slice(0, step)

  useEffect(() => {
    setSelectBlock(trace.length - 1)
  }, [trace.length])

  useEffect(() => {
    const root = document.querySelector('body')
    root.style.backgroundImage = `url('${background}')`
    root.style.backgroundSize = 'cover'
  }, [background])

  const localTransactionHash = `${trace[selectBlock]}-${map.trace.join('').trim()}-${price}-${session}`

  const currentBlockBids = (transactions[localTransactionHash] || [])

  const bonusRatio = (map.schema[trace[selectBlock]]?.bonus !== undefined ? map.schema[trace[selectBlock]]?.bonus : -1) + 2
      , ratio = 1.5

  const currentPrize = mathPrize(currentBlockBids.length, price, ratio, bonusRatio, 10)

  return (
    <GameMainOverflow>
      <GameContainer>
        <GameOpacityLayer>
          {
            map.schema.map(
              (chunk, key) => (
                <OverflowGameBlock 
                  cursor={key === map.trace[step-1] ? cursor.pointer : cursor.notAllowed}
                  key={key} 
                  style={{ opacity: chunk.isShow ? 1 : 0.4 }}
                >
                  <GameBlock
                    rotate={chunk.rotate} 
                    src={images[chunk.image]}  
                  />
                  {
                    key === map.trace[step-2] 
                      ? (
                        null
                      )
                      : (
                        chunk.bonus !== undefined
                          ? (
                            <GameBonus src={bonus[chunk.bonus]} />
                          )
                          : (
                            null
                          )
                      )
                  }
                </OverflowGameBlock>
              )
            )
          }
        </GameOpacityLayer>
        <GameLayer
          onMouseMove={() => setSelectBlock(trace.length - 1)}
        >
          {
            map.schema.map(
              (chunk, key) => (
                <OverflowGameBlock 
                  onMouseMove={() => console.log(key)}
                  cursor={key === map.trace[step-1] ? cursor.pointer : cursor.notAllowed}
                  key={key} 
                  className={key === map.trace[selectBlock] ? 'blink' : ''}
                  style={{ opacity: trace.find(t => t === key) !== undefined ? 1 : 0.1 }}
                  onClick={
                    () => {
                      if (key === map.trace[step-1]) {
                        placeBid(tonConnectUI, session, key, map, price)
                      }
                    }
                  }
                >
                  <GameBlock
                    rotate={key === map.trace[step-1] ? (selectBlock === step-1 ? currentBlockBids[0]?.angle : angles[key]) : (angles[key] || 0)} 
                    src={images[chunk.image]}
                  />
                  {
                    key === map.trace[step-2] 
                      ? (
                        <GamePlayer src={player} />
                      )
                      : key === map.trace[step-1]
                          ? (
                            chunk.bonus !== undefined
                              ? (
                                <GameBonus src={bonus[chunk.bonus]} />
                              )
                              : (
                                null
                              )
                          )
                          : null
                  }
                  <GamePlaceBidBlock 
                    active={(key === map.trace[step-1]).toString()}
                  />
                </OverflowGameBlock>
              )
            )
          }
        </GameLayer>
      </GameContainer>
      <GameNavigation>
        <GamePixelBackground />
        <GameEmptyBackground>
          <NavigationTopOverflow>
            <NatigationBlockTitle>Block {trace[selectBlock]}</NatigationBlockTitle>
            <WrapperNavigationBlockButton>
              <NavigationBlockButton 
                src={arrow}
                style={{ 
                  opacity: trace[selectBlock-1] !== undefined ? 1 : 0.5,
                  cursor: trace[selectBlock-1] !== undefined ? 'pointer' : 'not-allowed', 
                }}   
                onClick={() => {
                  if (trace[selectBlock-1] !== undefined) {
                    setSelectBlock(s => s-1)
                  }
                }}
              />
              <NavigationBlockButton 
                src={arrow}
                style={{ 
                  opacity: trace[selectBlock+1] !== undefined ? 1 : 0.5, 
                  cursor: trace[selectBlock+1] !== undefined ? 'pointer' : 'not-allowed', 
                  transform: 'rotate(180deg)' 
                }} 
                onClick={() => {
                  if (trace[selectBlock+1] !== undefined) {
                    setSelectBlock(s => s+1)
                  }
                }}
              />
            </WrapperNavigationBlockButton>
          </NavigationTopOverflow>
          <NavigationOverflow>
            <NavigationBlockMiddleTitle>Bids history</NavigationBlockMiddleTitle>
            <NavigationBidsTitleOverflow>
              <RowText>FROM</RowText>
              <RowText>Tx Hash</RowText>
              <RowText style={{ width: '30px' }}>Angle</RowText>
            </NavigationBidsTitleOverflow>
            <NavigationBidsRowsOverflow 
              style={
                currentBlockBids.length > 0 
                  ? {} 
                  : {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }
              }>
              {
                currentBlockBids.length > 0
                  ? (
                    currentBlockBids.map(({ angle, path, address, angleWin, isLine }, key) => {
                      return (
                        <NavigationRowOverflow key={key}>
                          <RowLink target='_blank' href={`https://tonviewer.com/${address}`}>{address.slice(0, 4)}...{address.slice(-4)}</RowLink>
                          <RowLink target='_blank' href={`https://tonviewer.com/transaction/${path}`}>{path.slice(0, 4)}...{path.slice(-4)}</RowLink>
                          <AngleIcon line={isLine.toString()} color={angleWin ? '#47A82E' : '#A82E2E'} rotate={angle} />
                        </NavigationRowOverflow>
                      )
                    })
                  )
                  : (
                    <RowText style={{ width: 'auto', color: '#ccc' }}>Not found</RowText>
                  )
              }
            </NavigationBidsRowsOverflow>
          </NavigationOverflow>
          <NavigationOverflow>
            <NavigationBlockMiddleTitle>Deal</NavigationBlockMiddleTitle>
            <NavigationDealOverflow>
              <NavigationLeftDealOverflow>
                <NavigationLeftDealContainer style={{ backgroundColor: '#47A82E', borderRadius: '6px 6px 0px 0px' }}>
                  <RowText style={{ width: 'auto' }}>Winner: 💎 {currentPrize} ton</RowText>
                </NavigationLeftDealContainer>
                <NavigationLeftDealContainer style={{ backgroundColor: '#A82E2E', borderRadius: '0px 0px 6px 6px' }}>
                  <RowText style={{ width: 'auto' }}>Loser: 💎 {price} ton</RowText>
                </NavigationLeftDealContainer>
              </NavigationLeftDealOverflow>
              <NavigationRightDealContainer>
                <RowText style={{ width: 'auto', fontSize: '25px' }}>x{(n => n > 9 ? n.toFixed(0) : n.toFixed(2))(currentPrize / price)}</RowText>
                <RowText style={{ width: 'auto' }}>Profit ratio</RowText>
              </NavigationRightDealContainer>
            </NavigationDealOverflow>
            <ButtonPlaceBid
              style={trace[selectBlock] === trace[trace.length - 1] ? { filter: 'grayscale(0)', cursor: 'pointer' } : { filter: 'grayscale(1)', cursor: 'not-allowed' }}
              onClick={() => trace[selectBlock] === trace[trace.length - 1] ? placeBid(tonConnectUI, session, trace[trace.length-1], map, price) : null}
            >
              PLACE BID
            </ButtonPlaceBid>
          </NavigationOverflow>
        </GameEmptyBackground>
      </GameNavigation>
    </GameMainOverflow>
  );
}

export default Game
