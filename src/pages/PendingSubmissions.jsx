import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import api from "../services/apiClient";
import toast from "react-hot-toast";
import Loader from "../components/shared/Loader";
import PendingSubmissionCard from "../components/shared/PendingSubmissionCard";

const PendingSubmissions = () => {
	const [submissions, setSubmissions] = useState([]);
	const { loading } = useAuthContext();
	useEffect(() => {
		api.get(`/submissions?status=Pending`)
			.then((res) => {
				setSubmissions(res.data);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	}, []);
	return (
		<main className="py-24">
			<section className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-8xl mx-auto space-y-12">
				{/* Heading Text */}
				<h2 className="text-4xl font-bold text-center text-primary">
					Pending Assignments
				</h2>
				<div className="grid lg:grid-cols-2 gap-6">
					{loading ? (
						<Loader
							type="mySubmissionCard"
							count={3}
						/>
					) : (
						submissions.map((submission) => (
							<PendingSubmissionCard key={submission._id}>
								{submission}
							</PendingSubmissionCard>
						))
					)}
				</div>
			</section>
		</main>
	);
};

export default PendingSubmissions;
