"use client";

import { CircularProgress } from "@mui/material";

type LoaderProps = {
    fullScreen?: boolean;
}

const Loader = ({ fullScreen = true }: LoaderProps) => {
    return (
        <div className={fullScreen ? "min-h-screen flex items-center justify-center" : "flex items-center justify-center"}>
            <CircularProgress color="primary" />
        </div>
    );
};

export default Loader;
