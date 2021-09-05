import { createContext, useState } from "react";

const Root = createContext();

export function Store({ children }) {
  const [menu, setMenu] = useState(false);
  const [formVisible, setForm] = useState(false);
  const [calloutVisible, setCallout] = useState(false);
  const [projects, setProjects] = useState({});

  return (
    <Root.Provider
      value={{
        menu,
        setMenu,
        formVisible,
        setForm,
        calloutVisible,
        setCallout,
        projects,
        setProjects,
      }}
    >
      {children}
    </Root.Provider>
  );
}

export default Root;
