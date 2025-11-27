import { AuthContext } from "@/context/AuthContext";
import React, { use } from "react";

const useAuthHook = () => {
  const authInfo = use(AuthContext);

  return authInfo;
};

export default useAuthHook;
