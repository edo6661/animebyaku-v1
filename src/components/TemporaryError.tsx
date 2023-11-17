const TemporaryError = ({ message }: { message?: string | Error }) => (
    <h2 className='text-3xl font-bold text-center'>
        {message ? (typeof message === 'string' ? message : message.message) : 'Unknown error'}
    </h2>
);

export default TemporaryError