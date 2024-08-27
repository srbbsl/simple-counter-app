import Head from "next/head";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  const increseaCounter = () => {
    setCount(count + 1);
  }

  const decreaseCounter = () => {
    setCount(count - 1);
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="heading">hello {count}</h1>
        <button onClick={increseaCounter}>Inc Count</button>
        <button onClick={decreaseCounter}>Dec Count</button>
      </main>
    </>
  );
}
