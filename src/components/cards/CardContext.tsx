import React,{  createContext, ReactNode, useContext } from "react";
const CardContext = createContext<{ horizontal: boolean; hasPadding: boolean }>({
    horizontal: false,
    hasPadding: false,
  });

export const CardProvider = ({horizontal, hasPadding, children} : {horizontal: boolean; hasPadding: boolean, children: ReactNode}) => {
    return (
        <CardContext.Provider value={{horizontal,hasPadding}}>
            {children}
        </CardContext.Provider>
    )
}

export const useCardContext = () => {
    const context = useContext(CardContext);
    if (context === undefined) {
        throw new Error ('useCardContext must be used within a CardProvider');
    };
    return context;
}