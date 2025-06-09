const CreateAssignmentForm = () => {
	return (
		<div className="w-1/2">
			<h3 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-4">
				Create An Assignment
			</h3>
			{/* Form */}
			<form className="max-w-2/3 space-y-2">
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
						name="marks"
						min={5}
						max={1000}
						className="w-40 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
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
						defaultValue="medium"
						className="w-40 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						required
					>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
					{/* <input
						type="text"
						name="title"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						required
					/> */}
				</label>
				<label className="flex flex-col gap-y-2 text-lg">
					<div className="flex flex-col">
						<span className="font-medium text-lg">Due Date</span>
						<small className="text-sm text-neutral-500 font-medium dark:text-neutral-300">
							Happening Date of Assignment
						</small>
					</div>
					<input
						type="date"
						name="due_date"
						className="w-40 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg"
						required
					/>
				</label>
				<div className="text-center mt-6">
					<button
						type="submit"
						className="w-full py-2 text-xl text-light font-medium bg-primary hover:bg-primary-dark rounded-lg cursor-pointer"
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateAssignmentForm;
