import React from "react";
import Typed from "typed.js";

function TypeWriter() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Typescript.",
        "&amp; TailwindCSS.",
        "&amp; Next.js.",
        "&amp; Vue.",
        "&amp; React.",
        "The <i>web</i>.",
      ],
      typeSpeed: 50,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
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
