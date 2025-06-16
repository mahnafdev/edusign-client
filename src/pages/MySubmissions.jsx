import { useEffect, useState } from "react";
import api from "../services/apiClient";
import toast from "react-hot-toast";
import SubmissionCard from "../components/shared/SubmissionCard";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "../components/shared/Loader";

const MySubmissions = () => {
	const [submissions, setSubmissions] = useState([]);
	const { user, loading } = useAuthContext();
	useEffect(() => {
		api.get(`/submissions?user_email=${user?.email}`)
			.then((res) => {
				setSubmissions(res.data);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	}, [user]);
	return (
		<main className="py-24">
			<section className="max-w-8xl mx-auto space-y-12">
				{/* Heading Text */}
				<h2 className="text-4xl font-bold text-center text-primary">
					My Assignment Submissions
				</h2>
				<div className="grid grid-cols-2 gap-6">
					{loading ? (
						<Loader
							type="mySubmissionCard"
							count={3}
						/>
					) : (
						submissions.map((submission) => (
							<SubmissionCard key={submission._id}>{submission}</SubmissionCard>
						))
					)}
				</div>
			</section>
		</main>
	);
};

export default MySubmissions;
