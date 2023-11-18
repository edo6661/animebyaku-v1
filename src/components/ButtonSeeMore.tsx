import Button from './style/Button'

const
    ButtonSeeMore = ({ children }: { children: string }) => {
        return (
            <Button
                rounded='xl'
                className=' mt-4 text-center mx-auto block '>
                {children}
            </Button>
        )
    }

export default ButtonSeeMore