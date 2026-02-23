import Button from '../assets/Button.png'
import CommentCenter from '../assets/CommentCenter.png'
const Content = () => {

    return (
        <>

            <div className="relative overflow-hidden max-w-7xl w-full min-h-screen mx-auto">
                <div className='flex flex-col items-center gap-5'>
                    <h1 className="mt-5 text-center font-medium text-4xl sm:text-5xl lg:text-6xl max-w-prose text-text-heading">Smart <span className="font-semibold text-primary-dark">HealthCare</span><br />Management</h1>
                    <p className="font-extralight text-text-body lg:text-lg md:text-md text-sm mx-auto w-full max-w-[300px] lg:max-w-[500px] text-center tracking-wide leading-7">Comprehensive hospital management system for modern healthcare facilities</p>
                    <button className="cursor-pointer transition-all transform active:scale-95"><img src={Button} className='max-w-[250px] md:max-w-full' alt=""/></button>
                    <img src={CommentCenter} className="-translate-y-24 md:-translate-y-28 max-w-[350px] absolute bottom-0 mx-auto " alt="" />
                </div>
            </div>


        </>
    )
}

export default Content