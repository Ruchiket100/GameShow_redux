import styled from "styled-components";
import { motion } from "framer-motion";

const UpcomingCard = ({ game }) => {
	const { name, background_image, rating, id } = game;
	return (
		<Card>
			<div>
				<h3>{name}</h3>
				<p>{rating}</p>
			</div>
			<img src={background_image} alt={name} />
		</Card>
	);
};

const Card = styled(motion.div)`
	width: 100%;
	position: relative;
	img {
		height: 424px;
		width: 100%;
		object-fit: cover;
	}
	div {
		position: absolute;
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		right: 0;
		height: 100%;
		width: 30%;
		padding: 24px;
		background: rgb(0, 0, 0);
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.40940126050420167) 53%,
			rgba(27, 27, 31, 1) 98%
		);
	}
`;

export default UpcomingCard;
