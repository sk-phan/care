const FormHelperText = ({ message } : { message: string}) => {
    return (
        <span className="text-red-500 text-xs mt-1" role="alert">
            {message}
        </span>
    )
};

export default FormHelperText;