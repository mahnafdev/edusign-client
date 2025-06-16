import toast from "react-hot-toast";
import api from "../../services/apiClient";
import Button from "../shared/Button";
import { useNavigate, useParams } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const TakeAssignmentForm = () => {
	const { id: assignmentId } = useParams();
	const { user } = useAuthContext();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		// Prevent site reload
		e.preventDefault();
		// Get submitted data
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Process data
		data.assignment_id = assignmentId;
		data.user_email = user.email;
		data.status = "Pending";
		data.obtained_marks = 0;
		data.examiner_feedback = "";
		// Send data to server/database
		api.post("/submissions", data)
			.then((res) => {
				const isInserted = res.data.insertedId;
				// Successful insertion confirmation
				if (isInserted) {
					toast.success("Assignment submitted successfully!");
					navigate("/submissions/mine");
				} else {
					toast.error("Something went wrong! Please try again.");
				}
			})
			.catch((error) => toast.error(error.message));
	};
	return (
		<div className="lg:w-3/5">
			<h3 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-4">
				Submit Assignment
			</h3>
			{/* Form */}
			<form
				className="lg:max-w-2/3 space-y-2"
				onSubmit={handleSubmit}
			>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Submission Link</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Google Docs Submission Link (with Edit Access)
						</small>
					</div>
					<input
						type="url"
						name="submission_doc"
						className="bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="https://docs.google.com/document"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Quick Note</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							A Short Note you can write as you wish
						</small>
					</div>
					<textarea
						rows={7}
						minLength={25}
						maxLength={300}
						name="note"
						className="resize-none bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-xl placeholder:text-neutral-400"
						placeholder="I analyzed requirements, thought the solution, implemented solution (solved), and learned that this happens in that way."
						required
					/>
				</label>
				<div className="text-center mt-6">
					<Button
						buttonType="submit"
						fullWidth
					>
						Submit Solution
					</Button>
				</div>
			</form>
		</div>
	);
};

export default TakeAssignmentForm;
