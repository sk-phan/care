import React, { createContext, useState, ReactNode, useCallback } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import { NotificationContextType, NotificationOptions } from "./notification-context.type";

const DEFAULT_DURATION = 3000;

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");
    const [duration, setDuration] = useState(DEFAULT_DURATION);

    const notify = useCallback((options: NotificationOptions) => {
        setMessage(options.message);
        setSeverity(options.severity || "success");
        setDuration(options.duration || DEFAULT_DURATION);
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
        {children}
        <Snackbar
            open={open}
            autoHideDuration={duration}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }} 
        >
            <Alert 
                onClose={handleClose} 
                severity={severity}
                sx={{ width: "100%" }}>
                    {message}
            </Alert>
        </Snackbar>
        </NotificationContext.Provider>
    );
};
