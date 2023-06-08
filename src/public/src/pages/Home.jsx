import styled from "styled-components";
import { motion } from "framer-motion";
import UpcomingCard from "../components/UpcomingCard";
import { useSelector } from "react-redux";
const Home = () => {
	const upcomingGames = useSelector((state) => state.games.upcoming);
	return (
		<div>
			<h2>Home</h2>
			<UpcomingGames>
				{upcomingGames.map((game) => {
					return <UpcomingCard game={game} />;
				})}
			</UpcomingGames>
		</div>
	);
};

export default Home;

const UpcomingGames = styled(motion.div)`
	width: 100%;
	height: auto;
`;
