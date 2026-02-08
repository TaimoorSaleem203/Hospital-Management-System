import { useState } from "react"
import { Link } from "react-router-dom"

const LogOut = () => {

    const [logout, setLogout] = useState(false)

    return (
        <>
            <button onClick={() => setLogout(true)} className={`text-white cursor-pointer flex items-center gap-2 px-10 pt-3 p-2 text-lg absolute bottom-0 right-0 mb-3 border-white/30 border-t w-full mx-auto`} command="show-modal" commandfor="dialog"><i class="ri-logout-box-r-line"></i>Logout</button>
                {console.log(logout)}
            <el-dialog className={`${logout ? "hidden":"block"} font-poppins`}>
                <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <el-dialog-backdrop class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                    <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] sm:mx-0 sm:size-10">
                                        <i class="ri-logout-box-r-line"></i>
                                    </div>
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 id="dialog-title" class="text-base font-semibold text-gray-900">Log Out</h3>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">Are you sure you want to logout?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {console.log(logout)}
                            {!logout &&
                                (
                                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse gap-2 sm:px-6">
                                    <button onClick={() => setLogout(false)} type="button" command="close" commandfor="dialog" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                    <Link to={"/portal"}>
                                        <button type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-[#0FB9B1] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#009E9A] sm:ml-3 sm:w-auto">Log Out</button>
                                    </Link>
                                </div>
                                )
                            }
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>
        </>
    )
}

export default LogOut