import Button from '../assets/Button.png'
import CommentCenter from '../assets/CommentCenter.png'
const Content = () => {
    return (
        <>
        <div>
            <div className="relative min-h-screen w-full mx-auto flex flex-col items-center gap-5">
                <h1 className="mt-5 mx-auto text-center font-medium text-5xl sm:text-6xl  text-text-heading leading-[60px] sm:leading-[70px]">Smart <span className="font-semibold text-primary-dark">HealthCare</span><br />Management</h1>
                <p className="font-extralight text-text-body sm:text-lg text-md mx-auto w-full max-w-[500px] text-center tracking-wide leading-7">Comprehensive hospital management system for modern healthcare facilities</p>
                <img src={Button} className="cursor-pointer min-w-[10px]" alt="" />
                <img src={CommentCenter} className="absolute bottom-0 left-0 right-0 text-center mx-auto"   alt="" />
            </div>
        </div>
        
        </>
    )
}

export default Content