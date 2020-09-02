import React, { useState, useEffect } from "react";

export function CalcRust() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const start = new Date();

    import("wusty").then((wusty) => {
      const res = wusty.primes();
      const end = new Date();
      const time = (end.getTime() - start.getTime()) / 1000;
      setTime(time);
      console.log("Sekunden benötigt: " + time.toString());
      console.log("Primzahlen: " + res);
    });
  }, []);
  if (time === 0) {
    return <p>Calculating...</p>;
  }
  return <p>Zeit Rust: {time}</p>;
}
