import { useEffect } from "react";

const DisableCtrlS = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
export default DisableCtrlS;
