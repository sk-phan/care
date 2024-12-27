const Tabs = () => {
    return (
        <div className="mb-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px justify-center">
                <li className="me-2">
                    <button className="inline-block py-2 px-4 rounded-full bg-gray-50 hover:bg-black hover:text-white">Toys</button>
                </li>
                <li className="me-2">
                    <button className="inline-block py-2 px-4 rounded-full bg-gray-50 hover:bg-black hover:text-white" aria-current="page">Books</button>
                </li>
                <li className="me-2">
                    <button className="inline-block py-2 px-4 rounded-full bg-gray-50 hover:bg-black hover:text-white">Clothes</button>
                </li>
                <li className="me-2">
                    <button className="inline-block py-2 px-4 rounded-full bg-gray-50 hover:bg-black hover:text-white">Others</button>
                </li>
            </ul>
        </div>
    )
}

export default Tabs;