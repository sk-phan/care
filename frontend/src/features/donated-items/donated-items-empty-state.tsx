const DonatedItemsEmptyState = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-3">
            <h2 className="text-2xl font-semibold">No donated items yet</h2>
            <p className="text-gray-600">Check back later or be the first to list one.</p>
        </div>
    );
};

export default DonatedItemsEmptyState;
