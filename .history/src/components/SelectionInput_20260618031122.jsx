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
  { code: 'AD', label: 'Andorra' },
  { code: 'AE', label: 'United Arab Emirates' },
  { code: 'AF', label: 'Afghanistan' },
  { code: 'AG', label: 'Antigua and Barbuda' },
  { code: 'AI', label: 'Anguilla' },
  { code: 'AL', label: 'Albania' },
  { code: 'AM', label: 'Armenia' },
  { code: 'AO', label: 'Angola' },
  { code: 'AQ', label: 'Antarctica' },
  { code: 'AR', label: 'Argentina' },
  { code: 'AS', label: 'American Samoa' },
  { code: 'AT', label: 'Austria' },
  { code: 'AU', label: 'Australia', suggested: true },
  { code: 'AW', label: 'Aruba' },
  { code: 'AX', label: 'Alland Islands' },
  { code: 'AZ', label: 'Azerbaijan' },
  { code: 'BA', label: 'Bosnia and Herzegovina' },
  { code: 'BB', label: 'Barbados' },
  { code: 'BD', label: 'Bangladesh' },
  { code: 'BE', label: 'Belgium' },
  { code: 'BF', label: 'Burkina Faso' },
  { code: 'BG', label: 'Bulgaria' },
  { code: 'BH', label: 'Bahrain' },
  { code: 'BI', label: 'Burundi' },
  { code: 'BJ', label: 'Benin' },
  { code: 'BL', label: 'Saint Barthelemy' },
  { code: 'BM', label: 'Bermuda' },
  { code: 'BN', label: 'Brunei Darussalam' },
  { code: 'BO', label: 'Bolivia' },
  { code: 'BR', label: 'Brazil' },
  { code: 'BS', label: 'Bahamas' },
  { code: 'BT', label: 'Bhutan' },
  { code: 'BV', label: 'Bouvet Island' },
  { code: 'BW', label: 'Botswana' },
  { code: 'BY', label: 'Belarus' },
  { code: 'BZ', label: 'Belize' },
  { code: 'CA', label: 'Canada', suggested: true },
  { code: 'CC', label: 'Cocos (Keeling) Islands' },
  { code: 'CD', label: 'Congo, Democratic Republic of the' },
  { code: 'CF', label: 'Central African Republic' },
  { code: 'CG', label: 'Congo, Republic of the' },
  { code: 'CH', label: 'Switzerland' },
  { code: 'CI', label: "Cote d'Ivoire" },
  { code: 'CK', label: 'Cook Islands' },
  { code: 'CL', label: 'Chile' },
  { code: 'CM', label: 'Cameroon' },
  { code: 'CN', label: 'China' },
  { code: 'CO', label: 'Colombia' },
  { code: 'CR', label: 'Costa Rica' },
  { code: 'CU', label: 'Cuba' },
  { code: 'CV', label: 'Cape Verde' },
  { code: 'CW', label: 'Curacao' },
  { code: 'CX', label: 'Christmas Island' },
  { code: 'CY', label: 'Cyprus' },
  { code: 'CZ', label: 'Czech Republic' },
  { code: 'DE', label: 'Germany', suggested: true },
  { code: 'DJ', label: 'Djibouti' },
  { code: 'DK', label: 'Denmark' },
  { code: 'DM', label: 'Dominica' },
  { code: 'DO', label: 'Dominican Republic' },
  { code: 'DZ', label: 'Algeria' },
  { code: 'EC', label: 'Ecuador' },
  { code: 'EE', label: 'Estonia' },
  { code: 'EG', label: 'Egypt' },
  { code: 'EH', label: 'Western Sahara' },
  { code: 'ER', label: 'Eritrea' },
  { code: 'ES', label: 'Spain' },
  { code: 'ET', label: 'Ethiopia' },
  { code: 'FI', label: 'Finland' },
  { code: 'FJ', label: 'Fiji' },
  { code: 'FR', label: 'France', suggested: true },
  { code: 'GA', label: 'Gabon' },
  { code: 'GB', label: 'United Kingdom' },
  { code: 'GD', label: 'Grenada' },
  { code: 'GE', label: 'Georgia' },
  { code: 'GH', label: 'Ghana' },
  { code: 'GI', label: 'Gibraltar' },
  { code: 'GL', label: 'Greenland' },
  { code: 'GM', label: 'Gambia' },
  { code: 'GN', label: 'Guinea' },
  { code: 'GR', label: 'Greece' },
  { code: 'GT', label: 'Guatemala' },
  { code: 'HK', label: 'Hong Kong' },
  { code: 'HN', label: 'Honduras' },
  { code: 'HR', label: 'Croatia' },
  { code: 'HU', label: 'Hungary' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'IE', label: 'Ireland' },
  { code: 'IL', label: 'Israel' },
  { code: 'IN', label: 'India' },
  { code: 'IQ', label: 'Iraq' },
  { code: 'IR', label: 'Iran' },
  { code: 'IS', label: 'Iceland' },
  { code: 'IT', label: 'Italy' },
  { code: 'JP', label: 'Japan', suggested: true },
  { code: 'KE', label: 'Kenya' },
  { code: 'KR', label: 'South Korea' },
  { code: 'KW', label: 'Kuwait' },
  { code: 'LB', label: 'Lebanon' },
  { code: 'LT', label: 'Lithuania' },
  { code: 'LU', label: 'Luxembourg' },
  { code: 'LV', label: 'Latvia' },
  { code: 'MA', label: 'Morocco' },
  { code: 'MX', label: 'Mexico' },
  { code: 'MY', label: 'Malaysia' },
  { code: 'NG', label: 'Nigeria' },
  { code: 'NL', label: 'Netherlands' },
  { code: 'NO', label: 'Norway' },
  { code: 'NP', label: 'Nepal' },
  { code: 'NZ', label: 'New Zealand' },
  { code: 'OM', label: 'Oman' },
  { code: 'PK', label: 'Pakistan' },
  { code: 'PL', label: 'Poland' },
  { code: 'PT', label: 'Portugal' },
  { code: 'QA', label: 'Qatar' },
  { code: 'RO', label: 'Romania' },
  { code: 'RU', label: 'Russia' },
  { code: 'SA', label: 'Saudi Arabia' },
  { code: 'SE', label: 'Sweden' },
  { code: 'SG', label: 'Singapore' },
  { code: 'TH', label: 'Thailand' },
  { code: 'TR', label: 'Turkey' },
  { code: 'UA', label: 'Ukraine' },
  { code: 'US', label: 'United States', suggested: true },
  { code: 'VN', label: 'Vietnam' },
  { code: 'ZA', label: 'South Africa' },
];