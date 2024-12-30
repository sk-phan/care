import { LocaleType } from "@/app/i18n/locales/locales.type";
import { Button, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEvent, useState } from "react";
import { MdLanguage } from "react-icons/md";

const LanguageSelection = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
    const open = Boolean(anchorEl);
    
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget as HTMLElement); 
    };
    
    const handleClose = (selectedLanguage: LocaleType) => {
        setAnchorEl(null);
        
        const segments = pathname.split('/').filter(Boolean); 
        segments[0] = selectedLanguage;
        const newPath = `/${segments.join('/')}`;

        replace(`${newPath}?${searchParams.toString()}`)
    };

    return (
            <div>
                <Button 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    aria-label="select language"
                    variant="text">
                    <MdLanguage size={24}/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
                    <MenuItem onClick={() => handleClose('fi')}>Suomi</MenuItem>
                </Menu>
            </div>
    )
};

export default LanguageSelection;