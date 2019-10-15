import React, { useState } from 'react';
import Header from './components/Header';
import Cell from './components/Cell';
import * as apiMethods from './utils/apiMethods';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gameId, setGameId] = useState();
  const [cells, setCells] = useState([]);

  const mergeCells = (newCells) => setCells([...cells, ...newCells]);


  const handleCreateNewGame = async () => {
    setIsLoading(true);

    const { game } = await apiMethods.createNewGame();

    setGameId(game.id);

    setIsLoading(false);
  }

  const handleCellClick = async ({ x, y }) => {
    setIsLoading(true);

    const data = await apiMethods.revealCell({ gameId, coordinates: { x, y }} )

    if (data.cells) {
      mergeCells(data.cells)
    }

    setIsLoading(false);
  }

  return (
    <>
      <Header />

      <main className="container" style={{ marginTop: '10px' }}>

        <h2>Game {gameId}</h2>

        {!gameId && (
          <button className="btn btn-default btn-ghost" onClick={handleCreateNewGame}>Create new game</button>
        )}

        {gameId && (
          <div style={{ position: 'relative', outline: '1px solid gray', width: '500px', height: '500px'}}>
            {[...Array(10).keys()].map((row) => (
              <React.Fragment key={row}>
              {[...Array(10).keys()].map((cell) => (
                <Cell
                  key={`${row}-${cell}`}
                  x={row}
                  y={cell}
                  onClick={() => handleCellClick({ x: row, y: cell })}
                />
              ))}
              </React.Fragment>
            ))}

            {Boolean(cells.length) && (
              <>
                {cells.map((cell, idx) => (
                  <Cell
                    key={idx}
                    {...cell}
                    opened
                    onClick={() => handleCellClick(cell)}
                  />
                ))}
              </>
            )}
          </div>
        )}

        {isLoading && (
          <div className="loading" />
        )}

      </main>
    </>
  );
}

export default App;


