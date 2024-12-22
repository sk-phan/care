const Heading = ({
    level = 1,
    title,
    subHeading,
    color = 'text-gray-800'
} : {
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    title: string,
    subHeading?: string,
    color?: string
}) => {
    if (level === 2) {
        return (
            <div className="mb-4">
                <h2 className={`text-4xl font-medium ${color}`}>{title}</h2>
                <p className="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                    {subHeading}
                </p>        
            </div>
        )
    }

    if (level === 3) {
        return (
            <div className="mb-4">
                <h3 className={`text-3xl font-medium ${color}`}>{title}</h3>        
                <p className="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                    {subHeading}
                </p>        
            </div>
        )
        
    }

    if (level === 4) {
        return <h4 className={`text-2xl font-medium ${color}`}>{title}</h4>        
    }

    if (level === 5) {
        return <h5 className={`text-xl font-medium ${color}`}>{title}</h5>        
    }

    if (level === 6) {
        return <h6 className={`text-lg font-medium ${color}`}>{title}</h6>        
    }

    return (
        <h1 className={`text-5xl font-medium ${color}`}>{title}</h1>
    )
};

export default Heading;