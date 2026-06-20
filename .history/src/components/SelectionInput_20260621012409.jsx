    // MATERIAL UI
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import Autocomplete from '@mui/material/Autocomplete';
    
    export default function CountrySelect() {
    return (
        <Autocomplete
        id="country-select-demo"
        sx={{ width: 100,
            outlineColor:"#42eb05"
        }}
        slotProps={{
            paper: {
            sx: {
                width: 300,
                maxHeight: 400,
                marginLeft:-25,
                marginTop:"25px",
                backgroundColor:"#454547",
                color:"white"
            }}}}
        options={countries}
        autoHighlight
        size='small'
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
            <Box
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 }}}
                {...optionProps}
            >
                <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
                slotProps={{
                    paper: {
                        sx: {
                        bgcolor: "#202124",
                        color: "white",
                        border: "1px solid #333",
                        borderRadius: "10px",
                        boxShadow: 5,
                        width:300
                        },
                    },
                    popper: {
                        sx: {
                            "& .MuiAutocomplete-paper": {
                            width: 300,
                            },
                        },
                    }
}}
                />
                {option.label} ({option.code}) +{option.phone}
            </Box>
            );
        }}
        renderInput={(params) => (
            <TextField
            {...params}
            label="__"
            slotProps={{
                ...params.slotProps,
                htmlInput: {
                ...params.slotProps.htmlInput,
                autoComplete: 'new-password', // disable autocomplete and autofill
                },
            }}
            />
        )}
        />
    );
    }

    // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
        const countries = [
    { code: 'AD', label: 'Andorra', currency: 'EUR' },
    { code: 'AE', label: 'United Arab Emirates', currency: 'AED' },
    { code: 'AF', label: 'Afghanistan', currency: 'AFN' },
    { code: 'AG', label: 'Antigua and Barbuda', currency: 'XCD' },
    { code: 'AI', label: 'Anguilla', currency: 'XCD' },
    { code: 'AL', label: 'Albania', currency: 'ALL' },
    { code: 'AM', label: 'Armenia', currency: 'AMD' },
    { code: 'AO', label: 'Angola', currency: 'AOA' },
    { code: 'AQ', label: 'Antarctica', currency: null },
    { code: 'AR', label: 'Argentina', currency: 'ARS' },
    { code: 'AS', label: 'American Samoa', currency: 'USD' },
    { code: 'AT', label: 'Austria', currency: 'EUR' },
    { code: 'AU', label: 'Australia', currency: 'AUD', suggested: true },
    { code: 'AW', label: 'Aruba', currency: 'AWG' },
    { code: 'AX', label: 'Åland Islands', currency: 'EUR' },
    { code: 'AZ', label: 'Azerbaijan', currency: 'AZN' },
    { code: 'BA', label: 'Bosnia and Herzegovina', currency: 'BAM' },
    { code: 'BB', label: 'Barbados', currency: 'BBD' },
    { code: 'BD', label: 'Bangladesh', currency: 'BDT' },
    { code: 'BE', label: 'Belgium', currency: 'EUR' },
    { code: 'BF', label: 'Burkina Faso', currency: 'XOF' },
    { code: 'BG', label: 'Bulgaria', currency: 'BGN' },
    { code: 'BH', label: 'Bahrain', currency: 'BHD' },
    { code: 'BI', label: 'Burundi', currency: 'BIF' },
    { code: 'BJ', label: 'Benin', currency: 'XOF' },
    { code: 'BR', label: 'Brazil', currency: 'BRL' },
    { code: 'CA', label: 'Canada', currency: 'CAD', suggested: true },
    { code: 'CH', label: 'Switzerland', currency: 'CHF' },
    { code: 'CN', label: 'China', currency: 'CNY' },
    { code: 'DE', label: 'Germany', currency: 'EUR', suggested: true },
    { code: 'EG', label: 'Egypt', currency: 'EGP' },
    { code: 'ES', label: 'Spain', currency: 'EUR' },
    { code: 'FR', label: 'France', currency: 'EUR', suggested: true },
    { code: 'GB', label: 'United Kingdom', currency: 'GBP' },
    { code: 'IN', label: 'India', currency: 'INR' },
    { code: 'IT', label: 'Italy', currency: 'EUR' },
    { code: 'JP', label: 'Japan', currency: 'JPY', suggested: true },
    { code: 'MX', label: 'Mexico', currency: 'MXN' },
    { code: 'NG', label: 'Nigeria', currency: 'NGN' },
    { code: 'NL', label: 'Netherlands', currency: 'EUR' },
    { code: 'NO', label: 'Norway', currency: 'NOK' },
    { code: 'PK', label: 'Pakistan', currency: 'PKR' },
    { code: 'PL', label: 'Poland', currency: 'PLN' },
    { code: 'PT', label: 'Portugal', currency: 'EUR' },
    { code: 'QA', label: 'Qatar', currency: 'QAR' },
    { code: 'RU', label: 'Russia', currency: 'RUB' },
    { code: 'SA', label: 'Saudi Arabia', currency: 'SAR' },
    { code: 'SE', label: 'Sweden', currency: 'SEK' },
    { code: 'SG', label: 'Singapore', currency: 'SGD' },
    { code: 'TR', label: 'Turkey', currency: 'TRY' },
    { code: 'UA', label: 'Ukraine', currency: 'UAH' },
    { code: 'US', label: 'United States', currency: 'USD', suggested: true },
    { code: 'ZA', label: 'South Africa', currency: 'ZAR' },
    ];