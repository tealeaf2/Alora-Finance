import React, { useState, useEffect } from "react";
// Keep this in for later use down the line

function Adspace() {
  const [ad, setAd] = useState(null);

  useEffect(() => {

    fetch("https://picsum.photos/320", { // 320 so it takes up 25% of the space, therefore filling in the space to the left of the horiz. line
      method: "GET",

    })
      .then((response) => {

        setAd(response.url); // removed the data array thing
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ad-space">
      <img src={ad} alt="ad-image-not-working"></img>
    </div>
  );
}

export default Adspace;