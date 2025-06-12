import Collaborators from "../components/home/Collaborators";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

const Home = () => {
	return (
		<main className="py-24">
			<Hero />
			<Collaborators />
			<Features />
			<Stats />
			<FAQ />
		</main>
	);
};

export default Home;
