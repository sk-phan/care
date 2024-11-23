import { AlertColor } from "@mui/material";

export type NotificationOptions = {
    message: string;
    severity?: AlertColor;
    duration?: number;
};

export type NotificationContextType = {
    notify: (options: NotificationOptions) => void;
};
