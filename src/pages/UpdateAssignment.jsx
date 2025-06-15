import { useParams } from "react-router";
import UpdateAssignmentForm from "../components/assignments/UpdateAssignmentForm";
import { useEffect, useState } from "react";
import api from "../services/apiClient";
import toast from "react-hot-toast";

const UpdateAssignment = () => {
	const { id } = useParams();
	const [assignment, setAssignment] = useState([]);
	useEffect(() => {
		api.get(`/assignments/${id}`)
			.then((res) => setAssignment(res.data))
			.catch((error) => toast.error(error));
	}, []);
	return (
		<main className="py-24">
			<section className="max-w-7xl mx-auto">
				{/* Form */}
				<UpdateAssignmentForm data={assignment} />
			</section>
		</main>
	);
};

export default UpdateAssignment;
