import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";

const useAuth = () => {
	const signUpUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signInUserWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const updateUserProfile = (displayName, photoURL) => {
		const newProfile = { displayName, photoURL };
		return updateProfile(auth.currentUser, newProfile);
	};
	return { signUpUser, signInUser, signInUserWithGoogle, updateUserProfile };
};

export default useAuth;
