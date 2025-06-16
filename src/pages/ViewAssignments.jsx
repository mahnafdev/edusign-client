import { useEffect, useState } from "react";
import AssignmentCard from "../components/shared/AssignmentCard";
import api from "../services/apiClient";
import toast from "react-hot-toast";
import Loader from "../components/shared/Loader";

const ViewAssignments = () => {
	const [assignments, setAssignments] = useState(null);
	const [loading, setLoading] = useState(true);
	const [difficulty, setDifficulty] = useState("");
	const [subject, setSubject] = useState("");
	const [search, setSearch] = useState("");
	// Handle Filtering
	const handleDifficultyFilter = (e) => {
		const filterValue = e.target.value;
		setDifficulty(filterValue);
		api.get(filterValue ? `/assignments?difficulty=${filterValue}` : "/assignments")
			.then((res) => setAssignments(res.data))
			.catch((error) => toast.error(error.message));
	};
	const handleSubjectFilter = (e) => {
		const filterValue = e.target.value;
		setSubject(filterValue);
		api.get(filterValue ? `/assignments?subject=${filterValue}` : "/assignments")
			.then((res) => setAssignments(res.data))
			.catch((error) => toast.error(error.message));
	};
	// Handle Searching
	const handleSearch = (e) => {
		const searchValue = e.target.value;
		setSearch(searchValue);
		api.get(searchValue ? `/assignments?search=${searchValue}` : "/assignments")
			.then((res) => setAssignments(res.data))
			.catch((error) => toast.error(error.message));
	};
	useEffect(() => {
		api.get("/assignments")
			.then((res) => {
				setAssignments(res.data);
				setLoading(false);
			})
			.catch((error) => {
				toast.error(error.message);
				setLoading(false);
			});
	}, []);
	return (
		<main className="py-24">
			<section className="max-w-8xl mx-auto">
				{/* Heading Text */}
				<h2 className="text-4xl font-bold text-center text-primary mb-4">
					View Assignments
				</h2>
				{/* Filter & Search */}
				<div className="flex justify-between mb-12">
					<div className="flex items-center gap-x-3">
						<label className="flex flex-col gap-y-1 text-lg">
							<span className="font-medium text-xl">Difficulty</span>
							<select
								name="difficulty"
								value={difficulty}
								onChange={handleDifficultyFilter}
								className="w-32 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-md"
								required
							>
								<option value="">All</option>
								<option value="Easy">Easy</option>
								<option value="Medium">Medium</option>
								<option value="Hard">Hard</option>
							</select>
						</label>
						<label className="flex flex-col gap-y-1 text-lg">
							<span className="font-medium text-xl">Subject</span>
							<select
								name="subject"
								value={subject}
								onChange={handleSubjectFilter}
								className="w-48 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-md"
								required
							>
								<option value="">All</option>
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
					</div>
					<label className="flex flex-col gap-y-1 text-lg">
						<span className="font-medium text-xl">🔍 Search</span>
						<input
							type="text"
							name="search"
							value={search}
							onChange={handleSearch}
							className="w-60 bg-blue-50 dark:bg-[#19191f] px-2 py-1 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
							placeholder="Search Text..."
							required
						/>
					</label>
				</div>
				{/* Assignments List */}
				<div className="flex flex-col gap-y-6">
					{loading ? (
						<Loader count={3} />
					) : (
						assignments.map((assignment) => (
							<AssignmentCard key={assignment._id}>{assignment}</AssignmentCard>
						))
					)}
				</div>
			</section>
		</main>
	);
};

export default ViewAssignments;
