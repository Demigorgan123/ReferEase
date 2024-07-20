function SuccessAlert({successMsg}:{successMsg:string}) {
    return (
        <div className="mt-2 bg-teal-500 text-sm text-white rounded-lg p-4 absolute top-3 right-3 animate-fadeInOut">
            <span className="font-bold">{successMsg}</span>
        </div>
    )
};
export default SuccessAlert;