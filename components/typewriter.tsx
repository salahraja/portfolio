import React from "react";
import Typed from "typed.js";

function TypeWriter() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "The <i>web</i>.",
        "&amp; TailwindCSS.",
        "&amp; Next.js.",
        "&amp; Typescript.",
        "&amp; React.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypeWriter;
