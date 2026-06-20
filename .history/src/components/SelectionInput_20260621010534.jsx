    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import Autocomplete from '@mui/material/Autocomplete';

    export default function CountrySelect() {
    return (
      
        
    )
    }

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