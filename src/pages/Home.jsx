import Collaborators from "../components/home/Collaborators";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

const Home = () => {
	return (
		<main className="py-24">
			<Hero />
			<Collaborators />
			<Stats />
			<FAQ />
		</main>
	);
};

export default Home;
