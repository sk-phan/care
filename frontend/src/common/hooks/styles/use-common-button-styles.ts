const useCommonButtonStyles = () => {
    const linkButton = {
        textTransform: "none", 
        textDecoration: "underline",
        color: "primary.main", 
        "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
            textDecorationThickness: "2px",
        },
        "&:active": {
            backgroundColor: "transparent",
        },
    };

    return {
        linkButton
    }
};

export default useCommonButtonStyles;