import { useEffect, useState } from "react";
import AssignmentDetailsInfo from "../components/assignments/AssignmentDetailsInfo";
import api from "../services/apiClient";
import { useParams } from "react-router";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
	const [assignment, setAssignment] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		api.get(`/assignments/${id}`)
			.then((res) => setAssignment(res.data))
			.catch((error) => toast.error(error.message));
	}, []);
	return (
		<main className="py-28">
			<AssignmentDetailsInfo assignment={assignment} />
		</main>
	);
};

export default AssignmentDetails;
