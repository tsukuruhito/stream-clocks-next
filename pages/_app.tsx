import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/scss/Clock.scss";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const selectedTypeContext = createContext({} as {selectedType: string, setSelectedType: Dispatch<SetStateAction<string>>});

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedType, setSelectedType] = useState("noframe");
  const value = {selectedType, setSelectedType};
  return (
    <selectedTypeContext.Provider value={value}>
      <Component {...pageProps} />
    </selectedTypeContext.Provider>
  );
}

export default MyApp;
