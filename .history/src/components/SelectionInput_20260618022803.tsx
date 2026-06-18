    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import Autocomplete from '@mui/material/Autocomplete';

    export default function CountrySelect() {
    return (
        <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
            <Box
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...optionProps}
            >
                <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
                />
                {option.label} ({option.code}) +{option.phone}
            </Box>
            );
        }}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Choose a country"
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
    interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
    }
    // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
    const countries: readonly CountryType[] =const currencies = [
  {
    code: "US",
    currency: "USD",
    label: "United States Dollar",
  },
  {
    code: "EU",
    currency: "EUR",
    label: "Euro",
  },
  {
    code: "GB",
    currency: "GBP",
    label: "British Pound",
  },
  {
    code: "EG",
    currency: "EGP",
    label: "Egyptian Pound",
  },
];