import React, { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  useEffect(function () {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {min < 10 && 0}
      {min}:{sec}
    </div>
  );
}

export default Timer;
