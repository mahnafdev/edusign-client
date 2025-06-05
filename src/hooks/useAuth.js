import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
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
	const updateUserProfile = (displayName, photoURL) => {
		const newProfile = { displayName, photoURL };
		return updateProfile(auth.currentUser, newProfile);
	};
	return { signUpUser, signInUser, updateUserProfile };
};

export default useAuth;
