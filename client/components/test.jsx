import React, { useContext } from 'react';

function Test(props) {
  const { speach } = props;
  const test = useContext(window.testContext);
  return (
    <div>
      {console.log(speach)}
    </div>
  );
}

export default Test;
