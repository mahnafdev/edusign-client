import Collaborators from "../components/home/Collaborators";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";

const Home = () => {
	return (
		<main className="py-24">
			<Hero />
			<Collaborators />
			<FAQ />
		</main>
	);
};

export default Home;
