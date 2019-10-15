import React from 'react';
import cx from 'classnames';

const Cell = ({ x, y, count, onClick, opened }) =>
  <div
    style={{
      position: 'absolute',
      left: `${x * 50}px`,
      top: `${y * 50}px`,
      width: '50px',
      height: '50px',
      border: '1px solid grey',
      background: 'white',
    }}
    className={cx({'opened': opened})}
    onClick={onClick}
  >
    {opened && count < 0 && (<>💩</>)}

    {opened && Boolean(count) && (<>{count}</>)}

    {!opened && (
      <>❓</>
    )}

  </div>

export default Cell;
