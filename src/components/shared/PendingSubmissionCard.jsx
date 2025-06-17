import { useEffect, useState } from "react";
import { FaCoins, FaStar, FaVial } from "react-icons/fa6";
import api from "../../services/apiClient";
import toast from "react-hot-toast";
import Button from "./Button";

const PendingSubmissionCard = ({ children: submission }) => {
	const [assignment, setAssignment] = useState({});
	const [user, setUser] = useState({});
	const { assignment_id, user_email } = submission;
	const { title, total_marks } = assignment;
	useEffect(() => {
		api.get(`/assignments/${assignment_id}`)
			.then((res) => {
				setAssignment(res.data);
			})
			.catch((error) => {
				toast.error(error.message);
			});
		api.get(`/users?email=${user_email}`)
			.then((res) => {
				setUser(res.data);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	}, []);
	return (
		<div className="bg-primary-background-light dark:bg-[#20202a] px-6 py-4 border border-neutral-300 dark:border-neutral-700 rounded-3xl space-y-8">
			<div className="space-y-3">
				{/* Title */}
				<h5 className="flex flex-col text-xl font-medium">
					<span className="font-semibold">Assignment:</span>
					{title}
				</h5>
				{/* Total Marks */}
				<p className="text-lg rounded-lg flex items-center gap-x-2">
					<FaStar
						size={18}
						className="fill-primary-background-dark dark:fill-primary-background-light"
					/>
					<span className="font-semibold">Total Marks:</span>
					{total_marks}
				</p>
				{/* Examinee */}
				<div className="text-end">
					<Button>Give Marks</Button>
				</div>
			</div>
		</div>
	);
};

export default PendingSubmissionCard;
