const EmojiReactions = ({ reactions }: { reactions: Reactions }) => {
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
                return (
                    <div key={key} className="innerReactions">
                        <p>{key}</p>
                        <p className="text-lg font-semibold">{value}</p>
                    </div>
                )
            })}
        </>
    );
};

export default EmojiReactions