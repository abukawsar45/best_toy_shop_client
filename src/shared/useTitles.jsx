import { useEffect } from "react";


const useTitles = (title) => {
  useEffect(() => {
    document.title = `${title} Best Toys`
  })
};

export default useTitles;