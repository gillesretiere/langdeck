import React, {useState} from 'react';
import ChatRoom from './ChatRoom';

const HomeCnx = ({startingDeck}) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(!show)}>
          {show ? 'Close chat' : 'Open chat'}
        </button>
        {show && <hr />}
        {show && <ChatRoom />}
      </>
    );
}

export default HomeCnx