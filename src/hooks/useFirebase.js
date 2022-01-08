import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  //REGISTRATION PROCESS OF USER
  const processSignUp = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError('');

        const newUser = { email, displayName: name };

        setUser(newUser);

        // save user to the database
        saveUser(email, name);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => setAuthError(error.message));
        navigate('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  //USER LOGIN PROCESS
  const processSignIn = (email, password, location, navigate) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const redirect_uri = location?.state?.from || '/';
        navigate(redirect_uri);
        setAuthError('');
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setIsLoading(false));
  };

  // change the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    axios
      .get(`https://guarded-sierra-90712.herokuapp.com/users/${user.email}`)
      .then((response) => setAdmin(response.data.admin));
  }, [user.email]);

  //process user logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };

    axios.put('https://guarded-sierra-90712.herokuapp.com/users', user);
  };

  return {
    user,
    admin,
    isLoading,
    setAuthError,
    authError,
    processSignUp,
    processSignIn,
    logout,
  };
};

export default useFirebase;
