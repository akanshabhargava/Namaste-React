import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});
console.log("UserContext", UserContext);
export default UserContext;
