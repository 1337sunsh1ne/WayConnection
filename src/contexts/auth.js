import React, {createContext, useState} from 'react';
import firebase from '../services/firebaseConnection';
export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  // Cadastrar usuário
  async function signUp(email, password, name) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        let id = value.user.id;
        await firebase.database().ref('users').child(id).set({name: name});
      })
      .then(() => {
        let data = {
          // eslint-disable-next-line no-undef
          id: id,
          name: name,
          // eslint-disable-next-line no-undef
          email: value.user.email,
        };
        setUser(data);
      });
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signUp}}>
      {children}
    </AuthContext.Provider>
  );
}
