import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import api from "../services/apiClient";
import toast from "react-hot-toast";
import PendingSubmissionCard from "../components/shared/PendingSubmissionCard";
import { FallingLines } from "react-loader-spinner";

const PendingSubmissions = () => {
	const [submissions, setSubmissions] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			api.get(`/submissions?status=Pending`)
				.then((res) => {
					setSubmissions(res.data);
					setLoading(false);
				})
				.catch((error) => {
					toast.error(error.message);
				});
		}, 500);
	}, []);
	return loading ? (
		<main className="h-[60vh] grid place-items-center">
			<FallingLines
				visible={true}
				width="144"
				color="var(--color-primary)"
			/>
		</main>
	) : (
		<main className="py-24">
			<section className="max-md:px-4 md:max-w-2xl lg:max-w-5xl 2xl:max-w-8xl mx-auto space-y-12">
				{/* Heading Text */}
				<h2 className="text-4xl font-bold text-center text-primary">
					Pending Assignment Submissions
				</h2>
				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
					{submissions.map((submission) => (
						<PendingSubmissionCard key={submission._id}>
							{submission}
						</PendingSubmissionCard>
					))}
				</div>
			</section>
		</main>
	);
};

export default PendingSubmissions;
