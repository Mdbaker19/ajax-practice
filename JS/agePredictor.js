$(document).ready(function (){

    const baseUrl = "https://api.agify.io?name=";
    const addCountry = "&country_id=";

const countryKeys = [
    "*", "FR", "IT", "ES", "TR", "DE", "PL", "GB", "RU", "CZ", "PT", "NL", "BE", "MA", "PH", "US",
    "RO", "DZ", "NG", "CH", "HU", "TH", "SE", "ID", "IN", "UA", "MY", "TN", "SA", "GR", "CI", "AT", "ZA",
    "KR", "CN", "RS", "JP", "EG", "SK", "SN", "DK", "FI", "CM", "IR", "AR", "CA", "SG", "PK", "GH", "LB",
    "IE", "AO", "NO", "BY", "BR", "MX", "CO", "KE", "CL", "KW", "AL", "VE", "RE", "BA", "IL",
    "TW", "SI", "KZ", "PE", "AZ", "AE", "CY", "LT", "DO", "JO", "MD", "BJ", "BG", "CD", "HR",
    "LV", "HK", "MZ", "AU", "LU", "UG", "ML", "BF", "MU", "OM", "TG", "QA", "MK", "MG",
    "VN", "GA", "EE", "IQ", "MT", "BH", "TZ", "EC", "GE", "AM", "SD", "ET", "MM", "ME",
    "SY", "UZ", "ZW", "DJ", "LK", "BD", "SH", "BW", "CV", "BO", "YE", "RW", "IS", "LY", "NE",
    "AD", "GM", "CG", "ZM", "AF", "NA", "MR", "UY", "CR", "KG", "PA", "NP", "GN", "GP", "GQ",
    "MQ", "SC", "CU", "NZ", "GT", "MC", "MV", "MW", "SV", "GF", "SL", "LR", "NI", "KH", "TJ",
    "PR", "BI", "PY", "KM", "LS", "SO", "HN", "TD", "GI", "BN", "SM", "JE", "SZ", "TM",
    "NC", "MN", "LI", "GL", "BT", "PF", "ST", "YT", "FO", "JM", "HT", "BS", "GW", "FJ",
    "GG", "LA", "TL", "TT", "AG", "EH", "CF", "PW", "IM", "AW", "BZ", "AS", "AI", "MP", "BM",
    "ER", "SR", "VG", "VI", "GY", "BB", "MH", "MO", "PG", "KY", "KI", "AN", "CK", "GU",
    "WF", "PS", "TC", "VU", "LC", "TO", "CC", "WS", "GD", "VA", "IO","FM", "NU",
    "BL", "KN", "PM", "FK", "AQ", "PN", "MF", "TV", "VC", "DM", "SB", "TK", "NF", "CX", "NR", "SJ", "MS", "KP", "GS", "BV",
];
const countryNames = [
    "All", "France", "Italy", "Spain",
    "Turkey", "Germany", "Poland", "United Kingdom", "Russia", "Czech Republic", "Portugal", "Netherlands",
    "Belgium", "Morocco", "Philippines", "United States", "Romania", "Algeria", "Nigeria", "Switzerland",
    "Hungary", "Thailand", "Sweden", "Indonesia", "India", "Ukraine", "Malaysia", "Tunisia",
    "Saudi Arabia", "Greece", "Ivory Coast", "Austria", "South Africa", "South Korea", "China", "Serbia",
    "Iran", "Argentina", "Canada", "Singapore", "Pakistan", "Ghana", "Lebanon", "Ireland",
    "Angola", "Norway", "Belarus", "Brazil", "Mexico", "Colombia", "Kenya", "Chile",
    "Kuwait", "Albania", "Venezuela", "Reunion", "Bosnia and Herzegovina", "Israel", "Taiwan", "Slovenia",
    "Kazakhstan", "Peru", "Azerbaijan", "United Arab Emirates", "Cyprus", "Lithuania", "Dominican Republic", "Jordan",
    "Moldova", "Benin", "Bulgaria", "Democratic Republic of the Congo", "Croatia", "Latvia", "Hong Kong", "Mozambique",
    "Australia", "Luxembourg", "Uganda", "Mali", "Burkina Faso", "Mauritius", "Oman", "Togo",
    "Qatar", "Macedonia", "Madagascar", "Vietnam", "Gabon", "Estonia", "Iraq", "Malta",
    "Bahrain", "Tanzania", "Ecuador", "Georgia", "Armenia", "Sudan", "Ethiopia", "Myanmar",
    "Bangladesh", "Saint Helena", "Botswana", "Cape Verde", "Bolivia", "Yemen", "Rwanda", "Iceland",
    "Libya", "Niger", "Andorra", "Gambia", "Republic of the Congo", "Zambia", "Afghanistan", "Namibia",
    "Mauritania", "Uruguay", "Costa Rica", "Kyrgyzstan", "Panama", "Nepal", "Guinea",
    "Guadeloupe", "Equatorial Guinea", "Martinique", "Seychelles", "Cuba", "New Zealand", "Guatemala", "Monaco",
    "Maldives", "Malawi", "El Salvador", "French Guiana", "Sierra Leone", "Liberia", "Nicaragua", "Cambodia",
    "Tajikistan", "Puerto Rico", "Burundi", "Paraguay", "Comoros", "Lesotho", "Somalia",
    "Honduras", "Chad", "Gibraltar", "Brunei", "San Marino", "Jersey", "Swaziland",
    "Turkmenistan", "New Caledonia", "Mongolia", "Liechtenstein", "Greenland", "Bhutan", "French Polynesia",
    "Sao Tome and Principe", "Mayotte", "Faroe Islands", "Jamaica", "Haiti", "Bahamas", "Guinea-Bissau",
    "Fiji", "Guernsey", "Laos", "East Timor", "Trinidad and Tobago", "Antigua and Barbuda", "Western Sahara",
    "Central African Republic", "Palau", "Isle of Man", "Aruba", "Belize", "American Samoa", "Anguilla",
    "Northern Mariana Islands", "Bermuda", "Eritrea", "Suriname", "British Virgin Islands", "U.S. Virgin Islands", "Guyana",
    "Barbados", "Marshall Islands", "Macao", "Papua New Guinea", "Cayman Islands", "Kiribati",
    "Netherlands Antilles", "Cook Islands", "Guam", "Wallis and Futuna", "Palestine", "Turks and Caicos Islands",
    "Vanuatu", "Saint Lucia", "Tonga", "Cocos Islands", "Samoa", "Grenada",
    "Vatican", "British Indian Ocean Territory", "Micronesia", "Niue", "Saint Barthelemy", "Saint Kitts and Nevis",
    "Saint Pierre and Miquelon", "Falkland Islands", "Antarctica", "Pitcairn", "Saint Martin", "Tuvalu",
    "Saint Vincent and the Grenadines", "Dominica", "Solomon Islands", "Tokelau", "Norfolk Island", "Christmas Island",
    "Nauru", "Svalbard and Jan Mayen", "Montserrat", "North Korea", "South Georgia And Sandwich Isl", "Bouvet Island"
];


    async function getAge(person, country){
        try{
            let agePromise = await fetch(`${baseUrl}${person}${addCountry}${country}`);
            let data = await agePromise.json();
            return data
        }   catch (err){
            console.error(err);
        }
    }

    getAge("matthew", "US").then(console.log);

});