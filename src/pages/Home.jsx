import CallToAction from "../components/home/CallToAction";
import Collaborators from "../components/home/Collaborators";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

const Home = () => {
	return (
		<main className="max-lg:px-4 pt-20 pb-40">
			<Hero />
			<Collaborators />
			<Features />
			<Stats />
			<FAQ />
			<CallToAction />
		</main>
	);
};

export default Home;
