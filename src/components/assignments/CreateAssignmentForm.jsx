import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa6";
import api from "../../services/apiClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Button from "../shared/Button";
import useAuthContext from "../../hooks/useAuthContext";

const CreateAssignmentForm = () => {
	// Initial Date for custom Date-picker
	const [initialDate, setInitialDate] = useState(new Date());
	// Current Date for posted_date
	const date = new Date();
	const currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	// User data for user email
	const { user } = useAuthContext();
	// Navigation function
	const navigate = useNavigate();
	const handleCreate = (e) => {
		// Prevent site reload
		e.preventDefault();
		// Get submitted data
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Process data
		data.total_marks = Number(data.total_marks);
		data.posted_date = currentDate;
		data.user = user.email;
		// Send data to server/database
		api.post("/assignments", data)
			.then((res) => {
				const isInserted = res.data.insertedId;
				// Successful insertion confirmation
				if (isInserted) {
					toast.success("Assignment published successfully!");
					navigate("/assignments");
				} else {
					toast.error("Something went wrong! Please try again.");
				}
			})
			.catch((error) => toast.error(error.message));
	};
	return (
		<div className="lg:w-1/2">
			<h3 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-4">
				Create An Assignment
			</h3>
			{/* Form */}
			<form
				className="lg:max-w-2/3 space-y-2"
				onSubmit={handleCreate}
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
						placeholder="Math Algebra Test"
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
						rows={9}
						minLength={25}
						maxLength={400}
						name="description"
						className="resize-none bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-xl placeholder:text-neutral-400"
						placeholder="A test assignment details paragraph. This assignment is about a large part of Maths. Describe what is Algebra and why do we need it in our regular life?"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Subject</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Subject/Topic of the Assignment
						</small>
					</div>
					<select
						name="subject"
						className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						required
					>
						<option value="Technology">Technology</option>
						<option value="Religion">Religion</option>
						<option value="Reading & Writing">Reading & Writing</option>
						<option value="Mechanic">Mechanic</option>
						<option value="Mathematics">Mathematics</option>
						<option value="English">English</option>
						<option value="Languages">Languages</option>
						<option value="Psychology">Psychology</option>
						<option value="Economics">Economics</option>
						<option value="Astronomic">Astronomic</option>
						<option value="Physics">Physics</option>
						<option value="Chemistry">Chemistry</option>
						<option value="Science">Science</option>
						<option value="Management">Management</option>
						<option value="Health & Wealth">Health & Wealth</option>
						<option value="Daily Accessories">Daily Accessories</option>
						<option value="Other">Other</option>
					</select>
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
						placeholder="https://imgur.com/gallery/id"
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
						placeholder="100"
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
						defaultValue="Medium"
						className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						required
					>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
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
						className="w-64 bg-blue-50 dark:bg-[#19191f] px-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						onChange={(date) => setInitialDate(date)}
					/>
				</label>
				<div className="text-center mt-6">
					<Button
						buttonType="submit"
						fullWidth
					>
						Create
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateAssignmentForm;
