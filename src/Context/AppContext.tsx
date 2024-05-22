import React from "react";

interface AppContextProps {
  visibleSide: boolean;
  handleVisibleSide: () => void;
  locationPathName: string;
}

const AppContext = React.createContext<AppContextProps>({
  visibleSide: false,
  handleVisibleSide: () => {},
  locationPathName: "",
});

export default AppContext;
