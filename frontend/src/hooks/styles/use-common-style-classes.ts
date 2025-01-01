const useCommonStyleClasses = () => {
    const pageHeader = 'hero-title md:text-7xl text-4xl font-medium leading-6';
    const pageDescription = 'font-medium text-gray-500';
    const coverImage = 'h-[300px] w-full object-cover md:h-[500px] md:object-[50%_0%] mt-8'

    return {
        pageHeader,
        pageDescription,
        coverImage
    }
};

export default useCommonStyleClasses;