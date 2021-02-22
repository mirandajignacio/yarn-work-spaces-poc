/* eslint-disable no-console */
import firebase from 'firebase/app';
import 'firebase/auth';

class AuthController {
  private static instance: AuthController;

  private static googleProvider;

  private static githubProvider;

  private firebase: firebase.app.App

  currentUser: any;

  githubSignIn(): void {
    this.firebase.auth()
      .signInWithPopup(AuthController.githubProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        console.log({ user, credential });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error;
        // The firebase.auth.AuthCredential type that was used.
        const { credential } = error;

        console.log({ errorCode });
      });
  }

  googleSignIn(): void {
    this.firebase.auth()
      .signInWithPopup(AuthController.googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        console.log({ user, credential });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error;
        // The firebase.auth.AuthCredential type that was used.
        const { credential } = error;
      });
  }

  user = () => AuthController.instance.firebase.auth().currentUser

  log = () => {
    //

    console.log('log');
    const user = AuthController.instance.firebase.auth().currentUser;
    console.log({ user });
    if (user != null) {
      user.providerData.forEach((profile) => {

      });
    }
  };

  signOut = () => {
    AuthController.instance.firebase.auth().signOut();
  };

  public static fireApp() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDF1aw4-hz7OLqo1S50Ap8r0y1NMB08-go',
      authDomain: 'kakaroto.firebaseapp.com',
      projectId: 'kakaroto',
      storageBucket: 'kakaroto.appspot.com',
      messagingSenderId: '961298114862',
      appId: '1:961298114862:web:3142b1944569a9de03b2bf',
      measurementId: 'G-P6L6XBZFT3',
    };

    if (!AuthController.instance) {
      AuthController.instance = new AuthController(firebaseConfig);
    }

    return AuthController.instance;
  }

  public static fireAppInit(onAuthStateChanged: (user) => void): AuthController {
    const firebaseConfig = {
      apiKey: 'AIzaSyDF1aw4-hz7OLqo1S50Ap8r0y1NMB08-go',
      authDomain: 'kakaroto.firebaseapp.com',
      projectId: 'kakaroto',
      storageBucket: 'kakaroto.appspot.com',
      messagingSenderId: '961298114862',
      appId: '1:961298114862:web:3142b1944569a9de03b2bf',
      measurementId: 'G-P6L6XBZFT3',
    };
    if (!AuthController.instance) {
      AuthController.instance = new AuthController(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('logged');

        onAuthStateChanged({
          photoUrl: user.photoURL,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        // No user is signed in.
        console.log('not logged');
        onAuthStateChanged(null);
      }
    });

    return AuthController.instance;
  }

  private constructor(options: Object) {
    AuthController.googleProvider = new firebase.auth.GoogleAuthProvider();
    AuthController.githubProvider = new firebase.auth.GithubAuthProvider();
    if (firebase.apps.length > 0) {
      this.firebase = firebase.app();
    } else {
      this.firebase = firebase.initializeApp(options);
    }
  }
}

export default AuthController;
