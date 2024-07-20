function ErrorAlert({errorMsg}:{errorMsg:string}) {
    return (
        <div className="mt-2 bg-red-500 text-sm text-white rounded-lg p-4 top-3 right-3 animate-fadeInOut absolute">
            <span className="font-bold">Error!</span> {errorMsg}
        </div>
    )
};

export default ErrorAlert;