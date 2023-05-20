import { useEffect } from "react";


const useTitles = (title) => {
  useEffect(() => {
    document.title = `Best Toys ${title} `;
  })
};

export default useTitles;