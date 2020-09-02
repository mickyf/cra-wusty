import React, { useState, useEffect } from "react";

export function Calc() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const start = new Date();

    let j = 0;
    let n = 2;
    let prime = false;
    let p = [];
    p[0] = 2;

    while (n < 10_000_000) {
      prime = true;
      let i = 0;
      while (p[i] * p[i] <= n) {
        if (n % p[i] === 0) {
          prime = false;
          break;
        }
        i++;
      }
      if (prime) {
        p[j] = n;
        j++;
      }
      n++;
    }

    const end = new Date();
    const time = (end.getTime() - start.getTime()) / 1000;
    setTime(time);
    console.log("Sekunden benötigt: " + time.toString());
    console.log("Primzahlen: " + p.length);
  }, []);
  if (time === 0) {
    return <p>Calculating...</p>;
  }
  return <p>Zeit TS: {time}</p>;
}
