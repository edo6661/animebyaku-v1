export const Reactions = ({ reactions }: { reactions: Reactions }) => {
	return (
		<>
			{Object.entries(reactions).map(([key, value]) => {
				switch (key) {
					case 'nice':
						key = '😊';
						break;
					case 'love_it':
						key = '❤️';
						break;
					case 'funny':
						key = '😂';
						break;
					case 'confusing':
						key = '😕';
						break;
					case 'overall':
						key = '👍';
						break;
					case 'creative':
						key = ' 🎨';
						break;
					case 'informative':
						key = ' 📚';
						break;
					case 'well_written':
						key = '✍️';
						break;
					default:
						key = '🥹';
						break;
				}
				return <p key={key}>{`${key}: ${value}`}</p>;
			})}
		</>
	);
};

export default Reactions