import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useEffect, useState } from "react";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
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
	const getUserProfile = (currentUser) => {
		try {
			const userProfile = {
				fullName: currentUser.displayName,
				photoURL: currentUser.photoURL,
				email: currentUser.email,
			};
			setUser(userProfile);
		} catch {
			setUser(null);
		}
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			getUserProfile(currentUser);
			setLoading(false);
		});
	}, []);
	return { signUpUser, signInUser, signInUserWithGoogle, updateUserProfile, user, loading };
};

export default useAuth;
