import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa6";
import api from "../../services/apiClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Button from "../shared/Button";

const UpdateAssignmentForm = ({ data: assignment }) => {
	// Destructure assignment entries
	const { _id, title, description, thumbnail, total_marks, difficulty, due_date } =
		assignment;
	// Initial Date for custom Date-picker
	const [initialDate, setInitialDate] = useState(new Date());
	// Set initial due date as default
	useEffect(() => {
		if (due_date) setInitialDate(new Date(due_date));
	}, [due_date]);
	// Current Date for posted_date
	const date = new Date();
	const currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	const navigate = useNavigate();
	// Handle update
	const handleUpdate = (e) => {
		e.preventDefault();
		// Extract submission data
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Process data
		data.total_marks = Number(data.total_marks);
		data.posted_date = currentDate;
		// Update data in server/database
		api.put(`/assignments/${_id}`, data)
			.then((res) => {
				const isInserted = res.data.insertedId;
				// Successful insertion confirmation
				if (isInserted) {
					toast.success("Assignment updated successfully!");
					navigate(`/assignments/details/${_id}`);
				} else {
					toast.error("Something went wrong! Please try again.");
				}
			})
			.catch((error) => toast.error(error.message));
	};
	return (
		<div className="w-1/2 mx-auto">
			<h3 className="text-3xl font-bold text-center text-primary-dark dark:text-primary-light mb-6">
				Update Assignment
			</h3>
			{/* Form */}
			<form
				className="space-y-2"
				onSubmit={handleUpdate}
			>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Title</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Assignment Title
						</small>
					</div>
					<input
						type="text"
						name="title"
						className="bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						defaultValue={title}
						placeholder="Math Algebra Exam"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Description</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Details about Assignment
						</small>
					</div>
					<textarea
						rows={7}
						minLength={25}
						maxLength={400}
						name="description"
						className="resize-none bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-xl placeholder:text-neutral-400"
						defaultValue={description}
						placeholder="A test assignment details. This assignment is about a large part of Mathematics. Explain what is Algebra and why do we need it in our regular life?"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Thumbnail</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Image URL
						</small>
					</div>
					<input
						type="url"
						name="thumbnail"
						className="bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						defaultValue={thumbnail}
						placeholder="https://imgur.com/gallery/new_id"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Total Marks</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-400">
							Max Marks, 80% is Passing Marks
						</small>
					</div>
					<input
						type="number"
						name="total_marks"
						min={5}
						max={100}
						step={5}
						className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						defaultValue={total_marks}
						placeholder="90"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Difficulty</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Difficulty Level of Assignment
						</small>
					</div>
					<select
						name="difficulty"
						className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						defaultValue={difficulty}
						required
					>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-2">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Due Date</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Happening Date of Assignment
						</small>
					</div>
					<DatePicker
						showIcon
						icon={
							<FaCalendar className="fill-blue-900 dark:fill-blue-200 top-0.5 -left-1" />
						}
						selected={initialDate}
						name="due_date"
						className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						onChange={(date) => setInitialDate(date)}
					/>
				</label>
				<div className="max-w-3/4 mx-auto mt-6">
					<Button fullWidth>Update</Button>
				</div>
			</form>
		</div>
	);
};

export default UpdateAssignmentForm;
