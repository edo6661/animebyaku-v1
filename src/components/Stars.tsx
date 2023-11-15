import Star from './Star';

const Stars = () => {

    return (
        <>
            <Star className='star left-8 top-2 rotate-180 shadow-sm shadow-white rounded-full' size={75} />
            <Star className='star top-16 left-6  rotate-90' size={30} />
            <Star className='star right-8 top-2 rotate-45 shadow-white shadow-sm rounded-full' size={75} />
            <Star className='star top-16 right-6  rotate-180' size={30} />

        </>
    )
}

export default Stars
