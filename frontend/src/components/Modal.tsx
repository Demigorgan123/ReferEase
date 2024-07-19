import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type modalProps = {
    toggleModal: Dispatch<SetStateAction<boolean>>
}
type Inputs = {
    referTo: string,
    referFrom: string,
    referralCode: string
}
function Modal(props: modalProps) {
    const handleClose = () => {
        props.toggleModal(false)
    }
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#1A73E8]">Referral Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Refer From</label>
                        <input {...register("referFrom", { 
                            required: "This is required",
                            pattern: { 
                                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                message: "Enter valid email id" } 
                            })}
                            type="email"
                            className="block w-full mt-1 rounded-lg border-gray-300 border-[1px] outline-none px-5 py-2"
                            placeholder="referee@example.com" />
                        <p className="text-red-600">{errors.referFrom?.message}</p>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Refer To</label>
                        <input {...register("referTo", { 
                            required: "This is required",
                            pattern:{
                                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                message: "Enter valid email id"
                            }
                        })}
                            type="email"
                            className="block w-full mt-1 rounded-lg border-gray-300 border-[1px] outline-none px-5 py-2"
                            placeholder="referral@example.com" />
                        <p className="text-red-600">{errors.referTo?.message}</p>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Referral Code</label>
                        <input {...register("referralCode", { 
                            required: "This is required", 
                            minLength: { 
                                value: 8, 
                                message: "Min length is 8" 
                            }, 
                            pattern: { 
                                value: /^[A-Z0-9]{8}$/,
                                message: "Enter valid code" 
                                }, 
                            maxLength: { 
                                value: 8, 
                                message: "Max length is 8"
                            } 
                        })}
                            type="text"
                            className="block w-full mt-1 rounded-lg border-gray-300 border-[1px] outline-none px-5 py-2"
                            placeholder="REF12345" />
                        <p className="text-red-600">{errors.referralCode?.message}</p>
                    </div>
                    <div>
                        <input type="submit"
                            className="w-full bg-[#1A73E8] text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;