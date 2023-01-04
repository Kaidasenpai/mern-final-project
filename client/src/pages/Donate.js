import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

const Donate = () => {
    const { user } = useAuthContext()
    return (
        <>
        <div
                  className="flex items-center pt-[40px] before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center text-3xl font-semibold mx-4 mb-0">Donation</p>
                </div>
        <div class='flex justify-center py-[80px]'>
            
            <div class="block p-6 rounded-lg shadow-2xl bg-white max-w-sm">
                <form>
                    <p class="form-group mb-6 text-center font-bold">An email will be sent to you with an invoice for the donation.</p>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput90"
                            placeholder="Name"></input>
                    </div>
                    <div class="form-group mb-6">
                        <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput91"
                            placeholder="Email address"
                            value = { user && ( user.email )}
                            ></input>
                    </div>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput90"
                            placeholder="Donation amount"></input>
                    </div>
                    <div class="form-group form-check text-center mb-6">
                        <input type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck96" unchecked></input>
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck96">I pledge to pay the donation amount.</label>
                    </div>
                    <Link to='/'>
                    <button type="submit" class="
                        w-full
                        px-6
                        py-2.5
                        bg-green-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-green-700 hover:shadow-lg
                        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-green-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Subscribe</button></Link>
                </form>
            </div>
        </div>
        </>
    );
}

export default Donate;