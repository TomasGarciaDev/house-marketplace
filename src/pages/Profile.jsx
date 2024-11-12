import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return <h1>{user ? user.displayName : "Not Logged In"}</h1>;
}

export default Profile;
