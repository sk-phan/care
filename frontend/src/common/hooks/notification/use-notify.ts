import { NotificationContext } from "@/common/stores/notification/notification-context";
import { useContext } from "react";

export const useNotify = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotify must be used within a NotificationProvider");
    }
    return context.notify;
};