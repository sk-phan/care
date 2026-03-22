"use client";

import PageErrorState from "@/common/components/page-error-state";

type DonatedItemsErrorProps = {
    error: Error;
    reset: () => void;
};

export default function DonatedItemsError({ error: _error, reset }: DonatedItemsErrorProps) {
    return (
        <PageErrorState
            title="Failed to load page"
            message="Please try again in a moment."
            onRetry={reset}
        />
    );
}
