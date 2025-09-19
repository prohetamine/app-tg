/* eslint-disable no-unused-vars */
import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { TonConnectButton } from '@tonconnect/ui-react'
import Select from './components/Select.jsx'
import Game from './components/Game.jsx'
import allowRequestApi from './lib/allow-request-api.js'
import { Body, Header } from './styled'

import snake1 from './assets/games/snake1'
import snake2 from './assets/games/snake2'
import snake3 from './assets/games/snake3'

const games = {
  '1': snake1,
  '2': snake2,
  '3': snake3,
}

// стены

const App = () => {
  const session = 'snake2'
      , [gameId, setGameId] = useLocalStorageState(1, { defaultValue: 0.01 })
      , [price, setPrice] = useLocalStorageState(0.01, { defaultValue: 0.01 })

  return (
    <Body>
      <Header>
        <Select
          items={[
            { label: '🐍 #1', id: 1 },
            { label: '🐍 #2', id: 2 },
            { label: '🐍 #3', id: 3 }
          ]} 
          value={gameId} 
          onChange={id => setGameId(id)}   
        />
        <Select 
          items={[
            { label: '0.01', id: 0.01 }, 
            { label: '0.05', id: 0.05 },
            { label: '0.1', id: 0.1 },
            { label: '0.2', id: 0.2 },
            { label: '0.3', id: 0.2 },
            { label: '0.4', id: 0.4 },
            { label: '0.5', id: 0.5 },
            { label: '1', id: 1 },
            { label: '5', id: 5 },
            { label: '10', id: 10 }
          ]} 
          value={price} 
          onChange={id => setPrice(id)}       
        />
        <TonConnectButton />
      </Header>
      <Game 
        session={session} 
        price={price}
        data={games[gameId]}
      />
    </Body>
  );
}

export default App