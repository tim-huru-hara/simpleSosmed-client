import showToast from "../utils/toast"

export default () => {
    const notify = () => showToast({ message: "Hello" })

    return (
        <>
            <div className="w-screen h-screen content-center">
                <div className="grid grid-cols-1 justify-center">
                    <h1 className="text-center  text-5xl">Home</h1>
                    <button className="" onClick={notify}>Click me!</button>
                </div>
            </div>
        </>
    )
}