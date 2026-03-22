import { Button } from "@mui/material";

type PageErrorStateProps = {
    title?: string;
    message?: string;
    onRetry?: () => void;
};

const PageErrorState = ({
    title = "Failed to load page",
    message = "Please try again in a moment.",
    onRetry,
}: PageErrorStateProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600">{message}</p>
            {onRetry && (
                <Button
                    variant="contained"
                    onClick={onRetry}
                    className="px-4 py-2"
                >
                    Try again
                </Button>
            )}
        </div>
    );
};

export default PageErrorState;
