import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayerProvider = ({ reducer, initialDataLayer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialDataLayer)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
