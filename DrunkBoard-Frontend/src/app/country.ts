export class Country {

  constructor(
    public isoCode: string,
    public name: string
  ) {}
}

export const COUNTRIES: Map<string, Country> = new Map<string, Country>()
  .set('AD', new Country('AD', 'Andorra'))
  .set('AE', new Country('AE', 'United Arab Emirates'))
  .set('AF', new Country('AF', 'Afghanistan'))
  .set('AG', new Country('AG', 'Antigua and Barbuda'))
  .set('AI', new Country('AI', 'Anguilla'))
  .set('AL', new Country('AL', 'Albania'))
  .set('AM', new Country('AM', 'Armenia'))
  .set('AN', new Country('AN', 'Netherlands Antilles'))
  .set('AO', new Country('AO', 'Angola'))
  .set('AQ', new Country('AQ', 'Antarctica'))
  .set('AR', new Country('AR', 'Argentina'))
  .set('AS', new Country('AS', 'American Samoa'))
  .set('AT', new Country('AT', 'Austria'))
  .set('AU', new Country('AU', 'Australia'))
  .set('AW', new Country('AW', 'Aruba'))
  .set('AX', new Country('AX', '\u00c5land Islands'))
  .set('AZ', new Country('AZ', 'Azerbaijan'))
  .set('BA', new Country('BA', 'Bosnia and Herzegovina'))
  .set('BB', new Country('BB', 'Barbados'))
  .set('BD', new Country('BD', 'Bangladesh'))
  .set('BE', new Country('BE', 'Belgium'))
  .set('BF', new Country('BF', 'Burkina Faso'))
  .set('BG', new Country('BG', 'Bulgaria'))
  .set('BH', new Country('BH', 'Bahrain'))
  .set('BI', new Country('BI', 'Burundi'))
  .set('BJ', new Country('BJ', 'Benin'))
  .set('BL', new Country('BL', 'Saint Barthélemy'))
  .set('BM', new Country('BM', 'Bermuda'))
  .set('BN', new Country('BN', 'Brunei Darussalam'))
  .set('BO', new Country('BO', 'Bolivia, Plurinational State of'))
  .set('BQ', new Country('BQ', 'Caribbean Netherlands'))
  .set('BR', new Country('BR', 'Brazil'))
  .set('BS', new Country('BS', 'Bahamas'))
  .set('BT', new Country('BT', 'Bhutan'))
  .set('BV', new Country('BV', 'Bouvet Island'))
  .set('BW', new Country('BW', 'Botswana'))
  .set('BY', new Country('BY', 'Belarus'))
  .set('BZ', new Country('BZ', 'Belize'))
  .set('CA', new Country('CA', 'Canada'))
  .set('CC', new Country('CC', 'Cocos (Keeling) Islands'))
  .set('CD', new Country('CD', 'Congo, the Democratic Republic of the'))
  .set('CF', new Country('CF', 'Central African Republic'))
  .set('CG', new Country('CG', 'Congo'))
  .set('CH', new Country('CH', 'Switzerland'))
  .set('CI', new Country('CI', 'C\u00f4te d\'Ivoire'))
  .set('CK', new Country('CK', 'Cook Islands'))
  .set('CL', new Country('CL', 'Chile'))
  .set('CM', new Country('CM', 'Cameroon'))
  .set('CN', new Country('CN', 'China'))
  .set('CO', new Country('CO', 'Colombia'))
  .set('CR', new Country('CR', 'Costa Rica'))
  .set('CU', new Country('CU', 'Cuba'))
  .set('CV', new Country('CV', 'Cape Verde'))
  .set('CW', new Country('CW', 'Cura\u00e7ao'))
  .set('CX', new Country('CX', 'Christmas Island'))
  .set('CY', new Country('CY', 'Cyprus'))
  .set('CZ', new Country('CZ', 'Czech Republic'))
  .set('DE', new Country('DE', 'Germany'))
  .set('DJ', new Country('DJ', 'Djibouti'))
  .set('DK', new Country('DK', 'Denmark'))
  .set('DM', new Country('DM', 'Dominica'))
  .set('DO', new Country('DO', 'Dominican Republic'))
  .set('DZ', new Country('DZ', 'Algeria'))
  .set('EC', new Country('EC', 'Ecuador'))
  .set('EE', new Country('EE', 'Estonia'))
  .set('EG', new Country('EG', 'Egypt'))
  .set('EH', new Country('EH', 'Western Sahara'))
  .set('ER', new Country('ER', 'Eritrea'))
  .set('ES', new Country('ES', 'Spain'))
  .set('ET', new Country('ET', 'Ethiopia'))
  .set('EU', new Country('EU', 'Europe'))
  .set('FI', new Country('FI', 'Finland'))
  .set('FJ', new Country('FJ', 'Fiji'))
  .set('FK', new Country('FK', 'Falkland Islands (Malvinas)'))
  .set('FM', new Country('FM', 'Micronesia, Federated States of'))
  .set('FO', new Country('FO', 'Faroe Islands'))
  .set('FR', new Country('FR', 'France'))
  .set('GA', new Country('GA', 'Gabon'))
  .set('GB', new Country('GB', 'United Kingdom'))
  .set('GD', new Country('GD', 'Grenada'))
  .set('GE', new Country('GE', 'Georgia'))
  .set('GF', new Country('GF', 'French Guiana'))
  .set('GG', new Country('GG', 'Guernsey'))
  .set('GH', new Country('GH', 'Ghana'))
  .set('GI', new Country('GI', 'Gibraltar'))
  .set('GL', new Country('GL', 'Greenland'))
  .set('GM', new Country('GM', 'Gambia'))
  .set('GN', new Country('GN', 'Guinea'))
  .set('GP', new Country('GP', 'Guadeloupe'))
  .set('GQ', new Country('GQ', 'Equatorial Guinea'))
  .set('GR', new Country('GR', 'Greece'))
  .set('GS', new Country('GS', 'South Georgia and the South Sandwich Islands'))
  .set('GT', new Country('GT', 'Guatemala'))
  .set('GU', new Country('GU', 'Guam'))
  .set('GW', new Country('GW', 'Guinea-Bissau'))
  .set('GY', new Country('GY', 'Guyana'))
  .set('HK', new Country('HK', 'Hong Kong'))
  .set('HM', new Country('HM', 'Heard Island and McDonald Islands'))
  .set('HN', new Country('HN', 'Honduras'))
  .set('HR', new Country('HR', 'Croatia'))
  .set('HT', new Country('HT', 'Haiti'))
  .set('HU', new Country('HU', 'Hungary'))
  .set('ID', new Country('ID', 'Indonesia'))
  .set('IE', new Country('IE', 'Ireland'))
  .set('IL', new Country('IL', 'Israel'))
  .set('IM', new Country('IM', 'Isle of Man'))
  .set('IN', new Country('IN', 'India'))
  .set('IO', new Country('IO', 'British Indian Ocean Territory'))
  .set('IQ', new Country('IQ', 'Iraq'))
  .set('IR', new Country('IR', 'Iran, Islamic Republic of'))
  .set('IS', new Country('IS', 'Iceland'))
  .set('IT', new Country('IT', 'Italy'))
  .set('JE', new Country('JE', 'Jersey'))
  .set('JM', new Country('JM', 'Jamaica'))
  .set('JO', new Country('JO', 'Jordan'))
  .set('JP', new Country('JP', 'Japan'))
  .set('KE', new Country('KE', 'Kenya'))
  .set('KG', new Country('KG', 'Kyrgyzstan'))
  .set('KH', new Country('KH', 'Cambodia'))
  .set('KI', new Country('KI', 'Kiribati'))
  .set('KM', new Country('KM', 'Comoros'))
  .set('KN', new Country('KN', 'Saint Kitts and Nevis'))
  .set('KP', new Country('KP', 'Korea, Democratic People\'s Republic of'))
  .set('KR', new Country('KR', 'Korea, Republic of'))
  .set('KW', new Country('KW', 'Kuwait'))
  .set('KY', new Country('KY', 'Cayman Islands'))
  .set('KZ', new Country('KZ', 'Kazakhstan'))
  .set('LA', new Country('LA', 'Lao People\'s Democratic Republic'))
  .set('LB', new Country('LB', 'Lebanon'))
  .set('LC', new Country('LC', 'Saint Lucia'))
  .set('LI', new Country('LI', 'Liechtenstein'))
  .set('LK', new Country('LK', 'Sri Lanka'))
  .set('LR', new Country('LR', 'Liberia'))
  .set('LS', new Country('LS', 'Lesotho'))
  .set('LT', new Country('LT', 'Lithuania'))
  .set('LU', new Country('LU', 'Luxembourg'))
  .set('LV', new Country('LV', 'Latvia'))
  .set('LY', new Country('LY', 'Libya'))
  .set('MA', new Country('MA', 'Morocco'))
  .set('MC', new Country('MC', 'Monaco'))
  .set('MD', new Country('MD', 'Moldova, Republic of'))
  .set('ME', new Country('ME', 'Montenegro'))
  .set('MF', new Country('MF', 'Saint Martin'))
  .set('MG', new Country('MG', 'Madagascar'))
  .set('MH', new Country('MH', 'Marshall Islands'))
  .set('MK', new Country('MK', 'Macedonia, the former Yugoslav Republic of'))
  .set('ML', new Country('ML', 'Mali'))
  .set('MM', new Country('MM', 'Myanmar'))
  .set('MN', new Country('MN', 'Mongolia'))
  .set('MO', new Country('MO', 'Macao'))
  .set('MP', new Country('MP', 'Northern Mariana Islands'))
  .set('MQ', new Country('MQ', 'Martinique'))
  .set('MR', new Country('MR', 'Mauritania'))
  .set('MS', new Country('MS', 'Montserrat'))
  .set('MT', new Country('MT', 'Malta'))
  .set('MU', new Country('MU', 'Mauritius'))
  .set('MV', new Country('MV', 'Maldives'))
  .set('MW', new Country('MW', 'Malawi'))
  .set('MX', new Country('MX', 'Mexico'))
  .set('MY', new Country('MY', 'Malaysia'))
  .set('MZ', new Country('MZ', 'Mozambique'))
  .set('NA', new Country('NA', 'Namibia'))
  .set('NC', new Country('NC', 'New Caledonia'))
  .set('NE', new Country('NE', 'Niger'))
  .set('NF', new Country('NF', 'Norfolk Island'))
  .set('NG', new Country('NG', 'Nigeria'))
  .set('NI', new Country('NI', 'Nicaragua'))
  .set('NL', new Country('NL', 'Netherlands'))
  .set('NO', new Country('NO', 'Norway'))
  .set('NP', new Country('NP', 'Nepal'))
  .set('NR', new Country('NR', 'Nauru'))
  .set('NU', new Country('NU', 'Niue'))
  .set('NZ', new Country('NZ', 'New Zealand'))
  .set('OM', new Country('OM', 'Oman'))
  .set('PA', new Country('PA', 'Panama'))
  .set('PE', new Country('PE', 'Peru'))
  .set('PF', new Country('PF', 'French Polynesia'))
  .set('PG', new Country('PG', 'Papua New Guinea'))
  .set('PH', new Country('PH', 'Philippines'))
  .set('PK', new Country('PK', 'Pakistan'))
  .set('PL', new Country('PL', 'Poland'))
  .set('PM', new Country('PM', 'Saint Pierre and Miquelon'))
  .set('PN', new Country('PN', 'Pitcairn'))
  .set('PR', new Country('PR', 'Puerto Rico'))
  .set('PS', new Country('PS', 'Palestine'))
  .set('PT', new Country('PT', 'Portugal'))
  .set('PW', new Country('PW', 'Palau'))
  .set('PY', new Country('PY', 'Paraguay'))
  .set('QA', new Country('QA', 'Qatar'))
  .set('RE', new Country('RE', 'Réunion'))
  .set('RO', new Country('RO', 'Romania'))
  .set('RS', new Country('RS', 'Serbia'))
  .set('RU', new Country('RU', 'Russian Federation'))
  .set('RW', new Country('RW', 'Rwanda'))
  .set('SA', new Country('SA', 'Saudi Arabia'))
  .set('SB', new Country('SB', 'Solomon Islands'))
  .set('SC', new Country('SC', 'Seychelles'))
  .set('SD', new Country('SD', 'Sudan'))
  .set('SE', new Country('SE', 'Sweden'))
  .set('SG', new Country('SG', 'Singapore'))
  .set('SH', new Country('SH', 'Saint Helena, Ascension and Tristan da Cunha'))
  .set('SI', new Country('SI', 'Slovenia'))
  .set('SJ', new Country('SJ', 'Svalbard and Jan Mayen Islands'))
  .set('SK', new Country('SK', 'Slovakia'))
  .set('SL', new Country('SL', 'Sierra Leone'))
  .set('SM', new Country('SM', 'San Marino'))
  .set('SN', new Country('SN', 'Senegal'))
  .set('SO', new Country('SO', 'Somalia'))
  .set('SR', new Country('SR', 'Suriname'))
  .set('SS', new Country('SS', 'South Sudan'))
  .set('ST', new Country('ST', 'Sao Tome and Principe'))
  .set('SV', new Country('SV', 'El Salvador'))
  .set('SX', new Country('SX', 'Sint Maarten (Dutch part)'))
  .set('SY', new Country('SY', 'Syrian Arab Republic'))
  .set('SZ', new Country('SZ', 'Swaziland'))
  .set('TC', new Country('TC', 'Turks and Caicos Islands'))
  .set('TD', new Country('TD', 'Chad'))
  .set('TF', new Country('TF', 'French Southern Territories'))
  .set('TG', new Country('TG', 'Togo'))
  .set('TH', new Country('TH', 'Thailand'))
  .set('TJ', new Country('TJ', 'Tajikistan'))
  .set('TK', new Country('TK', 'Tokelau'))
  .set('TL', new Country('TL', 'Timor-Leste'))
  .set('TM', new Country('TM', 'Turkmenistan'))
  .set('TN', new Country('TN', 'Tunisia'))
  .set('TO', new Country('TO', 'Tonga'))
  .set('TR', new Country('TR', 'Turkey'))
  .set('TT', new Country('TT', 'Trinidad and Tobago'))
  .set('TV', new Country('TV', 'Tuvalu'))
  .set('TW', new Country('TW', 'Taiwan'))
  .set('TZ', new Country('TZ', 'Tanzania, United Republic of'))
  .set('UA', new Country('UA', 'Ukraine'))
  .set('UG', new Country('UG', 'Uganda'))
  .set('UM', new Country('UM', 'US Minor Outlying Islands'))
  .set('US', new Country('US', 'United States'))
  .set('UY', new Country('UY', 'Uruguay'))
  .set('UZ', new Country('UZ', 'Uzbekistan'))
  .set('VA', new Country('VA', 'Holy See (Vatican City State)'))
  .set('VC', new Country('VC', 'Saint Vincent and the Grenadines'))
  .set('VE', new Country('VE', 'Venezuela, Bolivarian Republic of'))
  .set('VG', new Country('VG', 'Virgin Islands, British'))
  .set('VI', new Country('VI', 'Virgin Islands, U.S.'))
  .set('VN', new Country('VN', 'Viet Nam'))
  .set('VU', new Country('VU', 'Vanuatu'))
  .set('WF', new Country('WF', 'Wallis and Futuna Islands'))
  .set('XK', new Country('XK', 'Kosovo'))
  .set('WS', new Country('WS', 'Samoa'))
  .set('YE', new Country('YE', 'Yemen'))
  .set('YT', new Country('YT', 'Mayotte'))
  .set('ZA', new Country('ZA', 'South Africa'))
  .set('ZM', new Country('ZM', 'Zambia'))
  .set('ZW', new Country('ZW', 'Zimbabwe'));
