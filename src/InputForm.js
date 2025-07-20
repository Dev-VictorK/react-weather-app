function InputForm() {
    return (
        <form>
            <input className="border border-black rounded-md m-4 p-2" 
            placeholder="Enter city"/>
            <button className="border border-black bg-gray-600 text-white p-2 rounded-md">Add</button>
        </form>
    )
}
export default InputForm;