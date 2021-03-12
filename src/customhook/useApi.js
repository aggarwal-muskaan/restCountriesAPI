import { useState, useEffect } from "react";

function useApi(init) {
  const [state, changeState] = useState(init);

  useEffect(() => {
    let baseUrl = "https://restcountries.eu/rest/v2/all";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => changeState(data));
    //todo =>   replace with axios
  }, []);

  return [state, changeState];
}

export default useApi;
