import { useParams } from "react-router";
import GiveMarksForm from "../components/assignments/GiveMarksForm";
import { useEffect, useState } from "react";
import api from "../services/apiClient";
import toast from "react-hot-toast";

const GiveMarks = () => {
	const { id } = useParams();
	const [submission, setSubmission] = useState([]);
	useEffect(() => {
		api.get(`/submissions/${id}`)
			.then((res) => {
				setSubmission(res.data);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	}, []);
	return (
		<main className="py-24">
			<section className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-y-8">
				{/* Form */}
				<GiveMarksForm data={submission} />
			</section>
		</main>
	);
};

export default GiveMarks;
