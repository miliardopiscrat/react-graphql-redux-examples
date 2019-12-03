import React, { useEffect, useState } from 'react';

export const App = () => {
  // const [m, setMessage] = useState<Message>({ message: '' });
  //
  // useEffect(() => {
  //   fetch('/api')
  //     .then(r => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to tutorial-react!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>

    </>
  );
};

export default App;
