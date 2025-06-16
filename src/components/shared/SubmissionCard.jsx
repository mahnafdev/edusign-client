import { useEffect, useState } from "react";
import { FaCoins, FaStar, FaVial } from "react-icons/fa6";
import api from "../../services/apiClient";
import toast from "react-hot-toast";

const SubmissionCard = ({ children: submission }) => {
	const [assignment, setAssignment] = useState({});
	const { assignment_id, submission_doc, note, obtained_marks, status, examiner_feedback } =
		submission;
	const { title, total_marks } = assignment;
	const passing_marks = (total_marks / 10) * 8;
	useEffect(() => {
		api.get(`/assignments/${assignment_id}`)
			.then((res) => {
				setAssignment(res.data);
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
				{/* Doc */}
				<h5 className="text-xl font-medium">
					Submission:{" "}
					<a
						href={submission_doc}
						target="_blank"
						className="font-normal text-primary hover:underline hover:underline-offset-2"
					>
						Document - Google Docs
					</a>
				</h5>
				<div className="space-y-1">
					{/* Status */}
					<p className="text-lg rounded-lg flex items-center gap-x-2">
						<FaVial
							size={18}
							className="fill-primary-background-dark dark:fill-primary-background-light"
						/>
						<span className="font-semibold">Status:</span>
						{status}
						{status === "Completed" ? (
							obtained_marks >= passing_marks ? (
								<span className="px-2 py-0.5 bg-green-500/50 rounded-md text-[1rem] text-green-900 dark:text-green-200 font-medium">
									Passed
								</span>
							) : (
								<span className="px-2 py-0.5 bg-red-500/50 rounded-md text-[1rem] text-red-900 dark:text-red-200 font-medium">
									Failed
								</span>
							)
						) : null}
					</p>
					{/* Total Marks */}
					<p className="text-lg rounded-lg flex items-center gap-x-2">
						<FaStar
							size={18}
							className="fill-primary-background-dark dark:fill-primary-background-light"
						/>
						<span className="font-semibold">Total Marks:</span>
						{total_marks}
					</p>
					{/* Obtained Marks */}
					{obtained_marks ? (
						<p className="text-lg rounded-lg flex items-center gap-x-2">
							<FaCoins
								size={18}
								className="fill-primary-background-dark dark:fill-primary-background-light"
							/>
							<span className="font-semibold">Obtained Marks:</span>
							{obtained_marks}
						</p>
					) : null}
				</div>
				{/* Note */}
				<p className="flex flex-col">
					<span className="text-lg font-medium">Quick Note:</span>
					{note}
				</p>
				{/* Examiner Feedback */}
				{examiner_feedback ? (
					<p className="flex flex-col">
						<span className="text-lg font-medium">Examiner Feedback:</span>
						{examiner_feedback}
					</p>
				) : null}
			</div>
		</div>
	);
};

export default SubmissionCard;
