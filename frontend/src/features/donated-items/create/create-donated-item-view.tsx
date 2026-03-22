"use client";

import { Button } from "@mui/material";
import { FormProvider } from "react-hook-form";

import CreateDonatedItemPreview from "./form/create-donated-item-preview";
import CreateDonatedItemViewFields from "./form/create-donated-item-form-fields";
import Heading from "@/common/components/heading/heading";
import { useTranslations } from "next-intl";
import { useCreateDonatedItemVM } from "./use-create-donated-item-vm";

const CreateDonatedItemView = () => {
    const tDonatedItems = useTranslations("donated-items.registration-form");
    const tCommon = useTranslations("common.common");
    const { method, handleSubmit, handleSubmitPickupRequest, isSubmitButtonDisabled, navigateBack, getSelectedItemPath } = useCreateDonatedItemVM();
   
    return (
        <FormProvider {...method}>
            <div className="flex flex-col md:flex-row justify-between gap-12 h-full">
                <form onSubmit={handleSubmit(handleSubmitPickupRequest)} className="md:w-1/2">
                    <Heading 
                        level={2}
                        heading={tDonatedItems("title")}
                        subHeading={tDonatedItems("subtitle")}
                    />
                    <CreateDonatedItemViewFields />
                    <div className="flex gap-4 justify-end">
                        <Button 
                            variant="outlined"
                            onClick={navigateBack}
                        >
                            {tCommon("cancel")}
                        </Button>
                        <Button 
                        type="submit"
                        variant="contained"
                        disabled={isSubmitButtonDisabled} 
                        >
                            {tCommon("send")}
                        </Button>
                    </div>
                </form>
                <div className="hidden md:flex md:w-1/2 rounded-lg bg-primary items-center justify-center">
                    <CreateDonatedItemPreview 
                        getSelectedItemPath={getSelectedItemPath}
                    />
                </div>
            </div>
        </FormProvider>
    )
};

export default CreateDonatedItemView;