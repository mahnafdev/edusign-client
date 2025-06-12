import toast from "react-hot-toast";
import { FaCalendar, FaEye, FaPenToSquare, FaStar, FaTrashCan } from "react-icons/fa6";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import api from "../../services/apiClient";

const AssignmentCard = ({ children: assignment }) => {
	const { _id, thumbnail, title, description, total_marks, due_date } = assignment;
	const handleDelete = () => {
		const currentTheme = localStorage.getItem("theme");
		Swal.fire({
			theme: currentTheme,
			icon: "question",
			iconColor: "var(--color-primary)",
			titleText: "Are you sure?",
			text: "The deletion is irreversible!",
			confirmButtonText: "Yes, Delete",
			confirmButtonColor: "var(--color-primary)",
			showDenyButton: true,
			denyButtonText: "No, Cancel",
			denyButtonColor: "#dc3535",
			customClass: {
				popup: "!rounded-xl",
				confirmButton: "!rounded-md",
				denyButton: "!rounded-md",
			},
		}).then((result) => {
			if (result.isConfirmed) {
				api.delete(`/assignments/${_id}`).then((res) => {
					if (res.data.deletedCount)
						toast.success("Assignment deleted successfully!");
					else toast.error("Something went wrong! Please try again.");
				});
			}
		});
	};
	return (
		<div className="bg-primary-background-light dark:bg-[#20202a] border border-neutral-300 dark:border-neutral-700 rounded-3xl grid grid-cols-6 items-center gap-8">
			{/* Thumbnail Image */}
			<img
				src={thumbnail}
				alt="Thumbnail Image"
				className="col-span-2 h-full rounded-l-3xl"
			/>
			{/* Other Information */}
			<div className="col-span-4 my-4 mr-12 space-y-4">
				{/* Title */}
				<h3 className="text-3xl font-semibold">{title}</h3>
				<div className="flex items-center gap-x-2 text-lg">
					{/* Total Marks */}
					<p
						className="px-2.5 py-0.5 border border-neutral-400/60 rounded-lg flex items-center gap-x-2"
						title="Total Marks"
					>
						<FaStar
							size={18}
							className="fill-primary-background-dark dark:fill-primary-background-light"
						/>
						{total_marks}
					</p>
					{/* Due Date */}
					<p
						className="px-2.5 py-0.5 border border-neutral-400/60 rounded-lg flex items-center gap-x-2"
						title="Due Date"
					>
						<FaCalendar
							size={18}
							className="fill-primary-background-dark dark:fill-primary-background-light"
						/>
						{due_date}
					</p>
				</div>
				{/* Shorted Description */}
				<p className="text-lg line-clamp-1">{description}</p>
				{/* Actions */}
				<div className="w-fit mt-6 px-1 flex items-center mx-auto gap-x-1 border border-dark/20 dark:border-light/20 rounded-lg">
					<NavLink
						to={`/assignments/details/${_id}`}
						target="_blank"
						className="p-2"
						title="View Details"
					>
						<FaEye
							size={20}
							className="hover:fill-primary-dark dark:hover:fill-primary-light cursor-pointer"
						/>
					</NavLink>
					<span
						className="p-2"
						title="Update"
					>
						<FaPenToSquare
							size={20}
							className="hover:fill-primary-dark dark:hover:fill-primary-light cursor-pointer"
						/>
					</span>
					<button
						className="p-2"
						title="Delete"
						onClick={handleDelete}
					>
						<FaTrashCan
							size={20}
							className="hover:fill-primary-dark dark:hover:fill-primary-light cursor-pointer"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AssignmentCard;
