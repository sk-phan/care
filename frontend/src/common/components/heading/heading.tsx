const Heading = ({
    level = 1,
    heading,
    subHeading,
    color,
    subHeadingColor = 'text-gray-500'
} : {
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    heading: string,
    subHeading?: string,
    color?: string,
    subHeadingColor?: string;
}) => {

    const headingLevels: { [key: number]: string } = {
        1: 'text-4xl md:text-6xl font-semibold',
        2:'text-3xl md:text-5xl font-semibold',
        3: 'text-2xl md:text-3xl font-semibold',
        4: 'text-xl md:text-2xl font-semibold',
        5: 'text-lg md:text-xl font-semibold',
        6: 'text-base md:text-lg font-medium'
    };

    const subHeadingLevels: { [key: number]: string } = {
        1: 'text-lg font-normal lg:text-lg',
        2: 'text-base font-normal lg:text-lg',
        3: 'text-base font-normal lg:text-lg',
        4: 'text-base font-normal lg:text-lg',
        5: 'text-sm font-normal lg:text-lg',
        6: 'text-base md:text-lg font-medium'
    };

    const HeadingTag: React.ElementType = `h${level}`;
    
    return (
        <div className="mb-4">
            <HeadingTag className={`${color} ${headingLevels[level]}`}>
                {heading}
            </HeadingTag>
            <p className={`${subHeadingColor} ${subHeadingLevels[level]}`}>
                {subHeading}
            </p> 
        </div>
    )
};

export default Heading;