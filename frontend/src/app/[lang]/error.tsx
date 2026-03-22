"use client";

import PageErrorState from "@/common/components/page-error-state";

type HomeErrorProps = {
    error: Error;
    reset: () => void;
};

export default function HomeError({ error: _error, reset }: HomeErrorProps) {
    return (
        <PageErrorState
            title="Failed to load page"
            message="Please try again in a moment."
            onRetry={reset}
        />
    );
}
