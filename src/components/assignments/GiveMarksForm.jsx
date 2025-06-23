import toast from "react-hot-toast";
import api from "../../services/apiClient";
import Button from "../shared/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const GiveMarksForm = ({ data: submission }) => {
	const { _id, assignment_id, submission_doc, note } = submission;
	const [assignment, setAssignment] = useState({});
	const { total_marks } = assignment;
	const navigate = useNavigate();
	const handleGiveMarks = (e) => {
		// Prevent site reload
		e.preventDefault();
		// Get submitted data
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Process data
		data.obtained_marks = Number(data.obtained_marks);
		console.log(data);
		// Send data to server/database
		api.put(`/submissions/${_id}`, data)
			.then((res) => {
				const isUpdated = res.data.modifiedCount;
				// Successful update confirmation
				if (isUpdated) {
					toast.success("Assignment updated successfully!");
					navigate("/submissions/pending");
				} else {
					toast.error("Something went wrong! Please try again.");
				}
			})
			.catch((error) => toast.error(error.message));
	};
	useEffect(() => {
		if (assignment_id) {
			api.get(`/assignments/${assignment_id}`)
				.then((res) => setAssignment(res.data))
				.catch((error) => toast.error(error.message));
		}
	}, [assignment_id]);
	return (
		<div className="lg:w-3/5 mx-auto">
			<h3 className="text-3xl font-bold text-center text-primary-dark dark:text-primary-light mb-4">
				Give Assignment Marks
			</h3>
			{/* Form */}
			<form
				className="space-y-2"
				onSubmit={handleGiveMarks}
			>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Submission Docs</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Google Docs Submission Link
						</small>
					</div>
					<input
						type="url"
						defaultValue={submission_doc}
						className="bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						readOnly
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Note</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Quick Note that the Examinee provided
						</small>
					</div>
					<textarea
						rows={5}
						defaultValue={note}
						className="resize-none bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-xl placeholder:text-neutral-400"
						readOnly
					/>
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Marks</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-400">
							The Marks you give to this solution
						</small>
					</div>
					<input
						type="number"
						min={0}
						max={total_marks}
						step={5}
						name="obtained_marks"
						className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder={total_marks ? (total_marks / 10) * 8 : 0}
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Feedback</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Your Feedback for the Solution
						</small>
					</div>
					<textarea
						rows={5}
						minLength={25}
						maxLength={300}
						name="feedback"
						className="resize-none bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-xl placeholder:text-neutral-400"
						placeholder="Good job! You did well."
						required
					/>
				</label>
				<div className="text-center mt-6">
					<Button
						buttonType="submit"
						fullWidth
					>
						Give Marks
					</Button>
				</div>
			</form>
		</div>
	);
};

export default GiveMarksForm;
