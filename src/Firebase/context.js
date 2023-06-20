import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); // defines a variable called AuthContext which is an instance of createContext, our custom react hook -- effectivley creating our context variable
export function useContextAuthProvider() {
  return useContext(AuthContext);
} // exports a function that allows us to actually use our custom react hook

//creates a component that we can use in index.js (not the page Index.js) to wrap around the entire App component -- allowing us to export the state to the entire App potentially
function AuthProvider({ children }) {
  // the "pseudo prop or pseudo selector" children is being destructured in param parens to allow access to all child nodes within App
  const [userCity, setUserCity] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
  const [user, setUser] = useState(null);
  const [prefs, setPrefs] = useState(null);
  const [users, setUsers] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [zipcode, setZipcode] = useState("");

  // we create our state like normal -- user in this case

  // normal return statement like in a normal component
  return (
    // value is passing the destructured state through to all children like a prop -- a prop on steroids ;)
    <AuthContext.Provider
      value={{
        user,
        setUser,
        prefs,
        setPrefs,
        users,
        setUsers,
        profilePhotoUrl,
        setProfilePhotoUrl,
        firstName,
        setFirstName,
        zipcode,
        setZipcode,
        userCity,
        setUserCity,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
// go to index.js and see how our App component is wrapped inside of our custom context component. Then you can import that context in each component on a need to basis.

export default AuthProvider;
