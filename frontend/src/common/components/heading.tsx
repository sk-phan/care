const Heading = ({
    level = 1,
    title,
    subHeading,
    color,
    subHeadingColor = 'text-gray-500'
} : {
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    title: string,
    subHeading?: string,
    color?: string,
    subHeadingColor?: string;
}) => {
    if (level === 2) {
        return (
            <div className="mb-4">
                <h2 className={`text-3xl md:text-5xl font-semibold ${color}`}>{title}</h2>
                <p className={`text-base font-normal lg:text-lg ${subHeadingColor}`}>
                    {subHeading}
                </p>        
            </div>
        )
    }

    if (level === 3) {
        return (
            <div className="mb-4">
                <h3 className={`text-2xl md:text-3xl font-semibold ${color}`}>{title}</h3>        
                <p className={`text-base font-normal lg:text-lg ${subHeadingColor}`}>
                    {subHeading}
                </p>        
            </div>
        )
        
    }

    if (level === 4) {
        return (
            <div className="mb-4">
                <h4 className={`text-xl md:text-2xl font-semibold ${color}`}>{title}</h4>    
                <p className={`text-base font-normal lg:text-lg ${subHeadingColor}`}>
                    {subHeading}
                </p>        
            </div>
        )    
    }

    if (level === 5) {
        return (
            <div className="mb-4">
                <h5 className={`text-lg md:text-xl font-semibold ${color}`}>{title}</h5>                    
                <p className={`text-sm font-normal lg:text-lg ${subHeadingColor}`}>
                    {subHeading}
                </p>        
            </div>
        )   
    }

    if (level === 6) {
        return (
            <div className="mb-4">
                <h6 className={`text-base md:text-lg font-medium ${color}`}>{title}</h6>        
                <p className={`text-base font-normal ${subHeadingColor}`}>
                    {subHeading}
                </p>        
            </div>
        )
    }

    return (
        <div className="mb-4">
            <h1 className={`text-4xl md:text-6xl font-semibold ${color}`}>{title}</h1>
            <p className={`text-lg font-normal lg:text-lg ${subHeadingColor}`}>
                {subHeading}
            </p>        
        </div>
    )
};

export default Heading;