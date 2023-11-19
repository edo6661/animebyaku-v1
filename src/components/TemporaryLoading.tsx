import { ColorRing } from 'react-loader-spinner';

const TemporaryLoading = () => {
    return (
        <section className='grid place-items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#fff6e0', '#64ccc5', '#F8BDEB', '#868e96', '#495057']}
            />
        </section>
    );
};

export default TemporaryLoading;
