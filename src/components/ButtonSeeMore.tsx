import Button from './style/Button'

const ButtonSeeMore = ({ children }: { children: string }) => {
    return (
        <Button
            children={`See More Top ${children}`} rounded='xl'
            className=' mt-4 text-center mx-auto block' />
    )
}

export default ButtonSeeMore