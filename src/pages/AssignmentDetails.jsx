import { useEffect, useState } from "react";
import AssignmentDetailsInfo from "../components/assignments/AssignmentDetailsInfo";
import api from "../services/apiClient";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";

const AssignmentDetails = () => {
	const [assignment, setAssignment] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		api.get(`/assignments/${id}`)
			.then((res) => {
				setAssignment(res.data);
				setLoading(false);
			})
			.catch((error) => toast.error(error.message));
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
		<main className="py-28">
			<AssignmentDetailsInfo assignment={assignment} />
		</main>
	);
};

export default AssignmentDetails;
