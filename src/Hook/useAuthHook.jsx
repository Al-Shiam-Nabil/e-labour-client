import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuthHook = () => {
  const authInfo = use(AuthContext);

  return authInfo;
};

export default useAuthHook;
