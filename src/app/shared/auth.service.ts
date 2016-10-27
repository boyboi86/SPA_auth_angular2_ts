import { User } from './user.interface';
/*Declare used only in situation where script/cdn used but not SDK to tell TS it's a known obj*/
declare const firebase: any;

/*Use firebase for backend authentication*/
export class AuthService {
  signupUser(user: User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .catch(function(err){
                      console.log(err);
                    })
  }
  signinUser(user: User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .catch(function(err){
                      console.log(err);
                    })
  }
}
