import { useState } from "react";
import { usersList } from "./Data.js";


const SlideData = () => {
  // user Details slider
  const [index, setIndex] = useState(0);
  const [isShow, setisShow] = useState(false);
  const hasNext = index < usersList.length - 1;
  const hasPrev = index > 0;

  const userNextHandle = () => {
    hasNext ? setIndex(index + 1) : setIndex(0);
  };

  const userPreviousHandle = () => {
    hasPrev ? setIndex(index - 1) : setIndex(usersList.length - 1);
  };

  let user = usersList[index];

  const ShowDetailsHandle = () => {
    setisShow(!isShow);
  };
  return (
    <>
      <div>
        <button onClick={userNextHandle}>Next</button>
        <button onClick={userPreviousHandle}>Previous</button>
        <h1>
          <i>
            {user.name} by {user.artist}
          </i>
        </h1>
        <h2>
          ({index + 1} of {usersList.length})
        </h2>
        <button onClick={ShowDetailsHandle}>{isShow?'hide':'showmore'}</button>
        {isShow && <p>{user.description}</p>}
        <img src={user.url} alt={user.alt} />
      </div>
    </>
  );
};

export default SlideData;
