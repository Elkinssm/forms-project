const bankData = [
    {
        "CHARTER_NO": "8709",
        "NAME": "1st National Bank",
        "ADDRESS": "1000 East Main Street",
        "CITY": "Lebanon",
        "STATE": "OH",
        "CERT": "6646",
        "RSSD": "480723"
    },
    {
        "CHARTER_NO": "15592",
        "NAME": "Academy Bank, National Association",
        "ADDRESS": "1201 Walnut Street",
        "CITY": "Kansas City",
        "STATE": "MO",
        "CERT": "19600",
        "RSSD": "535753"
    },
    {
        "CHARTER_NO": "25173",
        "NAME": "ADP Trust Company, National Association",
        "ADDRESS": "800 Delaware Avenue, Suite 602",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "59194",
        "RSSD": "5397639"
    },
    {
        "CHARTER_NO": "25307",
        "NAME": "Affinity Bank, National Association",
        "ADDRESS": "3175 Highway 278",
        "CITY": "Covington",
        "STATE": "GA",
        "CERT": "29510",
        "RSSD": "321273"
    },
    {
        "CHARTER_NO": "25225",
        "NAME": "Agility Bank, National Association",
        "ADDRESS": "2401 N. Shepherd",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "59239",
        "RSSD": "5728916"
    },
    {
        "CHARTER_NO": "14688",
        "NAME": "Albany Bank and Trust Company National Association",
        "ADDRESS": "3400 West Lawrence Avenue",
        "CITY": "Chicago",
        "STATE": "IL",
        "CERT": "17230",
        "RSSD": "2732"
    },
    {
        "CHARTER_NO": "13790",
        "NAME": "Alerus Financial, National Association",
        "ADDRESS": "401 Demers Avenue",
        "CITY": "Grand Forks",
        "STATE": "ND",
        "CERT": "3931",
        "RSSD": "933256"
    },
    {
        "CHARTER_NO": "14206",
        "NAME": "Amarillo National Bank",
        "ADDRESS": "400 South Taylor, Plaza One",
        "CITY": "Amarillo",
        "STATE": "TX",
        "CERT": "14531",
        "RSSD": "353555"
    },
    {
        "CHARTER_NO": "16804",
        "NAME": "Amerant Bank, National Association",
        "ADDRESS": "220 Alhambra Circle",
        "CITY": "Coral Gables",
        "STATE": "FL",
        "CERT": "22953",
        "RSSD": "83638"
    },
    {
        "CHARTER_NO": "24369",
        "NAME": "American Bank and Trust Company, National Association",
        "ADDRESS": "4301 East 53rd Street",
        "CITY": "Davenport",
        "STATE": "IA",
        "CERT": "34955",
        "RSSD": "2733263"
    },
    {
        "CHARTER_NO": "22286",
        "NAME": "American Bank, National Association",
        "ADDRESS": "234 Fifth Avenue S.W.",
        "CITY": "Lemars",
        "STATE": "IA",
        "CERT": "5800",
        "RSSD": "345345"
    },
    {
        "CHARTER_NO": "15820",
        "NAME": "American Bank, National Association",
        "ADDRESS": "100 American Bank Plaza",
        "CITY": "Corpus Christi",
        "STATE": "TX",
        "CERT": "20241",
        "RSSD": "807955"
    },
    {
        "CHARTER_NO": "16320",
        "NAME": "American Bank, National Association",
        "ADDRESS": "2707 West Northwest Highway",
        "CITY": "Dallas",
        "STATE": "TX",
        "CERT": "21567",
        "RSSD": "494654"
    },
    {
        "CHARTER_NO": "17319",
        "NAME": "American Bank, National Association",
        "ADDRESS": "200 West Highway 6",
        "CITY": "Waco",
        "STATE": "TX",
        "CERT": "23886",
        "RSSD": "307361"
    },
    {
        "CHARTER_NO": "24456",
        "NAME": "American Commerce Bank, National Association",
        "ADDRESS": "400 Highway 27 North Bypass",
        "CITY": "Bremen",
        "STATE": "GA",
        "CERT": "57686",
        "RSSD": "3272956"
    },
    {
        "CHARTER_NO": "1154",
        "NAME": "American Commercial Bank & Trust, National Association",
        "ADDRESS": "701-705 LA Salle Street",
        "CITY": "Ottawa",
        "STATE": "IL",
        "CERT": "3719",
        "RSSD": "856243"
    },
    {
        "CHARTER_NO": "25151",
        "NAME": "American Express National Bank",
        "ADDRESS": "115 West Towne Ridge Parkway",
        "CITY": "Sandy",
        "STATE": "UT",
        "CERT": "27471",
        "RSSD": "1394676"
    },
    {
        "CHARTER_NO": "23521",
        "NAME": "American First National Bank",
        "ADDRESS": "9999 Bellaire Boulevard",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "34656",
        "RSSD": "2694681"
    },
    {
        "CHARTER_NO": "15037",
        "NAME": "American Heritage National Bank",
        "ADDRESS": "24 2nd Street South",
        "CITY": "Long Prairie",
        "STATE": "MN",
        "CERT": "8843",
        "RSSD": "61757"
    },
    {
        "CHARTER_NO": "18613",
        "NAME": "American National Bank",
        "ADDRESS": "4301 North Federal Highway",
        "CITY": "Oakland Park",
        "STATE": "FL",
        "CERT": "26398",
        "RSSD": "481430"
    },
    {
        "CHARTER_NO": "15435",
        "NAME": "American National Bank",
        "ADDRESS": "8990 West Dodge Road",
        "CITY": "Omaha",
        "STATE": "NE",
        "CERT": "19300",
        "RSSD": "660655"
    },
    {
        "CHARTER_NO": "22553",
        "NAME": "American National Bank - Fox Cities",
        "ADDRESS": "2200 N. Richmond Street",
        "CITY": "Appleton",
        "STATE": "WI",
        "CERT": "33812",
        "RSSD": "2051127"
    },
    {
        "CHARTER_NO": "16617",
        "NAME": "American National Bank & Trust",
        "ADDRESS": "2732 Midwestern Parkway",
        "CITY": "Wichita Falls",
        "STATE": "TX",
        "CERT": "22373",
        "RSSD": "498362"
    },
    {
        "CHARTER_NO": "24219",
        "NAME": "American National Bank of Minnesota",
        "ADDRESS": "7638 Woida Road",
        "CITY": "Baxter",
        "STATE": "MN",
        "CERT": "26499",
        "RSSD": "306159"
    },
    {
        "CHARTER_NO": "24716",
        "NAME": "American Plus Bank, National Association",
        "ADDRESS": "630 West Duarte Road",
        "CITY": "Arcadia",
        "STATE": "CA",
        "CERT": "58469",
        "RSSD": "3623110"
    },
    {
        "CHARTER_NO": "24182",
        "NAME": "AMG National Trust Bank",
        "ADDRESS": "1155 Canyon Boulevard, Suite 310",
        "CITY": "Boulder",
        "STATE": "CO",
        "CERT": "57295",
        "RSSD": "3015939"
    },
    {
        "CHARTER_NO": "16625",
        "NAME": "Anahuac National Bank",
        "ADDRESS": "801 S. Ross Sterling",
        "CITY": "Anahuac",
        "STATE": "TX",
        "CERT": "22381",
        "RSSD": "424352"
    },
    {
        "CHARTER_NO": "25243",
        "NAME": "Anchorage Digital Bank National Association",
        "ADDRESS": "101 S. Reid Street, Suite 329",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "59276",
        "RSSD": "5561001"
    },
    {
        "CHARTER_NO": "5525",
        "NAME": "Anna-Jonesboro National Bank",
        "ADDRESS": "201 S. Main",
        "CITY": "Anna",
        "STATE": "IL",
        "CERT": "3759",
        "RSSD": "855844"
    },
    {
        "CHARTER_NO": "8796",
        "NAME": "Armed Forces Bank, National Association",
        "ADDRESS": "320 Kansas Avenue",
        "CITY": "Ft. Leavenworth",
        "STATE": "KS",
        "CERT": "4666",
        "RSSD": "983457"
    },
    {
        "CHARTER_NO": "23006",
        "NAME": "Asian Pacific National Bank",
        "ADDRESS": "333 West Valley Boulevard",
        "CITY": "San Gabriel",
        "STATE": "CA",
        "CERT": "33013",
        "RSSD": "1462986"
    },
    {
        "CHARTER_NO": "23695",
        "NAME": "Associated Bank, National Association",
        "ADDRESS": "200 North Adams Street",
        "CITY": "Green Bay",
        "STATE": "WI",
        "CERT": "5296",
        "RSSD": "917742"
    },
    {
        "CHARTER_NO": "23250",
        "NAME": "Associated Trust Company, National Association",
        "ADDRESS": "815 North Water Street",
        "CITY": "Milwaukee",
        "STATE": "WI",
        "CERT": "27102",
        "RSSD": "1629903"
    },
    {
        "CHARTER_NO": "5581",
        "NAME": "Austin Bank, Texas National Association",
        "ADDRESS": "200 East Commerce Street",
        "CITY": "Jacksonville",
        "STATE": "TX",
        "CERT": "3276",
        "RSSD": "548351"
    },
    {
        "CHARTER_NO": "25139",
        "NAME": "Axiom Bank, National Association",
        "ADDRESS": "258 Southhall Lane, Suite 400",
        "CITY": "Maitland",
        "STATE": "FL",
        "CERT": "31390",
        "RSSD": "408875"
    },
    {
        "CHARTER_NO": "11622",
        "NAME": "B2 Bank National Association",
        "ADDRESS": "8355 Unity Drive, Suite 400",
        "CITY": "Mt. Iron",
        "STATE": "MN",
        "CERT": "5105",
        "RSSD": "108652"
    },
    {
        "CHARTER_NO": "3956",
        "NAME": "Baker Boyer National Bank",
        "ADDRESS": "7 West Main Street",
        "CITY": "Walla Walla",
        "STATE": "WA",
        "CERT": "2987",
        "RSSD": "69678"
    },
    {
        "CHARTER_NO": "1253",
        "NAME": "Ballston Spa National Bank",
        "ADDRESS": "87 Front Street",
        "CITY": "Ballston Spa",
        "STATE": "NY",
        "CERT": "6959",
        "RSSD": "505"
    },
    {
        "CHARTER_NO": "12152",
        "NAME": "BancCentral, National Association",
        "ADDRESS": "604 Flynn Street",
        "CITY": "Alva",
        "STATE": "OK",
        "CERT": "4033",
        "RSSD": "251352"
    },
    {
        "CHARTER_NO": "4975",
        "NAME": "Bank First, National Association",
        "ADDRESS": "402 North 8th Street",
        "CITY": "Manitowoc",
        "STATE": "WI",
        "CERT": "5304",
        "RSSD": "594947"
    },
    {
        "CHARTER_NO": "24077",
        "NAME": "Bank of America California, National Association",
        "ADDRESS": "555 California Street",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "25178",
        "RSSD": "1443266"
    },
    {
        "CHARTER_NO": "13044",
        "NAME": "Bank of America, National Association",
        "ADDRESS": "100 North Tryon Street, Suite 170",
        "CITY": "Charlotte",
        "STATE": "NC",
        "CERT": "3510",
        "RSSD": "480228"
    },
    {
        "CHARTER_NO": "24153",
        "NAME": "Bank of Brenham, National Association",
        "ADDRESS": "501 S. Austin Street",
        "CITY": "Brenham",
        "STATE": "TX",
        "CERT": "57102",
        "RSSD": "3042234"
    },
    {
        "CHARTER_NO": "10844",
        "NAME": "Bank of Bridger, National Association",
        "ADDRESS": "101 S. Main Street",
        "CITY": "Bridger",
        "STATE": "MT",
        "CERT": "2224",
        "RSSD": "17950"
    },
    {
        "CHARTER_NO": "16976",
        "NAME": "Bank of Brookfield-Purdin, National Association",
        "ADDRESS": "939 Park Circle Drive",
        "CITY": "Brookfield",
        "STATE": "MO",
        "CERT": "9385",
        "RSSD": "236256"
    },
    {
        "CHARTER_NO": "20415",
        "NAME": "Bank of Desoto National Association",
        "ADDRESS": "2011 N. Hampton Road",
        "CITY": "Desoto",
        "STATE": "TX",
        "CERT": "26542",
        "RSSD": "638355"
    },
    {
        "CHARTER_NO": "14510",
        "NAME": "Bank of Hillsboro, National Association",
        "ADDRESS": "230 South Main",
        "CITY": "Hillsboro",
        "STATE": "IL",
        "CERT": "16276",
        "RSSD": "659341"
    },
    {
        "CHARTER_NO": "17548",
        "NAME": "Bank of Whittier, National Association",
        "ADDRESS": "15141 East Whittier Boulevard",
        "CITY": "Whittier",
        "STATE": "CA",
        "CERT": "24211",
        "RSSD": "209362"
    },
    {
        "CHARTER_NO": "16643",
        "NAME": "BankChampaign, National Association",
        "ADDRESS": "2101 South Neil",
        "CITY": "Champaign",
        "STATE": "IL",
        "CERT": "22434",
        "RSSD": "436739"
    },
    {
        "CHARTER_NO": "25140",
        "NAME": "BankFinancial, National Association",
        "ADDRESS": "21110 South Western Avenue",
        "CITY": "Olympia Fields",
        "STATE": "IL",
        "CERT": "28808",
        "RSSD": "454676"
    },
    {
        "CHARTER_NO": "25028",
        "NAME": "BankUnited, National Association",
        "ADDRESS": "14817 Oak Lane",
        "CITY": "Miami Lakes",
        "STATE": "FL",
        "CERT": "58979",
        "RSSD": "3938186"
    },
    {
        "CHARTER_NO": "23216",
        "NAME": "Barrington Bank & Trust Company, National Association",
        "ADDRESS": "201 South Hough Street",
        "CITY": "Barrington",
        "STATE": "IL",
        "CERT": "34395",
        "RSSD": "2508751"
    },
    {
        "CHARTER_NO": "25276",
        "NAME": "BayFirst National Bank",
        "ADDRESS": "700 Central Avenue",
        "CITY": "St. Petersburg",
        "STATE": "FL",
        "CERT": "34997",
        "RSSD": "2771694"
    },
    {
        "CHARTER_NO": "18358",
        "NAME": "Beacon Business Bank, National Association",
        "ADDRESS": "425 California Street",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "25644",
        "RSSD": "403067"
    },
    {
        "CHARTER_NO": "23869",
        "NAME": "Bessemer Trust Company of California, National Association",
        "ADDRESS": "101 California Street",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "35413",
        "RSSD": "2845782"
    },
    {
        "CHARTER_NO": "24547",
        "NAME": "Bessemer Trust Company of Delaware, National Association",
        "ADDRESS": "20 Montchanin Road",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "58011",
        "RSSD": "3310287"
    },
    {
        "CHARTER_NO": "25287",
        "NAME": "Bessemer Trust Company of Nevada, National Association",
        "ADDRESS": "1700 South Pavilion Center Drive",
        "CITY": "Las Vegas",
        "STATE": "NV",
        "CERT": "59346",
        "RSSD": "5805479"
    },
    {
        "CHARTER_NO": "16417",
        "NAME": "Bessemer Trust Company, National Association",
        "ADDRESS": "1271 Avenue of the Americas, 46th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "21868",
        "RSSD": "976703"
    },
    {
        "CHARTER_NO": "24466",
        "NAME": "Beverly Bank & Trust Company, National Association",
        "ADDRESS": "10258 South Western",
        "CITY": "Chicago",
        "STATE": "IL",
        "CERT": "57701",
        "RSSD": "3216017"
    },
    {
        "CHARTER_NO": "8674",
        "NAME": "Big Bend Banks, National Association",
        "ADDRESS": "301 South Highland Avenue",
        "CITY": "Marfa",
        "STATE": "TX",
        "CERT": "3320",
        "RSSD": "362856"
    },
    {
        "CHARTER_NO": "24798",
        "NAME": "Black Hills Community Bank, National Association",
        "ADDRESS": "840 Mount Rushmore Road",
        "CITY": "Rapid City",
        "STATE": "SD",
        "CERT": "58723",
        "RSSD": "3636428"
    },
    {
        "CHARTER_NO": "22121",
        "NAME": "BlackRock Institutional Trust Company, National Association",
        "ADDRESS": "400 Howard Street",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "32961",
        "RSSD": "1444021"
    },
    {
        "CHARTER_NO": "23903",
        "NAME": "Blue Ridge Bank, National Association",
        "ADDRESS": "1 East Market Street",
        "CITY": "Martinsville",
        "STATE": "VA",
        "CERT": "35274",
        "RSSD": "233527"
    },
    {
        "CHARTER_NO": "14583",
        "NAME": "BMO Bank National Association",
        "ADDRESS": "320 South Canal Street",
        "CITY": "Chicago",
        "STATE": "IL",
        "CERT": "16571",
        "RSSD": "75633"
    },
    {
        "CHARTER_NO": "24536",
        "NAME": "BMO Harris Central National Association",
        "ADDRESS": "110 East Irving Park Road",
        "CITY": "Roselle",
        "STATE": "IL",
        "CERT": "58216",
        "RSSD": "3353154"
    },
    {
        "CHARTER_NO": "24224",
        "NAME": "BNC National Bank",
        "ADDRESS": "20175 North 67th Avenue",
        "CITY": "Glendale",
        "STATE": "AZ",
        "CERT": "57197",
        "RSSD": "2358769"
    },
    {
        "CHARTER_NO": "6301",
        "NAME": "BNY Mellon, National Association",
        "ADDRESS": "One Mellon Bank Center, 500 Grant Street",
        "CITY": "Pittsburgh",
        "STATE": "PA",
        "CERT": "7946",
        "RSSD": "934329"
    },
    {
        "CHARTER_NO": "13679",
        "NAME": "BOKF, National Association",
        "ADDRESS": "Bank of Oklahoma Tower",
        "CITY": "Tulsa",
        "STATE": "OK",
        "CERT": "4214",
        "RSSD": "339858"
    },
    {
        "CHARTER_NO": "20184",
        "NAME": "Bonvenu Bank, National Association",
        "ADDRESS": "2711 East Texas Street",
        "CITY": "Bossier City",
        "STATE": "LA",
        "CERT": "26381",
        "RSSD": "594853"
    },
    {
        "CHARTER_NO": "17383",
        "NAME": "Brazos National Bank",
        "ADDRESS": "2300 Brazosport Blvd.",
        "CITY": "Richwood",
        "STATE": "TX",
        "CERT": "24038",
        "RSSD": "863362"
    },
    {
        "CHARTER_NO": "23290",
        "NAME": "Bremer Bank, National Association",
        "ADDRESS": "Lawson Building, 372 St. Peter Street",
        "CITY": "St. Paul",
        "STATE": "MN",
        "CERT": "12923",
        "RSSD": "800657"
    },
    {
        "CHARTER_NO": "14447",
        "NAME": "Broadway National Bank",
        "ADDRESS": "1177 N.E. Loop 410",
        "CITY": "San Antonio",
        "STATE": "TX",
        "CERT": "15797",
        "RSSD": "474254"
    },
    {
        "CHARTER_NO": "24944",
        "NAME": "Brown Brothers Harriman Trust Company of Delaware, NA",
        "ADDRESS": "4250 Lancaster Pike",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "59025",
        "RSSD": "4032791"
    },
    {
        "CHARTER_NO": "24429",
        "NAME": "Association",
        "ADDRESS": "140 Broadway",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "25824",
        "RSSD": "931207"
    },
    {
        "CHARTER_NO": "14479",
        "NAME": "Buena Vista National Bank",
        "ADDRESS": "1309 Swanwick",
        "CITY": "Chester",
        "STATE": "IL",
        "CERT": "10844",
        "RSSD": "621441"
    },
    {
        "CHARTER_NO": "18242",
        "NAME": "C3bank, National Association",
        "ADDRESS": "850 S. Coast Hwy 101, Suite 1",
        "CITY": "Encinitas",
        "STATE": "CA",
        "CERT": "25249",
        "RSSD": "754068"
    },
    {
        "CHARTER_NO": "24100",
        "NAME": "California Bank of Commerce, National Association",
        "ADDRESS": "12265 El Camino Real, Suite 100",
        "CITY": "San Diego",
        "STATE": "CA",
        "CERT": "57044",
        "RSSD": "3076453"
    },
    {
        "CHARTER_NO": "24577",
        "NAME": "California International Bank, A National Banking Association",
        "ADDRESS": "15606 Brookhurst St.",
        "CITY": "Westminster",
        "STATE": "CA",
        "CERT": "57974",
        "RSSD": "3394380"
    },
    {
        "CHARTER_NO": "24936",
        "NAME": "Canandaigua National Trust Company of Florida",
        "ADDRESS": "1586 Main Street",
        "CITY": "Sarasota",
        "STATE": "FL",
        "CERT": "58999",
        "RSSD": "3952904"
    },
    {
        "CHARTER_NO": "23850",
        "NAME": "Capital Bank, National Association",
        "ADDRESS": "2275 Research Blvd.",
        "CITY": "Rockville",
        "STATE": "MD",
        "CERT": "35278",
        "RSSD": "2808602"
    },
    {
        "CHARTER_NO": "13688",
        "NAME": "Capital One, National Association",
        "ADDRESS": "1680 Capital One Drive",
        "CITY": "McLean",
        "STATE": "VA",
        "CERT": "4297",
        "RSSD": "112837"
    },
    {
        "CHARTER_NO": "17525",
        "NAME": "Capitol National Bank",
        "ADDRESS": "200 Washington Square North",
        "CITY": "Lansing",
        "STATE": "MI",
        "CERT": "24199",
        "RSSD": "285544"
    },
    {
        "CHARTER_NO": "25272",
        "NAME": "Carthage Savings and Loan, National Association",
        "ADDRESS": "313 State St",
        "CITY": "Carthage",
        "STATE": "NY",
        "CERT": "28942",
        "RSSD": "900678"
    },
    {
        "CHARTER_NO": "412",
        "NAME": "Cayuga Lake National Bank",
        "ADDRESS": "3 Cayuga Street",
        "CITY": "Union Springs",
        "STATE": "NY",
        "CERT": "6954",
        "RSSD": "63201"
    },
    {
        "CHARTER_NO": "23323",
        "NAME": "Cedar Hill National Bank",
        "ADDRESS": "8100 Denmark Road",
        "CITY": "Charlotte",
        "STATE": "NC",
        "CERT": "34478",
        "RSSD": "2651899"
    },
    {
        "CHARTER_NO": "7524",
        "NAME": "Cendera Bank, National Association",
        "ADDRESS": "615 East Bells Boulevard",
        "CITY": "Bells",
        "STATE": "TX",
        "CERT": "3098",
        "RSSD": "89957"
    },
    {
        "CHARTER_NO": "20448",
        "NAME": "Center National Bank",
        "ADDRESS": "301 N. Ramsey Avenue",
        "CITY": "Litchfield",
        "STATE": "MN",
        "CERT": "10976",
        "RSSD": "1017957"
    },
    {
        "CHARTER_NO": "4284",
        "NAME": "Central National Bank",
        "ADDRESS": "802 N. Washington",
        "CITY": "Junction City",
        "STATE": "KS",
        "CERT": "4702",
        "RSSD": "234355"
    },
    {
        "CHARTER_NO": "16626",
        "NAME": "Central National Bank",
        "ADDRESS": "8320 U.S. Highway 84 West",
        "CITY": "Waco",
        "STATE": "TX",
        "CERT": "22396",
        "RSSD": "428060"
    },
    {
        "CHARTER_NO": "24617",
        "NAME": "CenTrust Bank, National Association",
        "ADDRESS": "385 Waukegan Road",
        "CITY": "Northbrook",
        "STATE": "IL",
        "CERT": "58158",
        "RSSD": "3377235"
    },
    {
        "CHARTER_NO": "24310",
        "NAME": "Cetera Trust Company, National Association",
        "ADDRESS": "400 Robert Street North",
        "CITY": "St. Paul",
        "STATE": "MN",
        "CERT": "57405",
        "RSSD": "3089752"
    },
    {
        "CHARTER_NO": "25137",
        "NAME": "CFBank, National Association",
        "ADDRESS": "4960 E. Dublin Granville Rd. Suite 400",
        "CITY": "Columbus",
        "STATE": "OH",
        "CERT": "28263",
        "RSSD": "767974"
    },
    {
        "CHARTER_NO": "24755",
        "NAME": "Chain Bridge Bank, National Association",
        "ADDRESS": "1445-A Laughlin Avenue",
        "CITY": "Mclean",
        "STATE": "VA",
        "CERT": "58595",
        "RSSD": "3597211"
    },
    {
        "CHARTER_NO": "9405",
        "NAME": "Champlain National Bank",
        "ADDRESS": "Main and William Streets, 7558 Court Street",
        "CITY": "Elizabethtown",
        "STATE": "NY",
        "CERT": "7356",
        "RSSD": "126012"
    },
    {
        "CHARTER_NO": "23158",
        "NAME": "Chester National Bank",
        "ADDRESS": "1112 State Street",
        "CITY": "Chester",
        "STATE": "IL",
        "CERT": "30220",
        "RSSD": "231279"
    },
    {
        "CHARTER_NO": "25215",
        "NAME": "Chilton Trust Company, National Association",
        "ADDRESS": "396 Royal Palm Way",
        "CITY": "Palm Beach",
        "STATE": "FL",
        "CERT": "59255",
        "RSSD": "4397164"
    },
    {
        "CHARTER_NO": "23950",
        "NAME": "Chino Commercial Bank, National Association",
        "ADDRESS": "14245 Pipeline Avenue",
        "CITY": "Chino",
        "STATE": "CA",
        "CERT": "35366",
        "RSSD": "2925620"
    },
    {
        "CHARTER_NO": "24106",
        "NAME": "CIBC National Trust Company",
        "ADDRESS": "3290 Northside Parkway, 7th Floor",
        "CITY": "Atlanta",
        "STATE": "GA",
        "CERT": "91325",
        "RSSD": "975751"
    },
    {
        "CHARTER_NO": "1461",
        "NAME": "Citibank, N.A.",
        "ADDRESS": "5800 S Corporate Place",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "7213",
        "RSSD": "476810"
    },
    {
        "CHARTER_NO": "18410",
        "NAME": "Citicorp Trust Delaware, National Association",
        "ADDRESS": "20 Montchanin Road, Suite 180",
        "CITY": "Greenville",
        "STATE": "DE",
        "CERT": "25677",
        "RSSD": "449038"
    },
    {
        "CHARTER_NO": "24571",
        "NAME": "Citizens Bank, National Association",
        "ADDRESS": "One Citizens Plaza",
        "CITY": "Providence",
        "STATE": "RI",
        "CERT": "57957",
        "RSSD": "3303298"
    },
    {
        "CHARTER_NO": "23834",
        "NAME": "Citizens Bank, National Association",
        "ADDRESS": "4201 South Treadaway Boulevard",
        "CITY": "Abilene",
        "STATE": "TX",
        "CERT": "12309",
        "RSSD": "617051"
    },
    {
        "CHARTER_NO": "25088",
        "NAME": "Citizens Community Federal National Association",
        "ADDRESS": "219 Fairfax Street",
        "CITY": "Altoona",
        "STATE": "WI",
        "CERT": "57265",
        "RSSD": "962890"
    },
    {
        "CHARTER_NO": "16076",
        "NAME": "Citizens National Bank",
        "ADDRESS": "200 Forks of River Parkway",
        "CITY": "Sevierville",
        "STATE": "TN",
        "CERT": "20954",
        "RSSD": "717737"
    },
    {
        "CHARTER_NO": "5484",
        "NAME": "Citizens National Bank",
        "ADDRESS": "118 South Houston Street",
        "CITY": "Cameron",
        "STATE": "TX",
        "CERT": "3127",
        "RSSD": "59352"
    },
    {
        "CHARTER_NO": "17456",
        "NAME": "Citizens National Bank",
        "ADDRESS": "1320 East Loop 304",
        "CITY": "Crockett",
        "STATE": "TX",
        "CERT": "24085",
        "RSSD": "700252"
    },
    {
        "CHARTER_NO": "14273",
        "NAME": "Citizens National Bank at Brownwood",
        "ADDRESS": "1 Carnegie",
        "CITY": "Brownwood",
        "STATE": "TX",
        "CERT": "14779",
        "RSSD": "233358"
    },
    {
        "CHARTER_NO": "14435",
        "NAME": "Citizens National Bank of Albion",
        "ADDRESS": "10 West Elm Street",
        "CITY": "Albion",
        "STATE": "IL",
        "CERT": "15760",
        "RSSD": "853747"
    },
    {
        "CHARTER_NO": "13522",
        "NAME": "Citizens National Bank of Cheboygan",
        "ADDRESS": "303 N. Main Street",
        "CITY": "Cheboygan",
        "STATE": "MI",
        "CERT": "5018",
        "RSSD": "773742"
    },
    {
        "CHARTER_NO": "8515",
        "NAME": "Citizens National Bank of Crosbyton",
        "ADDRESS": "202 W. Main",
        "CITY": "Crosbyton",
        "STATE": "TX",
        "CERT": "3158",
        "RSSD": "901451"
    },
    {
        "CHARTER_NO": "13516",
        "NAME": "Citizens National Bank of Texas",
        "ADDRESS": "200 N. Elm Street",
        "CITY": "Waxahachie",
        "STATE": "TX",
        "CERT": "5574",
        "RSSD": "552161"
    },
    {
        "CHARTER_NO": "22968",
        "NAME": "City First Bank, National Association",
        "ADDRESS": "1432 U Street, N.W.",
        "CITY": "Washington",
        "STATE": "DC",
        "CERT": "34352",
        "RSSD": "2697963"
    },
    {
        "CHARTER_NO": "14695",
        "NAME": "City National Bank",
        "ADDRESS": "555 South Flower Street",
        "CITY": "Los Angeles",
        "STATE": "CA",
        "CERT": "17281",
        "RSSD": "63069"
    },
    {
        "CHARTER_NO": "17652",
        "NAME": "City National Bank",
        "ADDRESS": "1465 West Second Avenue",
        "CITY": "Corsicana",
        "STATE": "TX",
        "CERT": "24367",
        "RSSD": "697950"
    },
    {
        "CHARTER_NO": "15977",
        "NAME": "City National Bank of Florida",
        "ADDRESS": "25 West Flagler Street",
        "CITY": "Miami",
        "STATE": "FL",
        "CERT": "20234",
        "RSSD": "814430"
    },
    {
        "CHARTER_NO": "14807",
        "NAME": "City National Bank of West Virginia",
        "ADDRESS": "3601 Mccorkle Avenue, S.E.",
        "CITY": "Charleston",
        "STATE": "WV",
        "CERT": "17735",
        "RSSD": "1011526"
    },
    {
        "CHARTER_NO": "15649",
        "NAME": "Clare Bank, National Association",
        "ADDRESS": "345 West Pine",
        "CITY": "Platteville",
        "STATE": "WI",
        "CERT": "1022",
        "RSSD": "988144"
    },
    {
        "CHARTER_NO": "13731",
        "NAME": "Classic Bank, National Association",
        "ADDRESS": "102 N. Houston",
        "CITY": "Cameron",
        "STATE": "TX",
        "CERT": "3126",
        "RSSD": "182951"
    },
    {
        "CHARTER_NO": "3248",
        "NAME": "Clear Fork Bank, National Association",
        "ADDRESS": "100 S. Main",
        "CITY": "Albany",
        "STATE": "TX",
        "CERT": "3067",
        "RSSD": "340751"
    },
    {
        "CHARTER_NO": "14347",
        "NAME": "CNB Bank & Trust, National Association",
        "ADDRESS": "West Side Square",
        "CITY": "Carlinville",
        "STATE": "IL",
        "CERT": "3775",
        "RSSD": "613343"
    },
    {
        "CHARTER_NO": "24861",
        "NAME": "Coastal Carolina National Bank",
        "ADDRESS": "1012 38th Avenue North, Suite 100",
        "CITY": "Myrtle Beach",
        "STATE": "SC",
        "CERT": "58864",
        "RSSD": "3821822"
    },
    {
        "CHARTER_NO": "24626",
        "NAME": "Column National Association",
        "ADDRESS": "1717 Mangrove Avenue, Suite 100",
        "CITY": "Chico",
        "STATE": "CA",
        "CERT": "58224",
        "RSSD": "3435948"
    },
    {
        "CHARTER_NO": "21527",
        "NAME": "Comerica Bank & Trust, National Association",
        "ADDRESS": "101 North Main Street, Suite 200",
        "CITY": "Ann Arbor",
        "STATE": "MI",
        "CERT": "1596",
        "RSSD": "772446"
    },
    {
        "CHARTER_NO": "14371",
        "NAME": "Commercial Bank of Texas, National Association",
        "ADDRESS": "215 E. Main Street",
        "CITY": "Nacogdoches",
        "STATE": "TX",
        "CERT": "1209",
        "RSSD": "885869"
    },
    {
        "CHARTER_NO": "15257",
        "NAME": "Commercial National Bank of Texarkana",
        "ADDRESS": "5515 Summerhill Road",
        "CITY": "Texarkana",
        "STATE": "TX",
        "CERT": "19024",
        "RSSD": "794149"
    },
    {
        "CHARTER_NO": "16553",
        "NAME": "Commonwealth National Bank",
        "ADDRESS": "2214 St. Stephens Road",
        "CITY": "Mobile",
        "STATE": "AL",
        "CERT": "22229",
        "RSSD": "578237"
    },
    {
        "CHARTER_NO": "8531",
        "NAME": "Community Bank, National Association",
        "ADDRESS": "45-49 Court Street",
        "CITY": "Canton",
        "STATE": "NY",
        "CERT": "6989",
        "RSSD": "202907"
    },
    {
        "CHARTER_NO": "7518",
        "NAME": "Community First Bank, National Association",
        "ADDRESS": "118 East Lima Street",
        "CITY": "Forest",
        "STATE": "OH",
        "CERT": "6584",
        "RSSD": "579319"
    },
    {
        "CHARTER_NO": "24080",
        "NAME": "Community First National Bank",
        "ADDRESS": "215 S. Seth Child",
        "CITY": "Manhattan",
        "STATE": "KS",
        "CERT": "35585",
        "RSSD": "2907019"
    },
    {
        "CHARTER_NO": "18394",
        "NAME": "Community National Bank",
        "ADDRESS": "210 Main Street",
        "CITY": "Seneca",
        "STATE": "KS",
        "CERT": "25665",
        "RSSD": "354552"
    },
    {
        "CHARTER_NO": "18054",
        "NAME": "Community National Bank",
        "ADDRESS": "500 West Illinois",
        "CITY": "Midland",
        "STATE": "TX",
        "CERT": "24897",
        "RSSD": "293053"
    },
    {
        "CHARTER_NO": "1368",
        "NAME": "Community National Bank",
        "ADDRESS": "4811 US Route 5",
        "CITY": "Derby",
        "STATE": "VT",
        "CERT": "6271",
        "RSSD": "270504"
    },
    {
        "CHARTER_NO": "21389",
        "NAME": "Community National Bank & Trust",
        "ADDRESS": "14 North Lincoln",
        "CITY": "Chanute",
        "STATE": "KS",
        "CERT": "27046",
        "RSSD": "923752"
    },
    {
        "CHARTER_NO": "14898",
        "NAME": "Community National Bank & Trust of Texas",
        "ADDRESS": "321 North 15th Street",
        "CITY": "Corsicana",
        "STATE": "TX",
        "CERT": "18185",
        "RSSD": "738769"
    },
    {
        "CHARTER_NO": "15389",
        "NAME": "Community National Bank in Monmouth",
        "ADDRESS": "311 North Main Street",
        "CITY": "Monmouth",
        "STATE": "IL",
        "CERT": "19230",
        "RSSD": "775241"
    },
    {
        "CHARTER_NO": "18233",
        "NAME": "Community National Bank of Okarche",
        "ADDRESS": "653 North Main Highway 81",
        "CITY": "Okarche",
        "STATE": "OK",
        "CERT": "25161",
        "RSSD": "371559"
    },
    {
        "CHARTER_NO": "23148",
        "NAME": "Computershare Trust Company, National Association",
        "ADDRESS": "150 Royall Street",
        "CITY": "Canton",
        "STATE": "MA",
        "CERT": "34629",
        "RSSD": "2600039"
    },
    {
        "CHARTER_NO": "23664",
        "NAME": "Connecticut Community Bank, National Association",
        "ADDRESS": "605 West Avenue",
        "CITY": "Norwalk",
        "STATE": "CT",
        "CERT": "34876",
        "RSSD": "2756909"
    },
    {
        "CHARTER_NO": "15543",
        "NAME": "Consumers National Bank",
        "ADDRESS": "614 East Lincoln Way",
        "CITY": "Minerva",
        "STATE": "OH",
        "CERT": "19482",
        "RSSD": "477321"
    },
    {
        "CHARTER_NO": "24114",
        "NAME": "Cornerstone National Bank & Trust Company",
        "ADDRESS": "One West Northwest Highway",
        "CITY": "Palatine",
        "STATE": "IL",
        "CERT": "57061",
        "RSSD": "2929392"
    },
    {
        "CHARTER_NO": "23771",
        "NAME": "Cortrust Bank National Association",
        "ADDRESS": "100 E. Havens & Main",
        "CITY": "Mitchell",
        "STATE": "SD",
        "CERT": "6063",
        "RSSD": "61355"
    },
    {
        "CHARTER_NO": "14062",
        "NAME": "County National Bank",
        "ADDRESS": "One South Howell Street",
        "CITY": "Hillsdale",
        "STATE": "MI",
        "CERT": "14073",
        "RSSD": "682143"
    },
    {
        "CHARTER_NO": "22594",
        "NAME": "Credit First National Association",
        "ADDRESS": "6275 Eastland Road",
        "CITY": "Brook Park",
        "STATE": "OH",
        "CERT": "33855",
        "RSSD": "2122997"
    },
    {
        "CHARTER_NO": "20291",
        "NAME": "Credit One Bank, National Association",
        "ADDRESS": "6801 South Cimarron Road",
        "CITY": "Las Vegas",
        "STATE": "NV",
        "CERT": "25620",
        "RSSD": "639567"
    },
    {
        "CHARTER_NO": "23574",
        "NAME": "Crystal Lake Bank & Trust Company, National Association",
        "ADDRESS": "70 North Williams Street",
        "CITY": "Crystal Lake",
        "STATE": "IL",
        "CERT": "34681",
        "RSSD": "2624400"
    },
    {
        "CHARTER_NO": "10254",
        "NAME": "Cumberland Valley National Bank & Trust Company",
        "ADDRESS": "100 South Main Street",
        "CITY": "London",
        "STATE": "KY",
        "CERT": "2691",
        "RSSD": "647218"
    },
    {
        "CHARTER_NO": "24604",
        "NAME": "Dakota Community Bank & Trust, National Association",
        "ADDRESS": "609 Main Street",
        "CITY": "Hebron",
        "STATE": "ND",
        "CERT": "15728",
        "RSSD": "815156"
    },
    {
        "CHARTER_NO": "15980",
        "NAME": "Dallas Capital Bank, National Association",
        "ADDRESS": "14185 Dallas Parkway, Suite 200",
        "CITY": "Dallas",
        "STATE": "TX",
        "CERT": "20727",
        "RSSD": "384652"
    },
    {
        "CHARTER_NO": "25237",
        "NAME": "Dayforce National Trust Bank",
        "ADDRESS": "3311 East Old Shakopee Road",
        "CITY": "Minneapolis",
        "STATE": "MN",
        "CERT": "59337",
        "RSSD": "5805817"
    },
    {
        "CHARTER_NO": "23852",
        "NAME": "Desjardins Bank, National Association",
        "ADDRESS": "1001 East Hallandale Beach Boulevard",
        "CITY": "Hallandale",
        "STATE": "FL",
        "CERT": "33565",
        "RSSD": "1940747"
    },
    {
        "CHARTER_NO": "18608",
        "NAME": "Deutsche Bank National Trust Company",
        "ADDRESS": "1999 Avenue of the Stars",
        "CITY": "Los Angeles",
        "STATE": "CA",
        "CERT": "26732",
        "RSSD": "670560"
    },
    {
        "CHARTER_NO": "24452",
        "NAME": "Deutsche Bank Trust Company, National Association",
        "ADDRESS": "1 Columbus Circle",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "34056",
        "RSSD": "2325882"
    },
    {
        "CHARTER_NO": "12877",
        "NAME": "DNB National Bank",
        "ADDRESS": "305 Fourth Street West",
        "CITY": "Clear Lake",
        "STATE": "SD",
        "CERT": "3977",
        "RSSD": "401559"
    },
    {
        "CHARTER_NO": "24249",
        "NAME": "Douglas National Bank",
        "ADDRESS": "211 East Ward Street",
        "CITY": "Douglas",
        "STATE": "GA",
        "CERT": "57230",
        "RSSD": "3049635"
    },
    {
        "CHARTER_NO": "8114",
        "NAME": "Dream First Bank, National Association",
        "ADDRESS": "11 North Main Street",
        "CITY": "Syracuse",
        "STATE": "KS",
        "CERT": "4779",
        "RSSD": "543459"
    },
    {
        "CHARTER_NO": "23097",
        "NAME": "DSRM National Bank",
        "ADDRESS": "5600 Wyoming Blvd, NE, Suite 275",
        "CITY": "Albuquerque",
        "STATE": "NM",
        "CERT": "34331",
        "RSSD": "2502825"
    },
    {
        "CHARTER_NO": "18431",
        "NAME": "Eastbank, National Association",
        "ADDRESS": "183 Centre Street",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "25749",
        "RSSD": "98717"
    },
    {
        "CHARTER_NO": "15748",
        "NAME": "Eastern National Bank",
        "ADDRESS": "9700 South Dixie Highway",
        "CITY": "Miami",
        "STATE": "FL",
        "CERT": "20026",
        "RSSD": "171133"
    },
    {
        "CHARTER_NO": "23329",
        "NAME": "Edison National Bank",
        "ADDRESS": "13000 South Cleveland Avenue",
        "CITY": "Fort Myers",
        "STATE": "FL",
        "CERT": "34489",
        "RSSD": "2594419"
    },
    {
        "CHARTER_NO": "24493",
        "NAME": "EH National Bank",
        "ADDRESS": "9420 Wilshire Boulevard",
        "CITY": "Beverly Hills",
        "STATE": "CA",
        "CERT": "57734",
        "RSSD": "3320576"
    },
    {
        "CHARTER_NO": "3855",
        "NAME": "Elevate Bank, National Association",
        "ADDRESS": "101 West Main Street",
        "CITY": "Sedan",
        "STATE": "KS",
        "CERT": "4770",
        "RSSD": "195157"
    },
    {
        "CHARTER_NO": "24679",
        "NAME": "Embassy National Bank",
        "ADDRESS": "1817 North Brown Road",
        "CITY": "Lawrenceville",
        "STATE": "GA",
        "CERT": "58413",
        "RSSD": "3482045"
    },
    {
        "CHARTER_NO": "25125",
        "NAME": "Esquire Bank, National Association",
        "ADDRESS": "100 Jericho Quadrangle, Suite 100",
        "CITY": "Jericho",
        "STATE": "NY",
        "CERT": "58140",
        "RSSD": "3447820"
    },
    {
        "CHARTER_NO": "11583",
        "NAME": "Evans Bank, National Association",
        "ADDRESS": "8599 Erie Rd",
        "CITY": "Angola",
        "STATE": "NY",
        "CERT": "6947",
        "RSSD": "292908"
    },
    {
        "CHARTER_NO": "25290",
        "NAME": "EverBank, National Association",
        "ADDRESS": "301 West Bay Street, 25th Floor",
        "CITY": "Jacksonville",
        "STATE": "FL",
        "CERT": "34775",
        "RSSD": "2735146"
    },
    {
        "CHARTER_NO": "24907",
        "NAME": "Evercore Trust Company, National Association",
        "ADDRESS": "300 Delaware Avenue, Suite 1225",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "58927",
        "RSSD": "3939240"
    },
    {
        "CHARTER_NO": "17000",
        "NAME": "Evergreen National Bank",
        "ADDRESS": "28145 Colorado Highway 74",
        "CITY": "Evergreen",
        "STATE": "CO",
        "CERT": "23404",
        "RSSD": "427858"
    },
    {
        "CHARTER_NO": "13778",
        "NAME": "Extraco Banks, National Association",
        "ADDRESS": "18 South Main Street",
        "CITY": "Temple",
        "STATE": "TX",
        "CERT": "5551",
        "RSSD": "537560"
    },
    {
        "CHARTER_NO": "24356",
        "NAME": "F&M Community Bank, National Association",
        "ADDRESS": "100 St. Anthony Street North",
        "CITY": "Preston",
        "STATE": "MN",
        "CERT": "10967",
        "RSSD": "171759"
    },
    {
        "CHARTER_NO": "24373",
        "NAME": "Falcon National Bank",
        "ADDRESS": "183 Cedar Drive",
        "CITY": "Foley",
        "STATE": "MN",
        "CERT": "57603",
        "RSSD": "3184228"
    },
    {
        "CHARTER_NO": "6375",
        "NAME": "Farmers National Bank",
        "ADDRESS": "114 West 3rd Street",
        "CITY": "Prophetstown",
        "STATE": "IL",
        "CERT": "3732",
        "RSSD": "933041"
    },
    {
        "CHARTER_NO": "11933",
        "NAME": "Farmers National Bank",
        "ADDRESS": "759 State Street",
        "CITY": "Phillipsburg",
        "STATE": "KS",
        "CERT": "4611",
        "RSSD": "137559"
    },
    {
        "CHARTER_NO": "14466",
        "NAME": "Farmers National Bank of Griggsville",
        "ADDRESS": "112 West Quincy Street",
        "CITY": "Griggsville",
        "STATE": "IL",
        "CERT": "15928",
        "RSSD": "166849"
    },
    {
        "CHARTER_NO": "5629",
        "NAME": "FCN Bank, National Association",
        "ADDRESS": "501 Main Street",
        "CITY": "Brookville",
        "STATE": "IN",
        "CERT": "4319",
        "RSSD": "321947"
    },
    {
        "CHARTER_NO": "25188",
        "NAME": "Fidelity Bank, National Association",
        "ADDRESS": "100 East English Street",
        "CITY": "Wichita",
        "STATE": "KS",
        "CERT": "30895",
        "RSSD": "762474"
    },
    {
        "CHARTER_NO": "25190",
        "NAME": "Fifth Third Bank, National Association",
        "ADDRESS": "38 Fountain Square Plaza",
        "CITY": "Cincinnati",
        "STATE": "OH",
        "CERT": "6672",
        "RSSD": "723112"
    },
    {
        "CHARTER_NO": "24719",
        "NAME": "Finemark National Bank & Trust",
        "ADDRESS": "8695 College Parkway",
        "CITY": "Fort Myers",
        "STATE": "FL",
        "CERT": "58486",
        "RSSD": "3547131"
    },
    {
        "CHARTER_NO": "6769",
        "NAME": "First & Farmers National Bank, Inc.",
        "ADDRESS": "2020 South US 27",
        "CITY": "Somerset",
        "STATE": "KY",
        "CERT": "2738",
        "RSSD": "721949"
    },
    {
        "CHARTER_NO": "14564",
        "NAME": "First Bankers Trust Company, National Association",
        "ADDRESS": "1201 Broadway",
        "CITY": "Quincy",
        "STATE": "IL",
        "CERT": "16501",
        "RSSD": "344647"
    },
    {
        "CHARTER_NO": "24169",
        "NAME": "First Century Bank, National Association",
        "ADDRESS": "1731 N. Elm Street",
        "CITY": "Commerce",
        "STATE": "GA",
        "CERT": "57123",
        "RSSD": "2997748"
    },
    {
        "CHARTER_NO": "5263",
        "NAME": "First Citizens National Bank",
        "ADDRESS": "200-206 West Court Street",
        "CITY": "Dyersburg",
        "STATE": "TN",
        "CERT": "4972",
        "RSSD": "133850"
    },
    {
        "CHARTER_NO": "17862",
        "NAME": "First Commercial Bank, National Association",
        "ADDRESS": "1336 East Court Street",
        "CITY": "Seguin",
        "STATE": "TX",
        "CERT": "24603",
        "RSSD": "400365"
    },
    {
        "CHARTER_NO": "24120",
        "NAME": "First Community Trust, National Association",
        "ADDRESS": "3385 Hillcrest Road, Suite 100",
        "CITY": "Dubuque",
        "STATE": "IA",
        "CERT": "57179",
        "RSSD": "2973041"
    },
    {
        "CHARTER_NO": "2068",
        "NAME": "First Dakota National Bank",
        "ADDRESS": "225 Cedar Street",
        "CITY": "Yankton",
        "STATE": "SD",
        "CERT": "4028",
        "RSSD": "441256"
    },
    {
        "CHARTER_NO": "22351",
        "NAME": "First Farmers & Merchants National Bank",
        "ADDRESS": "114 South Park",
        "CITY": "Fairmont",
        "STATE": "MN",
        "CERT": "33131",
        "RSSD": "1470150"
    },
    {
        "CHARTER_NO": "13544",
        "NAME": "First Farmers & Merchants National Bank",
        "ADDRESS": "303 E. Main",
        "CITY": "Luverne",
        "STATE": "MN",
        "CERT": "5186",
        "RSSD": "917854"
    },
    {
        "CHARTER_NO": "25025",
        "NAME": "First Federal Community Bank, National Association",
        "ADDRESS": "141 West Ohio Avenue",
        "CITY": "Dover",
        "STATE": "OH",
        "CERT": "29787",
        "RSSD": "540775"
    },
    {
        "CHARTER_NO": "47",
        "NAME": "First Financial Bank, National Association",
        "ADDRESS": "One First Financial Plaza",
        "CITY": "Terre Haute",
        "STATE": "IN",
        "CERT": "4382",
        "RSSD": "693345"
    },
    {
        "CHARTER_NO": "21882",
        "NAME": "First Financial Trust, National Association",
        "ADDRESS": "351 Main Street",
        "CITY": "Wakefield",
        "STATE": "MA",
        "CERT": "27479",
        "RSSD": "1369870"
    },
    {
        "CHARTER_NO": "10118",
        "NAME": "First Hope Bank, A National Banking Association",
        "ADDRESS": "Union and High Streets",
        "CITY": "Hope",
        "STATE": "NJ",
        "CERT": "6354",
        "RSSD": "434203"
    },
    {
        "CHARTER_NO": "10045",
        "NAME": "First Mid Bank & Trust, National Association",
        "ADDRESS": "1515 Charleston Avenue",
        "CITY": "Mattoon",
        "STATE": "IL",
        "CERT": "3705",
        "RSSD": "762447"
    },
    {
        "CHARTER_NO": "16579",
        "NAME": "First National Bank",
        "ADDRESS": "341 Military Street South",
        "CITY": "Hamilton",
        "STATE": "AL",
        "CERT": "22271",
        "RSSD": "330239"
    },
    {
        "CHARTER_NO": "10004",
        "NAME": "First National Bank",
        "ADDRESS": "200 West Court Street",
        "CITY": "Paragould",
        "STATE": "AR",
        "CERT": "3887",
        "RSSD": "42448"
    },
    {
        "CHARTER_NO": "10465",
        "NAME": "First National Bank",
        "ADDRESS": "302 South Main Street",
        "CITY": "Cloverdale",
        "STATE": "IN",
        "CERT": "4324",
        "RSSD": "60648"
    },
    {
        "CHARTER_NO": "446",
        "NAME": "First National Bank",
        "ADDRESS": "223 Main Street",
        "CITY": "Damariscotta",
        "STATE": "ME",
        "CERT": "4256",
        "RSSD": "439404"
    },
    {
        "CHARTER_NO": "6813",
        "NAME": "First National Bank",
        "ADDRESS": "31 Central Street East",
        "CITY": "Bagley",
        "STATE": "MN",
        "CERT": "5087",
        "RSSD": "392255"
    },
    {
        "CHARTER_NO": "7647",
        "NAME": "First National Bank",
        "ADDRESS": "101 West Lake Street",
        "CITY": "Chisholm",
        "STATE": "MN",
        "CERT": "5113",
        "RSSD": "371755"
    },
    {
        "CHARTER_NO": "14786",
        "NAME": "First National Bank",
        "ADDRESS": "414 10th Street",
        "CITY": "Alamogordo",
        "STATE": "NM",
        "CERT": "17643",
        "RSSD": "823450"
    },
    {
        "CHARTER_NO": "9888",
        "NAME": "First National Bank",
        "ADDRESS": "400 E 1st",
        "CITY": "Heavener",
        "STATE": "OK",
        "CERT": "4111",
        "RSSD": "195456"
    },
    {
        "CHARTER_NO": "14252",
        "NAME": "First National Bank",
        "ADDRESS": "307 Hustan Avenue",
        "CITY": "Fort Pierre",
        "STATE": "SD",
        "CERT": "14712",
        "RSSD": "355858"
    },
    {
        "CHARTER_NO": "21793",
        "NAME": "First National Bank",
        "ADDRESS": "141 East Main Street",
        "CITY": "Oldham",
        "STATE": "SD",
        "CERT": "25894",
        "RSSD": "944355"
    },
    {
        "CHARTER_NO": "23182",
        "NAME": "First National Bank",
        "ADDRESS": "118 North Garfield",
        "CITY": "Rotan",
        "STATE": "TX",
        "CERT": "34455",
        "RSSD": "2490285"
    },
    {
        "CHARTER_NO": "20078",
        "NAME": "First National Bank",
        "ADDRESS": "3801 Fairway Boulevard",
        "CITY": "Wichita Falls",
        "STATE": "TX",
        "CERT": "26543",
        "RSSD": "375566"
    },
    {
        "CHARTER_NO": "9295",
        "NAME": "First National Bank",
        "ADDRESS": "622 Broad Street",
        "CITY": "Altavista",
        "STATE": "VA",
        "CERT": "6811",
        "RSSD": "979629"
    },
    {
        "CHARTER_NO": "3806",
        "NAME": "First National Bank & Trust",
        "ADDRESS": "233 South Stephenson Avenue",
        "CITY": "Iron Mountain",
        "STATE": "MI",
        "CERT": "5062",
        "RSSD": "251558"
    },
    {
        "CHARTER_NO": "9952",
        "NAME": "First National Bank & Trust",
        "ADDRESS": "2714 West Third Street",
        "CITY": "Elk City",
        "STATE": "OK",
        "CERT": "4086",
        "RSSD": "114457"
    },
    {
        "CHARTER_NO": "1926",
        "NAME": "First National Bank & Trust Company",
        "ADDRESS": "2 Kelli Court",
        "CITY": "Clinton",
        "STATE": "IL",
        "CERT": "3639",
        "RSSD": "32234"
    },
    {
        "CHARTER_NO": "5052",
        "NAME": "First National Bank & Trust Company of McAlester",
        "ADDRESS": "235 East Choctaw",
        "CITY": "McAlester",
        "STATE": "OK",
        "CERT": "4145",
        "RSSD": "830355"
    },
    {
        "CHARTER_NO": "12072",
        "NAME": "First National Bank Alaska",
        "ADDRESS": "101 West 36th Avenue",
        "CITY": "Anchorage",
        "STATE": "AK",
        "CERT": "16130",
        "RSSD": "114260"
    },
    {
        "CHARTER_NO": "10697",
        "NAME": "First National Bank and Trust",
        "ADDRESS": "111 South Main Street",
        "CITY": "Atmore",
        "STATE": "AL",
        "CERT": "2779",
        "RSSD": "670430"
    },
    {
        "CHARTER_NO": "3601",
        "NAME": "First National Bank and Trust",
        "ADDRESS": "225 State Street",
        "CITY": "Phillipsburg",
        "STATE": "KS",
        "CERT": "4756",
        "RSSD": "183958"
    },
    {
        "CHARTER_NO": "8029",
        "NAME": "First National Bank and Trust Co. of Bottineau",
        "ADDRESS": "424 Main Street",
        "CITY": "Bottineau",
        "STATE": "ND",
        "CERT": "3902",
        "RSSD": "974558"
    },
    {
        "CHARTER_NO": "13677",
        "NAME": "First National Bank and Trust Company of Ardmore",
        "ADDRESS": "405 West Main Street",
        "CITY": "Ardmore",
        "STATE": "OK",
        "CERT": "4037",
        "RSSD": "984258"
    },
    {
        "CHARTER_NO": "2477",
        "NAME": "First National Bank and Trust Company of Weatherford",
        "ADDRESS": "220 Palo Pinto Street",
        "CITY": "Weatherford",
        "STATE": "TX",
        "CERT": "5575",
        "RSSD": "614368"
    },
    {
        "CHARTER_NO": "6030",
        "NAME": "First National Bank Colorado",
        "ADDRESS": "535 Bent Avenue",
        "CITY": "Las Animas",
        "STATE": "CO",
        "CERT": "3034",
        "RSSD": "513256"
    },
    {
        "CHARTER_NO": "13329",
        "NAME": "First National Bank in Cimarron",
        "ADDRESS": "Canal and Main",
        "CITY": "Cimarron",
        "STATE": "KS",
        "CERT": "4638",
        "RSSD": "677354"
    },
    {
        "CHARTER_NO": "14168",
        "NAME": "First National Bank in DeRidder",
        "ADDRESS": "1003 North Pine Street",
        "CITY": "DeRidder",
        "STATE": "LA",
        "CERT": "14427",
        "RSSD": "480433"
    },
    {
        "CHARTER_NO": "11916",
        "NAME": "First National Bank in Frankfort",
        "ADDRESS": "124 North Kansas",
        "CITY": "Frankfort",
        "STATE": "KS",
        "CERT": "4668",
        "RSSD": "923350"
    },
    {
        "CHARTER_NO": "14370",
        "NAME": "First National Bank in Fredonia",
        "ADDRESS": "730 Madison",
        "CITY": "Fredonia",
        "STATE": "KS",
        "CERT": "13798",
        "RSSD": "844455"
    },
    {
        "CHARTER_NO": "14294",
        "NAME": "First National Bank in New Bremen",
        "ADDRESS": "435 South Washington Street",
        "CITY": "New Bremen",
        "STATE": "OH",
        "CERT": "14836",
        "RSSD": "204826"
    },
    {
        "CHARTER_NO": "10913",
        "NAME": "First National Bank in Okeene",
        "ADDRESS": "124 North Main Street",
        "CITY": "Okeene",
        "STATE": "OK",
        "CERT": "4161",
        "RSSD": "310950"
    },
    {
        "CHARTER_NO": "14217",
        "NAME": "First National Bank in Olney",
        "ADDRESS": "101 East Main Street",
        "CITY": "Olney",
        "STATE": "IL",
        "CERT": "14567",
        "RSSD": "412845"
    },
    {
        "CHARTER_NO": "13557",
        "NAME": "First National Bank in Ord",
        "ADDRESS": "1411 \"m\" Street",
        "CITY": "Ord",
        "STATE": "NE",
        "CERT": "5460",
        "RSSD": "850054"
    },
    {
        "CHARTER_NO": "10637",
        "NAME": "First National Bank in Philip",
        "ADDRESS": "103 East Oak Street",
        "CITY": "Philip",
        "STATE": "SD",
        "CERT": "3999",
        "RSSD": "538754"
    },
    {
        "CHARTER_NO": "13975",
        "NAME": "First National Bank in Pinckneyville",
        "ADDRESS": "210 South Main Street",
        "CITY": "Pinckneyville",
        "STATE": "IL",
        "CERT": "13813",
        "RSSD": "340443"
    },
    {
        "CHARTER_NO": "14821",
        "NAME": "First National Bank in Port Lavaca",
        "ADDRESS": "1101 Highway 35 Bypass South",
        "CITY": "Port Lavaca",
        "STATE": "TX",
        "CERT": "17811",
        "RSSD": "855264"
    },
    {
        "CHARTER_NO": "14769",
        "NAME": "First National Bank in Taylorville",
        "ADDRESS": "322 West Main Cross",
        "CITY": "Taylorville",
        "STATE": "IL",
        "CERT": "17572",
        "RSSD": "177443"
    },
    {
        "CHARTER_NO": "14150",
        "NAME": "First National Bank in Tigerton",
        "ADDRESS": "Cedar and Ash Streets",
        "CITY": "Tigerton",
        "STATE": "WI",
        "CERT": "14400",
        "RSSD": "74449"
    },
    {
        "CHARTER_NO": "1794",
        "NAME": "First National Bank Minnesota",
        "ADDRESS": "226 West Nassau Street",
        "CITY": "St. Peter",
        "STATE": "MN",
        "CERT": "5247",
        "RSSD": "197759"
    },
    {
        "CHARTER_NO": "8476",
        "NAME": "First National Bank North",
        "ADDRESS": "P.O. Box 520",
        "CITY": "Walker",
        "STATE": "MN",
        "CERT": "5269",
        "RSSD": "805755"
    },
    {
        "CHARTER_NO": "18214",
        "NAME": "First National Bank Northwest Florida",
        "ADDRESS": "101 East 23rd Street",
        "CITY": "Panama City",
        "STATE": "FL",
        "CERT": "25122",
        "RSSD": "216230"
    },
    {
        "CHARTER_NO": "14905",
        "NAME": "First National Bank of Alvin",
        "ADDRESS": "1600 East Hwy. 6",
        "CITY": "Alvin",
        "STATE": "TX",
        "CERT": "18282",
        "RSSD": "354057"
    },
    {
        "CHARTER_NO": "14740",
        "NAME": "First National Bank of America",
        "ADDRESS": "241 East Saginaw, Suite 101",
        "CITY": "East Lansing",
        "STATE": "MI",
        "CERT": "17438",
        "RSSD": "413141"
    },
    {
        "CHARTER_NO": "7337",
        "NAME": "First National Bank of Anderson",
        "ADDRESS": "1071 Highway 90 South",
        "CITY": "Anderson",
        "STATE": "TX",
        "CERT": "3075",
        "RSSD": "362155"
    },
    {
        "CHARTER_NO": "3640",
        "NAME": "First National Bank of Beardstown",
        "ADDRESS": "300 Washington Street",
        "CITY": "Beardstown",
        "STATE": "IL",
        "CERT": "3607",
        "RSSD": "368933"
    },
    {
        "CHARTER_NO": "13675",
        "NAME": "First National Bank of Bosque County",
        "ADDRESS": "P.O. Box 278",
        "CITY": "Valley Mills",
        "STATE": "TX",
        "CERT": "5564",
        "RSSD": "198961"
    },
    {
        "CHARTER_NO": "14993",
        "NAME": "First National Bank of Brookfield",
        "ADDRESS": "9136 Washington Avenue",
        "CITY": "Brookfield",
        "STATE": "IL",
        "CERT": "18564",
        "RSSD": "465038"
    },
    {
        "CHARTER_NO": "17001",
        "NAME": "First National Bank of Burleson",
        "ADDRESS": "899 Northeast Alsbury",
        "CITY": "Burleson",
        "STATE": "TX",
        "CERT": "23430",
        "RSSD": "240954"
    },
    {
        "CHARTER_NO": "5850",
        "NAME": "First National Bank of Central Texas",
        "ADDRESS": "1835 North Valley Mills Drive",
        "CITY": "Waco",
        "STATE": "TX",
        "CERT": "3325",
        "RSSD": "369659"
    },
    {
        "CHARTER_NO": "15284",
        "NAME": "First National Bank of Clarksdale",
        "ADDRESS": "402 East Second Street",
        "CITY": "Clarksdale",
        "STATE": "MS",
        "CERT": "19070",
        "RSSD": "11640"
    },
    {
        "CHARTER_NO": "22327",
        "NAME": "First National Bank of Coffee County",
        "ADDRESS": "420 South Madison Avenue",
        "CITY": "Douglas",
        "STATE": "GA",
        "CERT": "33506",
        "RSSD": "1892154"
    },
    {
        "CHARTER_NO": "24458",
        "NAME": "First National Bank of Decatur County",
        "ADDRESS": "819 East Shotwell Street",
        "CITY": "Bainbridge",
        "STATE": "GA",
        "CERT": "57694",
        "RSSD": "3232370"
    },
    {
        "CHARTER_NO": "20026",
        "NAME": "First National Bank of Dublin",
        "ADDRESS": "825 North Patrick",
        "CITY": "Dublin",
        "STATE": "TX",
        "CERT": "26228",
        "RSSD": "648550"
    },
    {
        "CHARTER_NO": "5288",
        "NAME": "First National Bank of East Texas",
        "ADDRESS": "206 U. S. Highway 271 North",
        "CITY": "Gilmer",
        "STATE": "TX",
        "CERT": "3218",
        "RSSD": "445955"
    },
    {
        "CHARTER_NO": "13637",
        "NAME": "First National Bank of Eastern Arkansas",
        "ADDRESS": "101 North Washington Street",
        "CITY": "Forrest City",
        "STATE": "AR",
        "CERT": "3863",
        "RSSD": "251745"
    },
    {
        "CHARTER_NO": "14842",
        "NAME": "First National Bank of Fort Stockton",
        "ADDRESS": "1000 W. Dickinson Blvd.",
        "CITY": "Fort Stockton",
        "STATE": "TX",
        "CERT": "17913",
        "RSSD": "397456"
    },
    {
        "CHARTER_NO": "4410",
        "NAME": "First National Bank of Giddings",
        "ADDRESS": "108 E. Austin",
        "CITY": "Giddings",
        "STATE": "TX",
        "CERT": "3217",
        "RSSD": "324153"
    },
    {
        "CHARTER_NO": "15158",
        "NAME": "First National Bank of Gillette",
        "ADDRESS": "319 South Gillette Avenue",
        "CITY": "Gillette",
        "STATE": "WY",
        "CERT": "18880",
        "RSSD": "890050"
    },
    {
        "CHARTER_NO": "15572",
        "NAME": "First National Bank of Griffin",
        "ADDRESS": "318 South Hill Street",
        "CITY": "Griffin",
        "STATE": "GA",
        "CERT": "169",
        "RSSD": "563233"
    },
    {
        "CHARTER_NO": "23692",
        "NAME": "First National Bank of Hereford",
        "ADDRESS": "301 West Third Street",
        "CITY": "Hereford",
        "STATE": "TX",
        "CERT": "34918",
        "RSSD": "2759629"
    },
    {
        "CHARTER_NO": "4208",
        "NAME": "First National Bank of Huntsville",
        "ADDRESS": "1300 11th Street",
        "CITY": "Huntsville",
        "STATE": "TX",
        "CERT": "3269",
        "RSSD": "583352"
    },
    {
        "CHARTER_NO": "6101",
        "NAME": "First National Bank of Kansas",
        "ADDRESS": "600 N. 4th Street",
        "CITY": "Burlington",
        "STATE": "KS",
        "CERT": "4794",
        "RSSD": "614256"
    },
    {
        "CHARTER_NO": "2592",
        "NAME": "First National Bank of Kentucky",
        "ADDRESS": "604 Highland Avenue",
        "CITY": "Carrollton",
        "STATE": "KY",
        "CERT": "2735",
        "RSSD": "907444"
    },
    {
        "CHARTER_NO": "15171",
        "NAME": "First National Bank of Lake Jackson",
        "ADDRESS": "122 West Way",
        "CITY": "Lake Jackson",
        "STATE": "TX",
        "CERT": "18895",
        "RSSD": "560353"
    },
    {
        "CHARTER_NO": "12523",
        "NAME": "First National Bank of Louisiana",
        "ADDRESS": "128 North Parkerson Avenue",
        "CITY": "Crowley",
        "STATE": "LA",
        "CERT": "4288",
        "RSSD": "575834"
    },
    {
        "CHARTER_NO": "4076",
        "NAME": "First National Bank of McGregor",
        "ADDRESS": "401 South Main",
        "CITY": "Mc Gregor",
        "STATE": "TX",
        "CERT": "3330",
        "RSSD": "895055"
    },
    {
        "CHARTER_NO": "24637",
        "NAME": "First National Bank of Michigan",
        "ADDRESS": "348 West Michigan Avenue",
        "CITY": "Kalamazoo",
        "STATE": "MI",
        "CERT": "58259",
        "RSSD": "3404467"
    },
    {
        "CHARTER_NO": "14436",
        "NAME": "First National Bank of Nokomis",
        "ADDRESS": "122 West State Street",
        "CITY": "Nokomis",
        "STATE": "IL",
        "CERT": "15763",
        "RSSD": "330248"
    },
    {
        "CHARTER_NO": "11397",
        "NAME": "First National Bank of Oklahoma",
        "ADDRESS": "10900 Hefner Pointe Drive",
        "CITY": "Oklahoma City",
        "STATE": "OK",
        "CERT": "4211",
        "RSSD": "525053"
    },
    {
        "CHARTER_NO": "209",
        "NAME": "First National Bank of Omaha",
        "ADDRESS": "1601 Capitol Avenue",
        "CITY": "Omaha",
        "STATE": "NE",
        "CERT": "5452",
        "RSSD": "527954"
    },
    {
        "CHARTER_NO": "13478",
        "NAME": "First National Bank of Pana",
        "ADDRESS": "306 South Locust Street",
        "CITY": "Pana",
        "STATE": "IL",
        "CERT": "3720",
        "RSSD": "860147"
    },
    {
        "CHARTER_NO": "20976",
        "NAME": "First National Bank of Pasco",
        "ADDRESS": "13315 US Highway 301 South",
        "CITY": "Dade City",
        "STATE": "FL",
        "CERT": "26829",
        "RSSD": "82033"
    },
    {
        "CHARTER_NO": "249",
        "NAME": "First National Bank of Pennsylvania",
        "ADDRESS": "166 Main Street",
        "CITY": "Greenville",
        "STATE": "PA",
        "CERT": "7888",
        "RSSD": "379920"
    },
    {
        "CHARTER_NO": "14619",
        "NAME": "First National Bank of Pulaski",
        "ADDRESS": "206 South First Street",
        "CITY": "Pulaski",
        "STATE": "TN",
        "CERT": "15572",
        "RSSD": "972732"
    },
    {
        "CHARTER_NO": "7087",
        "NAME": "First National Bank of River Falls",
        "ADDRESS": "104 East Locust Street",
        "CITY": "River Falls",
        "STATE": "WI",
        "CERT": "5364",
        "RSSD": "956255"
    },
    {
        "CHARTER_NO": "14680",
        "NAME": "First National Bank of Scotia",
        "ADDRESS": "201 Mohawk Avenue",
        "CITY": "Scotia",
        "STATE": "NY",
        "CERT": "11501",
        "RSSD": "472616"
    },
    {
        "CHARTER_NO": "10680",
        "NAME": "First National Bank of South Carolina",
        "ADDRESS": "801 Gilway Street",
        "CITY": "Holly Hill",
        "STATE": "SC",
        "CERT": "2107",
        "RSSD": "347022"
    },
    {
        "CHARTER_NO": "18063",
        "NAME": "First National Bank of South Padre Island",
        "ADDRESS": "709 Padre Blvd.",
        "CITY": "South Padre Islan",
        "STATE": "TX",
        "CERT": "24902",
        "RSSD": "346566"
    },
    {
        "CHARTER_NO": "14437",
        "NAME": "First National Bank of Steeleville",
        "ADDRESS": "400 West Broadway",
        "CITY": "Steeleville",
        "STATE": "IL",
        "CERT": "1049",
        "RSSD": "129349"
    },
    {
        "CHARTER_NO": "15550",
        "NAME": "First National Bank of Tennessee",
        "ADDRESS": "214 East Main Street",
        "CITY": "Livingston",
        "STATE": "TN",
        "CERT": "19502",
        "RSSD": "283737"
    },
    {
        "CHARTER_NO": "14882",
        "NAME": "First National Bank of Wauchula",
        "ADDRESS": "406 N 6th Avenue",
        "CITY": "Wauchula",
        "STATE": "FL",
        "CERT": "18136",
        "RSSD": "89135"
    },
    {
        "CHARTER_NO": "5674",
        "NAME": "First National Bank of Winnsboro",
        "ADDRESS": "315 North Main",
        "CITY": "Winnsboro",
        "STATE": "TX",
        "CERT": "5590",
        "RSSD": "501767"
    },
    {
        "CHARTER_NO": "5750",
        "NAME": "First National Bank Texas",
        "ADDRESS": "901 East Central Texas Expressway",
        "CITY": "Killeen",
        "STATE": "TX",
        "CERT": "3285",
        "RSSD": "613950"
    },
    {
        "CHARTER_NO": "16473",
        "NAME": "First National Bank USA",
        "ADDRESS": "13386 Highway 90",
        "CITY": "Boutte",
        "STATE": "LA",
        "CERT": "22046",
        "RSSD": "714839"
    },
    {
        "CHARTER_NO": "10408",
        "NAME": "First National Bank, Ames, Iowa",
        "ADDRESS": "405 Fifth Street",
        "CITY": "Ames",
        "STATE": "IA",
        "CERT": "1545",
        "RSSD": "820048"
    },
    {
        "CHARTER_NO": "14833",
        "NAME": "First National Bank, Cortez",
        "ADDRESS": "2258 East Main Street",
        "CITY": "Cortez",
        "STATE": "CO",
        "CERT": "17872",
        "RSSD": "968155"
    },
    {
        "CHARTER_NO": "18278",
        "NAME": "First National Bankers Bank",
        "ADDRESS": "7813 Office Park Boulevard",
        "CITY": "Baton Rouge",
        "STATE": "LA",
        "CERT": "25247",
        "RSSD": "734538"
    },
    {
        "CHARTER_NO": "16487",
        "NAME": "First National Community Bank",
        "ADDRESS": "701 North 3rd Avenue",
        "CITY": "Chatsworth",
        "STATE": "GA",
        "CERT": "22092",
        "RSSD": "450632"
    },
    {
        "CHARTER_NO": "11412",
        "NAME": "First National Community Bank",
        "ADDRESS": "109 East Second Street",
        "CITY": "New Richmond",
        "STATE": "WI",
        "CERT": "5357",
        "RSSD": "23755"
    },
    {
        "CHARTER_NO": "24475",
        "NAME": "First National Trust Company",
        "ADDRESS": "One F.N.B. Boulevard",
        "CITY": "Hermitage",
        "STATE": "PA",
        "CERT": "57793",
        "RSSD": "3229875"
    },
    {
        "CHARTER_NO": "13682",
        "NAME": "First Neighbor Bank, National Association",
        "ADDRESS": "201 North Meridian",
        "CITY": "Toledo",
        "STATE": "IL",
        "CERT": "3747",
        "RSSD": "413646"
    },
    {
        "CHARTER_NO": "8752",
        "NAME": "First Pioneer National Bank",
        "ADDRESS": "145 West Fourth Street",
        "CITY": "Wray",
        "STATE": "CO",
        "CERT": "3063",
        "RSSD": "357553"
    },
    {
        "CHARTER_NO": "23393",
        "NAME": "First Robinson Savings Bank, National Association",
        "ADDRESS": "501 East Main Street",
        "CITY": "Robinson",
        "STATE": "IL",
        "CERT": "28105",
        "RSSD": "660271"
    },
    {
        "CHARTER_NO": "1493",
        "NAME": "First Southern National Bank",
        "ADDRESS": "27 Public Square",
        "CITY": "Lancaster",
        "STATE": "KY",
        "CERT": "2700",
        "RSSD": "702612"
    },
    {
        "CHARTER_NO": "7045",
        "NAME": "First Texas National Bank",
        "ADDRESS": "124 South Main Street",
        "CITY": "Floydada",
        "STATE": "TX",
        "CERT": "3197",
        "RSSD": "393252"
    },
    {
        "CHARTER_NO": "14005",
        "NAME": "First Texoma National Bank",
        "ADDRESS": "220 West Main Street",
        "CITY": "Durant",
        "STATE": "OK",
        "CERT": "13905",
        "RSSD": "388155"
    },
    {
        "CHARTER_NO": "9480",
        "NAME": "First United National Bank",
        "ADDRESS": "Routes 157 and 208",
        "CITY": "Fryburg",
        "STATE": "PA",
        "CERT": "7886",
        "RSSD": "127224"
    },
    {
        "CHARTER_NO": "13934",
        "NAME": "First-Lockhart National Bank",
        "ADDRESS": "111 South Main Street",
        "CITY": "Lockhart",
        "STATE": "TX",
        "CERT": "13599",
        "RSSD": "631150"
    },
    {
        "CHARTER_NO": "25282",
        "NAME": "Flagstar Bank, National Association",
        "ADDRESS": "102 Duffy Avenue",
        "CITY": "Hicksville",
        "STATE": "NY",
        "CERT": "32541",
        "RSSD": "694904"
    },
    {
        "CHARTER_NO": "20214",
        "NAME": "Florida Capital Bank, National Association",
        "ADDRESS": "10151 Deerwood Park Blvd, Bldg 100, Suite 200-A",
        "CITY": "Jacksonville",
        "STATE": "FL",
        "CERT": "26323",
        "RSSD": "188430"
    },
    {
        "CHARTER_NO": "24349",
        "NAME": "Forcht Bank, National Association",
        "ADDRESS": "2404 Sir Barton Way",
        "CITY": "Lexington",
        "STATE": "KY",
        "CERT": "57415",
        "RSSD": "3141726"
    },
    {
        "CHARTER_NO": "14566",
        "NAME": "Forest Park National Bank and Trust Company",
        "ADDRESS": "7348 West Madison Street",
        "CITY": "Forest Park",
        "STATE": "IL",
        "CERT": "15945",
        "RSSD": "926632"
    },
    {
        "CHARTER_NO": "14546",
        "NAME": "FSNB, National Association",
        "ADDRESS": "1420 Southwest Lee Boulevard",
        "CITY": "Lawton",
        "STATE": "OK",
        "CERT": "16416",
        "RSSD": "125154"
    },
    {
        "CHARTER_NO": "24891",
        "NAME": "Fulton Bank, National Association",
        "ADDRESS": "One Penn Square P.O.Box 4887",
        "CITY": "Lancaster",
        "STATE": "PA",
        "CERT": "7551",
        "RSSD": "474919"
    },
    {
        "CHARTER_NO": "5741",
        "NAME": "Gilmer National Bank",
        "ADDRESS": "713 US Highway 271 North",
        "CITY": "Gilmer",
        "STATE": "TX",
        "CERT": "3219",
        "RSSD": "323651"
    },
    {
        "CHARTER_NO": "7699",
        "NAME": "Glens Falls National Bank and Trust Company",
        "ADDRESS": "250 Glen Street",
        "CITY": "Glens Falls",
        "STATE": "NY",
        "CERT": "7074",
        "RSSD": "866000"
    },
    {
        "CHARTER_NO": "13347",
        "NAME": "GNBank, National Association",
        "ADDRESS": "100 E. Forest, P. O. Box 67",
        "CITY": "Girard",
        "STATE": "KS",
        "CERT": "4673",
        "RSSD": "928056"
    },
    {
        "CHARTER_NO": "18558",
        "NAME": "Golden Bank, National Association",
        "ADDRESS": "9315 Bellaire Boulevard",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "26223",
        "RSSD": "536059"
    },
    {
        "CHARTER_NO": "24671",
        "NAME": "Goldwater Bank, National Association",
        "ADDRESS": "2525 E Camelback Road, Suite 1100",
        "CITY": "Phoenix",
        "STATE": "AZ",
        "CERT": "58405",
        "RSSD": "3592047"
    },
    {
        "CHARTER_NO": "6684",
        "NAME": "Grand Ridge National Bank",
        "ADDRESS": "500 S. County Farm Road",
        "CITY": "Wheaton",
        "STATE": "IL",
        "CERT": "3674",
        "RSSD": "875132"
    },
    {
        "CHARTER_NO": "25152",
        "NAME": "Grasshopper Bank, National Association",
        "ADDRESS": "261 Fifth Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "59113",
        "RSSD": "5210989"
    },
    {
        "CHARTER_NO": "23049",
        "NAME": "Great Plains National Bank",
        "ADDRESS": "2017 West Third",
        "CITY": "Elk City",
        "STATE": "OK",
        "CERT": "34207",
        "RSSD": "2482824"
    },
    {
        "CHARTER_NO": "13944",
        "NAME": "Greenville National Bank",
        "ADDRESS": "446 South Broadway",
        "CITY": "Greenville",
        "STATE": "OH",
        "CERT": "13703",
        "RSSD": "295011"
    },
    {
        "CHARTER_NO": "25053",
        "NAME": "Guaranty Bank & Trust, National Association",
        "ADDRESS": "100 W. Arkansas",
        "CITY": "Mt. Pleasant",
        "STATE": "TX",
        "CERT": "1208",
        "RSSD": "112163"
    },
    {
        "CHARTER_NO": "20622",
        "NAME": "Hana Bank USA, National Association",
        "ADDRESS": "201 Main Street",
        "CITY": "Fort Lee",
        "STATE": "NJ",
        "CERT": "26790",
        "RSSD": "609609"
    },
    {
        "CHARTER_NO": "14149",
        "NAME": "Haskell National Bank",
        "ADDRESS": "601 North First Street",
        "CITY": "Haskell",
        "STATE": "TX",
        "CERT": "14399",
        "RSSD": "170257"
    },
    {
        "CHARTER_NO": "14911",
        "NAME": "Hawaii National Bank",
        "ADDRESS": "45 North King Street",
        "CITY": "Honolulu",
        "STATE": "HI",
        "CERT": "18296",
        "RSSD": "915065"
    },
    {
        "CHARTER_NO": "23773",
        "NAME": "Heartland National Bank",
        "ADDRESS": "320 U.S. Highway 27 North",
        "CITY": "Sebring",
        "STATE": "FL",
        "CERT": "35052",
        "RSSD": "2800491"
    },
    {
        "CHARTER_NO": "15401",
        "NAME": "Heritage Bank, National Association",
        "ADDRESS": "120 South Street W.",
        "CITY": "Spicer",
        "STATE": "MN",
        "CERT": "19254",
        "RSSD": "901358"
    },
    {
        "CHARTER_NO": "15698",
        "NAME": "Hiawatha National Bank",
        "ADDRESS": "N1555 770th Street & Highway 35",
        "CITY": "Hager City",
        "STATE": "WI",
        "CERT": "13058",
        "RSSD": "505550"
    },
    {
        "CHARTER_NO": "25255",
        "NAME": "Hightower Trust Company, National Association",
        "ADDRESS": "4400 Post Oak Parkway, Suite 2600",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "59321",
        "RSSD": "2597232"
    },
    {
        "CHARTER_NO": "15359",
        "NAME": "Hilltop National Bank",
        "ADDRESS": "300 Country Club Road",
        "CITY": "Casper",
        "STATE": "WY",
        "CERT": "19184",
        "RSSD": "1454"
    },
    {
        "CHARTER_NO": "25212",
        "NAME": "Hinsdale Bank & Trust Company, National Association",
        "ADDRESS": "25 East First Street",
        "CITY": "Hinsdale",
        "STATE": "IL",
        "CERT": "33849",
        "RSSD": "2119773"
    },
    {
        "CHARTER_NO": "6635",
        "NAME": "HNB National Bank",
        "ADDRESS": "100 North Main Street",
        "CITY": "Hannibal",
        "STATE": "MO",
        "CERT": "4540",
        "RSSD": "908553"
    },
    {
        "CHARTER_NO": "25106",
        "NAME": "Home Bank, National Association",
        "ADDRESS": "503 Kaliste Saloom Road",
        "CITY": "Lafayette",
        "STATE": "LA",
        "CERT": "28094",
        "RSSD": "929978"
    },
    {
        "CHARTER_NO": "9815",
        "NAME": "Home National Bank",
        "ADDRESS": "502 Elm Street",
        "CITY": "Racine",
        "STATE": "OH",
        "CERT": "6680",
        "RSSD": "79127"
    },
    {
        "CHARTER_NO": "18763",
        "NAME": "Home State Bank / National Association",
        "ADDRESS": "40 Grant Street",
        "CITY": "Crystal Lake",
        "STATE": "IL",
        "CERT": "12815",
        "RSSD": "696430"
    },
    {
        "CHARTER_NO": "15593",
        "NAME": "Hometown Bank, National Association",
        "ADDRESS": "1801 45th Street",
        "CITY": "Galveston",
        "STATE": "TX",
        "CERT": "19603",
        "RSSD": "393953"
    },
    {
        "CHARTER_NO": "2503",
        "NAME": "Hometown National Bank",
        "ADDRESS": "260 Bucklin Street",
        "CITY": "LA Salle",
        "STATE": "IL",
        "CERT": "3691",
        "RSSD": "770639"
    },
    {
        "CHARTER_NO": "24522",
        "NAME": "HSBC Bank USA, National Association",
        "ADDRESS": "1800 Tysons Boulevard",
        "CITY": "Tysons",
        "STATE": "VA",
        "CERT": "57890",
        "RSSD": "413208"
    },
    {
        "CHARTER_NO": "24601",
        "NAME": "HSBC Trust Company (Delaware), National Association",
        "ADDRESS": "300 Delaware Avenue, Suite 1401",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "58188",
        "RSSD": "3357620"
    },
    {
        "CHARTER_NO": "11443",
        "NAME": "INB, National Association",
        "ADDRESS": "322 East Capitol Avenue",
        "CITY": "Springfield",
        "STATE": "IL",
        "CERT": "3664",
        "RSSD": "925037"
    },
    {
        "CHARTER_NO": "12190",
        "NAME": "Incommons Bank, National Association",
        "ADDRESS": "301 East Commerce",
        "CITY": "Mexia",
        "STATE": "TX",
        "CERT": "3342",
        "RSSD": "414858"
    },
    {
        "CHARTER_NO": "24440",
        "NAME": "Industrial and Commercial Bank of China (USA), NA",
        "ADDRESS": "1185 Avenue of the Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "24387",
        "RSSD": "1015560"
    },
    {
        "CHARTER_NO": "25275",
        "NAME": "Inspire Trust Company, National Association",
        "ADDRESS": "241 Ridge Street",
        "CITY": "Reno",
        "STATE": "NV",
        "CERT": "59349",
        "RSSD": "5805488"
    },
    {
        "CHARTER_NO": "18283",
        "NAME": "Intercredit Bank, National Association",
        "ADDRESS": "396 Alhambra Circle",
        "CITY": "Coral Gables",
        "STATE": "FL",
        "CERT": "25258",
        "RSSD": "44433"
    },
    {
        "CHARTER_NO": "2782",
        "NAME": "Intrust Bank, National Association",
        "ADDRESS": "105 N. Main",
        "CITY": "Wichita",
        "STATE": "KS",
        "CERT": "4799",
        "RSSD": "557858"
    },
    {
        "CHARTER_NO": "25185",
        "NAME": "Investar Bank, National Association",
        "ADDRESS": "7244 Perkins Road",
        "CITY": "Baton Rouge",
        "STATE": "LA",
        "CERT": "58316",
        "RSSD": "3449066"
    },
    {
        "CHARTER_NO": "15292",
        "NAME": "Inwood National Bank",
        "ADDRESS": "7621 Inwood Road",
        "CITY": "Dallas",
        "STATE": "TX",
        "CERT": "19080",
        "RSSD": "913753"
    },
    {
        "CHARTER_NO": "8",
        "NAME": "JPMorgan Chase Bank, National Association",
        "ADDRESS": "1111 Polaris Parkway",
        "CITY": "Columbus",
        "STATE": "OH",
        "CERT": "628",
        "RSSD": "852218"
    },
    {
        "CHARTER_NO": "14330",
        "NAME": "Junction National Bank",
        "ADDRESS": "701 Main Street",
        "CITY": "Junction",
        "STATE": "TX",
        "CERT": "15078",
        "RSSD": "741152"
    },
    {
        "CHARTER_NO": "6544",
        "NAME": "Keen Bank, National Association",
        "ADDRESS": "101 North State Street",
        "CITY": "Waseca",
        "STATE": "MN",
        "CERT": "5270",
        "RSSD": "837354"
    },
    {
        "CHARTER_NO": "25051",
        "NAME": "Key National Trust Company of Delaware",
        "ADDRESS": "1105 North Market Street",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "59069",
        "RSSD": "4368351"
    },
    {
        "CHARTER_NO": "14761",
        "NAME": "KeyBank National Association",
        "ADDRESS": "127 Public Square",
        "CITY": "Cleveland",
        "STATE": "OH",
        "CERT": "17534",
        "RSSD": "280110"
    },
    {
        "CHARTER_NO": "9536",
        "NAME": "Kingston National Bank",
        "ADDRESS": "2 North Main Street",
        "CITY": "Kingston",
        "STATE": "OH",
        "CERT": "6616",
        "RSSD": "966722"
    },
    {
        "CHARTER_NO": "12968",
        "NAME": "Kleberg Bank, National Association",
        "ADDRESS": "100 East Kleberg Avenue",
        "CITY": "Kingsville",
        "STATE": "TX",
        "CERT": "3286",
        "RSSD": "556459"
    },
    {
        "CHARTER_NO": "15168",
        "NAME": "Kress National Bank",
        "ADDRESS": "Highway 87 & 4th Street",
        "CITY": "Kress",
        "STATE": "TX",
        "CERT": "18892",
        "RSSD": "995955"
    },
    {
        "CHARTER_NO": "25149",
        "NAME": "Lake Forest Bank & Trust Company, National Association",
        "ADDRESS": "727 North Bank Lane",
        "CITY": "Lake Forest",
        "STATE": "IL",
        "CERT": "27589",
        "RSSD": "1917301"
    },
    {
        "CHARTER_NO": "17106",
        "NAME": "Lamar National Bank",
        "ADDRESS": "200 S. Collegiate Drive",
        "CITY": "Paris",
        "STATE": "TX",
        "CERT": "23597",
        "RSSD": "2161"
    },
    {
        "CHARTER_NO": "23038",
        "NAME": "Landmark National Bank",
        "ADDRESS": "701 Poyntz Avenue",
        "CITY": "Manhattan",
        "STATE": "KS",
        "CERT": "5826",
        "RSSD": "481177"
    },
    {
        "CHARTER_NO": "2360",
        "NAME": "LCNB National Bank",
        "ADDRESS": "2 North Broadway",
        "CITY": "Lebanon",
        "STATE": "OH",
        "CERT": "6623",
        "RSSD": "785923"
    },
    {
        "CHARTER_NO": "24131",
        "NAME": "Leader Bank, National Association",
        "ADDRESS": "141 Massachusetts Avenue",
        "CITY": "Arlington",
        "STATE": "MA",
        "CERT": "57134",
        "RSSD": "3109146"
    },
    {
        "CHARTER_NO": "22210",
        "NAME": "Ledyard National Bank",
        "ADDRESS": "320 Main Street",
        "CITY": "Norwich",
        "STATE": "VT",
        "CERT": "33418",
        "RSSD": "1863097"
    },
    {
        "CHARTER_NO": "24573",
        "NAME": "Legacy National Bank",
        "ADDRESS": "4055 West Sunset",
        "CITY": "Springdale",
        "STATE": "AR",
        "CERT": "57953",
        "RSSD": "3306280"
    },
    {
        "CHARTER_NO": "24338",
        "NAME": "Legacy Trust Company, National Association",
        "ADDRESS": "1415  Louisiana, Suite 1900",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "57380",
        "RSSD": "2597223"
    },
    {
        "CHARTER_NO": "4265",
        "NAME": "Legend Bank, National Association",
        "ADDRESS": "101 Tarrant Street",
        "CITY": "Bowie",
        "STATE": "TX",
        "CERT": "3108",
        "RSSD": "100357"
    },
    {
        "CHARTER_NO": "25228",
        "NAME": "LendingClub Bank, National Association",
        "ADDRESS": "2701 N Thanksgiving Way",
        "CITY": "Lehi",
        "STATE": "UT",
        "CERT": "32551",
        "RSSD": "264772"
    },
    {
        "CHARTER_NO": "23925",
        "NAME": "Liberty Bank, National Association",
        "ADDRESS": "2 Park Plaza, Suite 550",
        "CITY": "Irvine",
        "STATE": "CA",
        "CERT": "35331",
        "RSSD": "2907439"
    },
    {
        "CHARTER_NO": "24378",
        "NAME": "Liberty National Bank",
        "ADDRESS": "4425 Singing Hills Boulevard",
        "CITY": "Sioux City",
        "STATE": "IA",
        "CERT": "57505",
        "RSSD": "3140822"
    },
    {
        "CHARTER_NO": "23516",
        "NAME": "Liberty National Bank",
        "ADDRESS": "629 S. W. C Avenue",
        "CITY": "Lawton",
        "STATE": "OK",
        "CERT": "11522",
        "RSSD": "68756"
    },
    {
        "CHARTER_NO": "25197",
        "NAME": "Libertyville Bank & Trust Company, National Association",
        "ADDRESS": "507 North Milwaukee Avenue",
        "CITY": "Libertyville",
        "STATE": "IL",
        "CERT": "34073",
        "RSSD": "2339795"
    },
    {
        "CHARTER_NO": "17606",
        "NAME": "Llano National Bank",
        "ADDRESS": "1001 Ford Street",
        "CITY": "Llano",
        "STATE": "TX",
        "CERT": "24305",
        "RSSD": "946555"
    },
    {
        "CHARTER_NO": "23730",
        "NAME": "Lone Star Capital Bank, National Association",
        "ADDRESS": "150 N Loop 1604 E",
        "CITY": "San Antonio",
        "STATE": "TX",
        "CERT": "35015",
        "RSSD": "2788656"
    },
    {
        "CHARTER_NO": "17611",
        "NAME": "LONE STAR NATIONAL BANK",
        "ADDRESS": "206 West Ferguson",
        "CITY": "Pharr",
        "STATE": "TX",
        "CERT": "24347",
        "RSSD": "842460"
    },
    {
        "CHARTER_NO": "14328",
        "NAME": "Louisiana National Bank",
        "ADDRESS": "2001 North Trenton Street",
        "CITY": "Ruston",
        "STATE": "LA",
        "CERT": "15059",
        "RSSD": "109659"
    },
    {
        "CHARTER_NO": "14492",
        "NAME": "Mason City National Bank",
        "ADDRESS": "104 West Pine Street",
        "CITY": "Mason City",
        "STATE": "IL",
        "CERT": "16198",
        "RSSD": "108746"
    },
    {
        "CHARTER_NO": "17269",
        "NAME": "Mccurtain County National Bank",
        "ADDRESS": "20 North Park Drive",
        "CITY": "Broken Bow",
        "STATE": "OK",
        "CERT": "23798",
        "RSSD": "423159"
    },
    {
        "CHARTER_NO": "14488",
        "NAME": "Merchants Bank, National Association",
        "ADDRESS": "102 East Third Street",
        "CITY": "Winona",
        "STATE": "MN",
        "CERT": "8866",
        "RSSD": "779351"
    },
    {
        "CHARTER_NO": "13838",
        "NAME": "Midamerica National Bank",
        "ADDRESS": "100 West Elm Street",
        "CITY": "Canton",
        "STATE": "IL",
        "CERT": "3612",
        "RSSD": "510938"
    },
    {
        "CHARTER_NO": "25227",
        "NAME": "Mid-Central National Bank",
        "ADDRESS": "520 Jefferson St S",
        "CITY": "Wadena",
        "STATE": "MN",
        "CERT": "30943",
        "RSSD": "773171"
    },
    {
        "CHARTER_NO": "10354",
        "NAME": "Midstates Bank, National Association",
        "ADDRESS": "1851 Madison Avenue, Suite 732",
        "CITY": "Council Bluffs",
        "STATE": "IA",
        "CERT": "4465",
        "RSSD": "728948"
    },
    {
        "CHARTER_NO": "9786",
        "NAME": "Midwest National Bank",
        "ADDRESS": "302 N. Main Street",
        "CITY": "Sandoval",
        "STATE": "IL",
        "CERT": "3834",
        "RSSD": "122546"
    },
    {
        "CHARTER_NO": "13835",
        "NAME": "Millbury National Bank",
        "ADDRESS": "18 Main Street",
        "CITY": "Millbury",
        "STATE": "MA",
        "CERT": "2616",
        "RSSD": "881900"
    },
    {
        "CHARTER_NO": "6417",
        "NAME": "Minnesota National Bank",
        "ADDRESS": "131 12th Street South",
        "CITY": "Sauk Centre",
        "STATE": "MN",
        "CERT": "5249",
        "RSSD": "799751"
    },
    {
        "CHARTER_NO": "13972",
        "NAME": "Minnstar Bank National Association",
        "ADDRESS": "202 North Main",
        "CITY": "Lake Crystal",
        "STATE": "MN",
        "CERT": "13809",
        "RSSD": "89854"
    },
    {
        "CHARTER_NO": "17176",
        "NAME": "Mission National Bank",
        "ADDRESS": "3060 16th Street",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "23749",
        "RSSD": "519360"
    },
    {
        "CHARTER_NO": "16629",
        "NAME": "Modern Bank, National Association",
        "ADDRESS": "410 Park Avenue, Suite 830",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "22398",
        "RSSD": "2398701"
    },
    {
        "CHARTER_NO": "8899",
        "NAME": "Moody National Bank",
        "ADDRESS": "2302 Post Office Street",
        "CITY": "Galveston",
        "STATE": "TX",
        "CERT": "3210",
        "RSSD": "253356"
    },
    {
        "CHARTER_NO": "24908",
        "NAME": "Morgan Stanley Bank, N.A.",
        "ADDRESS": "201 South Main Street, 5th Floor",
        "CITY": "Salt Lake City",
        "STATE": "UT",
        "CERT": "32992",
        "RSSD": "1456501"
    },
    {
        "CHARTER_NO": "24981",
        "NAME": "Morgan Stanley Private Bank, National Association",
        "ADDRESS": "2000 Westchester Avenue",
        "CITY": "Purchase",
        "STATE": "NY",
        "CERT": "34221",
        "RSSD": "2489805"
    },
    {
        "CHARTER_NO": "9610",
        "NAME": "Mountain Valley Bank, National Association",
        "ADDRESS": "317 Davis Avenue",
        "CITY": "Elkins",
        "STATE": "WV",
        "CERT": "6786",
        "RSSD": "1011432"
    },
    {
        "CHARTER_NO": "23523",
        "NAME": "Natbank, National Association",
        "ADDRESS": "4031 Oakwood Boulevard",
        "CITY": "Hollywood",
        "STATE": "FL",
        "CERT": "33959",
        "RSSD": "2233875"
    },
    {
        "CHARTER_NO": "25145",
        "NAME": "National Advisors Trust Company",
        "ADDRESS": "800 East 101st Terrace, Suite 300",
        "CITY": "Kansas City",
        "STATE": "MO",
        "CERT": "57160",
        "RSSD": "2809373"
    },
    {
        "CHARTER_NO": "3906",
        "NAME": "National Bank & Trust",
        "ADDRESS": "145 West Colorado Street",
        "CITY": "La Grange",
        "STATE": "TX",
        "CERT": "3289",
        "RSSD": "792659"
    },
    {
        "CHARTER_NO": "14109",
        "NAME": "National Bank of Commerce",
        "ADDRESS": "1127 Tower Avenue",
        "CITY": "Superior",
        "STATE": "WI",
        "CERT": "14266",
        "RSSD": "775456"
    },
    {
        "CHARTER_NO": "14617",
        "NAME": "National Bank of St. Anne",
        "ADDRESS": "158 W. Station Street",
        "CITY": "St. Anne",
        "STATE": "IL",
        "CERT": "16752",
        "RSSD": "760340"
    },
    {
        "CHARTER_NO": "25093",
        "NAME": "National Cooperative Bank, N.A.",
        "ADDRESS": "139 S High St",
        "CITY": "Hillsboro",
        "STATE": "OH",
        "CERT": "32612",
        "RSSD": "99376"
    },
    {
        "CHARTER_NO": "13879",
        "NAME": "National Exchange Bank and Trust",
        "ADDRESS": "130 South Main",
        "CITY": "Fond Du Lac",
        "STATE": "WI",
        "CERT": "10044",
        "RSSD": "722544"
    },
    {
        "CHARTER_NO": "21158",
        "NAME": "Native American Bank, National Association",
        "ADDRESS": "201 North Broadway",
        "CITY": "Denver",
        "STATE": "CO",
        "CERT": "27026",
        "RSSD": "664653"
    },
    {
        "CHARTER_NO": "1354",
        "NAME": "NBT Bank, National Association",
        "ADDRESS": "52 South Broad Street",
        "CITY": "Norwich",
        "STATE": "NY",
        "CERT": "7230",
        "RSSD": "702117"
    },
    {
        "CHARTER_NO": "22770",
        "NAME": "Neighborhood National Bank",
        "ADDRESS": "2987 Jamacha Road, Suite 2B",
        "CITY": "EL CAJON",
        "STATE": "CA",
        "CERT": "34548",
        "RSSD": "2333140"
    },
    {
        "CHARTER_NO": "15161",
        "NAME": "Neighborhood National Bank",
        "ADDRESS": "45 North Union Street",
        "CITY": "Mora",
        "STATE": "MN",
        "CERT": "18885",
        "RSSD": "705556"
    },
    {
        "CHARTER_NO": "24961",
        "NAME": "Neuberger Berman Trust Company National Association",
        "ADDRESS": "1290 Avenue of the Americas, 23rd floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "59046",
        "RSSD": "4149037"
    },
    {
        "CHARTER_NO": "24966",
        "NAME": "Neuberger Berman Trust Company of Delaware NA",
        "ADDRESS": "919 N. Market Street, Suite 506",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "59047",
        "RSSD": "4146830"
    },
    {
        "CHARTER_NO": "23421",
        "NAME": "New Covenant Trust Company, National Association",
        "ADDRESS": "200 East 12th Street",
        "CITY": "Jeffersonville",
        "STATE": "IN",
        "CERT": "34732",
        "RSSD": "2641827"
    },
    {
        "CHARTER_NO": "24858",
        "NAME": "New Horizon Bank, National Association",
        "ADDRESS": "1870 Stoneridge Commerce Drive",
        "CITY": "Powhatan",
        "STATE": "VA",
        "CERT": "58857",
        "RSSD": "3816154"
    },
    {
        "CHARTER_NO": "16840",
        "NAME": "New Omni Bank, National Association",
        "ADDRESS": "1235 South Garfield Avenue",
        "CITY": "Alhambra",
        "STATE": "CA",
        "CERT": "23086",
        "RSSD": "300063"
    },
    {
        "CHARTER_NO": "14240",
        "NAME": "Newfield National Bank",
        "ADDRESS": "18-24 West Boulevard",
        "CITY": "Newfield",
        "STATE": "NJ",
        "CERT": "14646",
        "RSSD": "632410"
    },
    {
        "CHARTER_NO": "6112",
        "NAME": "Newfirst National Bank",
        "ADDRESS": "202 East Jackson",
        "CITY": "El Campo",
        "STATE": "TX",
        "CERT": "3183",
        "RSSD": "938859"
    },
    {
        "CHARTER_NO": "15070",
        "NAME": "Newtek Bank, National Association",
        "ADDRESS": "1111 Brickell Avenue, Suite 135",
        "CITY": "Miami",
        "STATE": "FL",
        "CERT": "18734",
        "RSSD": "502111"
    },
    {
        "CHARTER_NO": "5073",
        "NAME": "NexTier Bank, National Association",
        "ADDRESS": "222 Market Street",
        "CITY": "Kittanning",
        "STATE": "PA",
        "CERT": "7900",
        "RSSD": "18827"
    },
    {
        "CHARTER_NO": "24107",
        "NAME": "Nicolet National Bank",
        "ADDRESS": "111 North Washington Street",
        "CITY": "Green Bay",
        "STATE": "WI",
        "CERT": "57038",
        "RSSD": "2941068"
    },
    {
        "CHARTER_NO": "23547",
        "NAME": "North Georgia National Bank",
        "ADDRESS": "350 West Belmont Drive",
        "CITY": "Calhoun",
        "STATE": "GA",
        "CERT": "34662",
        "RSSD": "2769954"
    },
    {
        "CHARTER_NO": "25199",
        "NAME": "Northbrook Bank & Trust Company, National Association",
        "ADDRESS": "1100 Waukegan Road",
        "CITY": "Northbrook",
        "STATE": "IL",
        "CERT": "57082",
        "RSSD": "2938198"
    },
    {
        "CHARTER_NO": "6863",
        "NAME": "Northern Interstate Bank, National Association",
        "ADDRESS": "501 W. US 2",
        "CITY": "Norway",
        "STATE": "MI",
        "CERT": "13784",
        "RSSD": "289056"
    },
    {
        "CHARTER_NO": "24372",
        "NAME": "Northwestern Bank, National Association",
        "ADDRESS": "4 North Main Street",
        "CITY": "Dilworth",
        "STATE": "MN",
        "CERT": "9746",
        "RSSD": "207555"
    },
    {
        "CHARTER_NO": "24849",
        "NAME": "Oak View National Bank",
        "ADDRESS": "128 Broadview Avenue",
        "CITY": "Warrenton",
        "STATE": "VA",
        "CERT": "58827",
        "RSSD": "3816190"
    },
    {
        "CHARTER_NO": "25150",
        "NAME": "OceanFirst Bank, National Association",
        "ADDRESS": "975 Hooper Avenue",
        "CITY": "Toms River",
        "STATE": "NJ",
        "CERT": "28359",
        "RSSD": "85472"
    },
    {
        "CHARTER_NO": "24730",
        "NAME": "Old Dominion National Bank",
        "ADDRESS": "4916 Plank Road, Suite 216",
        "CITY": "North Garden",
        "STATE": "VA",
        "CERT": "58504",
        "RSSD": "3610718"
    },
    {
        "CHARTER_NO": "8846",
        "NAME": "Old National Bank",
        "ADDRESS": "1 Main Street",
        "CITY": "Evansville",
        "STATE": "IN",
        "CERT": "3832",
        "RSSD": "208244"
    },
    {
        "CHARTER_NO": "24646",
        "NAME": "Old Plank Trail Community Bank, National Association",
        "ADDRESS": "20012 Wolf Road",
        "CITY": "Mokena",
        "STATE": "IL",
        "CERT": "58314",
        "RSSD": "3404207"
    },
    {
        "CHARTER_NO": "23702",
        "NAME": "Old Point Trust & Financial Services, National Association",
        "ADDRESS": "11780 Jefferson Avenue, Suite D",
        "CITY": "Newport News",
        "STATE": "VA",
        "CERT": "35248",
        "RSSD": "2797210"
    },
    {
        "CHARTER_NO": "4596",
        "NAME": "Old Second National Bank",
        "ADDRESS": "37-39 South River Street",
        "CITY": "Aurora",
        "STATE": "IL",
        "CERT": "3603",
        "RSSD": "936136"
    },
    {
        "CHARTER_NO": "20010",
        "NAME": "Pacific National Bank",
        "ADDRESS": "1390 Brickell Avenue",
        "CITY": "Miami",
        "STATE": "FL",
        "CERT": "26299",
        "RSSD": "577137"
    },
    {
        "CHARTER_NO": "25291",
        "NAME": "Park Bank, National Association",
        "ADDRESS": "1200 S. Main Street",
        "CITY": "Holmen",
        "STATE": "WI",
        "CERT": "13054",
        "RSSD": "518354"
    },
    {
        "CHARTER_NO": "25195",
        "NAME": "Pathward, National Association",
        "ADDRESS": "5501 South Broadband Lane",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "30776",
        "RSSD": "435077"
    },
    {
        "CHARTER_NO": "22545",
        "NAME": "Patriot Bank, National Association",
        "ADDRESS": "999 Bedford Street",
        "CITY": "Stamford",
        "STATE": "CT",
        "CERT": "33928",
        "RSSD": "2236821"
    },
    {
        "CHARTER_NO": "11001",
        "NAME": "Patrons Bank, National Association",
        "ADDRESS": "610 East 8th",
        "CITY": "Okmulgee",
        "STATE": "OK",
        "CERT": "4170",
        "RSSD": "634955"
    },
    {
        "CHARTER_NO": "25289",
        "NAME": "Paycom National Trust Bank",
        "ADDRESS": "7501 West Memorial Road",
        "CITY": "Oklahoma City",
        "STATE": "OK",
        "CERT": "59363",
        "RSSD": "5972661"
    },
    {
        "CHARTER_NO": "14418",
        "NAME": "Peoples National Bank of Kewanee",
        "ADDRESS": "207 North Tremont Street",
        "CITY": "Kewanee",
        "STATE": "IL",
        "CERT": "926",
        "RSSD": "823133"
    },
    {
        "CHARTER_NO": "9408",
        "NAME": "Peoples National Bank, N.A.",
        "ADDRESS": "108 South Washington",
        "CITY": "Mcleansboro",
        "STATE": "IL",
        "CERT": "3809",
        "RSSD": "375043"
    },
    {
        "CHARTER_NO": "20493",
        "NAME": "Pike National Bank",
        "ADDRESS": "350 Rawls Drive",
        "CITY": "Mccomb",
        "STATE": "MS",
        "CERT": "26379",
        "RSSD": "880332"
    },
    {
        "CHARTER_NO": "15058",
        "NAME": "Pikes Peak National Bank",
        "ADDRESS": "2401 West Colorado Avenue",
        "CITY": "Colorado Springs",
        "STATE": "CO",
        "CERT": "17782",
        "RSSD": "643658"
    },
    {
        "CHARTER_NO": "25324",
        "NAME": "Pioneer Bank, National Association",
        "ADDRESS": "652 Albany Shaker Road",
        "CITY": "Albany",
        "STATE": "NY",
        "CERT": "20741",
        "RSSD": "237619"
    },
    {
        "CHARTER_NO": "21060",
        "NAME": "Pioneer Trust Bank, National Association",
        "ADDRESS": "109 Commercial Street, NE",
        "CITY": "Salem",
        "STATE": "OR",
        "CERT": "19827",
        "RSSD": "852973"
    },
    {
        "CHARTER_NO": "25258",
        "NAME": "Plante Moran Trust, National Association",
        "ADDRESS": "3000 Town Center",
        "CITY": "Southfield",
        "STATE": "MI",
        "CERT": "57418",
        "RSSD": "5591633"
    },
    {
        "CHARTER_NO": "1316",
        "NAME": "PNC Bank, National Association",
        "ADDRESS": "222 Delaware Avenue",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "6384",
        "RSSD": "817824"
    },
    {
        "CHARTER_NO": "9924",
        "NAME": "Powell Valley National Bank",
        "ADDRESS": "33785 Main Street",
        "CITY": "Jonesville",
        "STATE": "VA",
        "CERT": "6863",
        "RSSD": "31826"
    },
    {
        "CHARTER_NO": "25308",
        "NAME": "Premier Bank National Association",
        "ADDRESS": "16802 Burke Street",
        "CITY": "Omaha",
        "STATE": "NE",
        "CERT": "12493",
        "RSSD": "860259"
    },
    {
        "CHARTER_NO": "17735",
        "NAME": "Progressive National Bank",
        "ADDRESS": "300 Washington Street",
        "CITY": "Mansfield",
        "STATE": "LA",
        "CERT": "24443",
        "RSSD": "675855"
    },
    {
        "CHARTER_NO": "6207",
        "NAME": "Queensborough National Bank & Trust Company",
        "ADDRESS": "113 East Broad Street",
        "CITY": "Louisville",
        "STATE": "GA",
        "CERT": "2138",
        "RSSD": "960935"
    },
    {
        "CHARTER_NO": "24771",
        "NAME": "Raymond James Trust, National Association",
        "ADDRESS": "880 Carillon Parkway",
        "CITY": "St. Petersburg",
        "STATE": "FL",
        "CERT": "33879",
        "RSSD": "2163477"
    },
    {
        "CHARTER_NO": "23416",
        "NAME": "RBC Bank (Georgia), National Association",
        "ADDRESS": "3550 Lenox Road NE",
        "CITY": "Atlanta",
        "STATE": "GA",
        "CERT": "26342",
        "RSSD": "3783948"
    },
    {
        "CHARTER_NO": "5815",
        "NAME": "Resource Bank, National Association",
        "ADDRESS": "555 Bethany Road",
        "CITY": "Dekalb",
        "STATE": "IL",
        "CERT": "3701",
        "RSSD": "235530"
    },
    {
        "CHARTER_NO": "24920",
        "NAME": "Rockefeller Trust Company, National Association",
        "ADDRESS": "45 Rockefeller Plaza, Fifth Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "26622",
        "RSSD": "62110"
    },
    {
        "CHARTER_NO": "25216",
        "NAME": "RockPointBank, National Association",
        "ADDRESS": "401 Chestnut Street, Suite 101",
        "CITY": "Chattanooga",
        "STATE": "TN",
        "CERT": "59206",
        "RSSD": "5574430"
    },
    {
        "CHARTER_NO": "20948",
        "NAME": "Safra National Bank of New York",
        "ADDRESS": "546 Fifth Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "26876",
        "RSSD": "918918"
    },
    {
        "CHARTER_NO": "25022",
        "NAME": "Santander Bank, National Association",
        "ADDRESS": "824 N. Market Street, Suite 100",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "29950",
        "RSSD": "722777"
    },
    {
        "CHARTER_NO": "21530",
        "NAME": "Saratoga National Bank and Trust Company",
        "ADDRESS": "171 South Broadway",
        "CITY": "Saratoga Springs",
        "STATE": "NY",
        "CERT": "27290",
        "RSSD": "1211371"
    },
    {
        "CHARTER_NO": "12810",
        "NAME": "Savannah Bank National Association",
        "ADDRESS": "1565 Main Street, P.O. Box 278",
        "CITY": "Savannah",
        "STATE": "NY",
        "CERT": "14619",
        "RSSD": "647414"
    },
    {
        "CHARTER_NO": "24150",
        "NAME": "Schaumburg Bank & Trust Company, National Association",
        "ADDRESS": "1180 East Higgins Road",
        "CITY": "Schaumburg",
        "STATE": "IL",
        "CERT": "57103",
        "RSSD": "2970657"
    },
    {
        "CHARTER_NO": "14838",
        "NAME": "Seacoast National Bank",
        "ADDRESS": "815 Colorado Avenue",
        "CITY": "Stuart",
        "STATE": "FL",
        "CERT": "131",
        "RSSD": "34537"
    },
    {
        "CHARTER_NO": "14578",
        "NAME": "Security First National Bank of Hugo",
        "ADDRESS": "100 S. Broadway",
        "CITY": "Hugo",
        "STATE": "OK",
        "CERT": "432",
        "RSSD": "422657"
    },
    {
        "CHARTER_NO": "15379",
        "NAME": "Security National Bank of Omaha",
        "ADDRESS": "1120 S. 101st Street",
        "CITY": "Omaha",
        "STATE": "NE",
        "CERT": "19213",
        "RSSD": "844053"
    },
    {
        "CHARTER_NO": "23226",
        "NAME": "Security National Bank of South Dakota",
        "ADDRESS": "325 Dakota Dunes Blvd",
        "CITY": "Dakota Dunes",
        "STATE": "SD",
        "CERT": "34394",
        "RSSD": "2529176"
    },
    {
        "CHARTER_NO": "24010",
        "NAME": "Security National Trust Co.",
        "ADDRESS": "1300 Chapline Street",
        "CITY": "Wheeling",
        "STATE": "WV",
        "CERT": "57081",
        "RSSD": "2912750"
    },
    {
        "CHARTER_NO": "12529",
        "NAME": "Shamrock Bank, National Association",
        "ADDRESS": "101 N. Main",
        "CITY": "Coalgate",
        "STATE": "OK",
        "CERT": "4236",
        "RSSD": "300353"
    },
    {
        "CHARTER_NO": "25270",
        "NAME": "Shore United Bank, National Association",
        "ADDRESS": "18 East Dover Street",
        "CITY": "Easton",
        "STATE": "MD",
        "CERT": "4832",
        "RSSD": "933023"
    },
    {
        "CHARTER_NO": "24264",
        "NAME": "Signature Bank, National Association",
        "ADDRESS": "4607 West Sylvania Avenue",
        "CITY": "Toledo",
        "STATE": "OH",
        "CERT": "57269",
        "RSSD": "3076604"
    },
    {
        "CHARTER_NO": "10834",
        "NAME": "Skyline National Bank",
        "ADDRESS": "113 West Main Street",
        "CITY": "Independence",
        "STATE": "VA",
        "CERT": "6861",
        "RSSD": "90328"
    },
    {
        "CHARTER_NO": "9987",
        "NAME": "SNB Bank, National Association",
        "ADDRESS": "503 South Main",
        "CITY": "Shattuck",
        "STATE": "OK",
        "CERT": "4196",
        "RSSD": "394156"
    },
    {
        "CHARTER_NO": "20862",
        "NAME": "SoFi Bank, National Association",
        "ADDRESS": "2750 East Cottonwood Parkway",
        "CITY": "Cottonwood Heig",
        "STATE": "UT",
        "CERT": "26881",
        "RSSD": "962966"
    },
    {
        "CHARTER_NO": "24737",
        "NAME": "Solera National Bank",
        "ADDRESS": "319 S. Sheridan Blvd.",
        "CITY": "Lakewood",
        "STATE": "CO",
        "CERT": "58534",
        "RSSD": "3397233"
    },
    {
        "CHARTER_NO": "15651",
        "NAME": "Southeast First National Bank",
        "ADDRESS": "10144 Commerce Street",
        "CITY": "Summerville",
        "STATE": "GA",
        "CERT": "19819",
        "RSSD": "563934"
    },
    {
        "CHARTER_NO": "22311",
        "NAME": "SouthState Bank, National Association",
        "ADDRESS": "1101 First Street South",
        "CITY": "Winter Haven",
        "STATE": "FL",
        "CERT": "33555",
        "RSSD": "1929247"
    },
    {
        "CHARTER_NO": "14012",
        "NAME": "Southtrust Bank, National Association",
        "ADDRESS": "601 Guadalupe",
        "CITY": "George West",
        "STATE": "TX",
        "CERT": "13919",
        "RSSD": "521158"
    },
    {
        "CHARTER_NO": "12346",
        "NAME": "Southwest National Bank",
        "ADDRESS": "400 East Douglas",
        "CITY": "Wichita",
        "STATE": "KS",
        "CERT": "4801",
        "RSSD": "499855"
    },
    {
        "CHARTER_NO": "23081",
        "NAME": "Southwestern National Bank",
        "ADDRESS": "6901 Corporate Drive",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "34319",
        "RSSD": "2625724"
    },
    {
        "CHARTER_NO": "25211",
        "NAME": "St. Charles Bank & Trust Company, National Association",
        "ADDRESS": "411 West Main Street",
        "CITY": "Saint Charles",
        "STATE": "IL",
        "CERT": "27052",
        "RSSD": "428547"
    },
    {
        "CHARTER_NO": "15198",
        "NAME": "St. Martin National Bank",
        "ADDRESS": "136 Maine Street",
        "CITY": "St. Martin",
        "STATE": "MN",
        "CERT": "18937",
        "RSSD": "856159"
    },
    {
        "CHARTER_NO": "25200",
        "NAME": "State Bank of the Lakes, National Association",
        "ADDRESS": "440 Lake Street",
        "CITY": "Antioch",
        "STATE": "IL",
        "CERT": "5744",
        "RSSD": "595430"
    },
    {
        "CHARTER_NO": "18045",
        "NAME": "State Street Bank and Trust Company National Association",
        "ADDRESS": "1290 Avenue of the Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "24938",
        "RSSD": "93619"
    },
    {
        "CHARTER_NO": "18607",
        "NAME": "State Street Bank and Trust Company of California, NA",
        "ADDRESS": "42 Discovery",
        "CITY": "Irvine",
        "STATE": "CA",
        "CERT": "26474",
        "RSSD": "812164"
    },
    {
        "CHARTER_NO": "15576",
        "NAME": "Stearns Bank National Association",
        "ADDRESS": "4191 Second Street South",
        "CITY": "St. Cloud",
        "STATE": "MN",
        "CERT": "10988",
        "RSSD": "141556"
    },
    {
        "CHARTER_NO": "23458",
        "NAME": "Stearns Bank Upsala National Association",
        "ADDRESS": "Main Street",
        "CITY": "Upsala",
        "STATE": "MN",
        "CERT": "9336",
        "RSSD": "208459"
    },
    {
        "CHARTER_NO": "24955",
        "NAME": "Stifel Trust Company Delaware, National Association",
        "ADDRESS": "Two Greenville Crossing, 4001 Kennett Pike, Suite 220",
        "CITY": "Greenville",
        "STATE": "DE",
        "CERT": "59043",
        "RSSD": "4125778"
    },
    {
        "CHARTER_NO": "24627",
        "NAME": "Stifel Trust Company, National Association",
        "ADDRESS": "501 N. Broadway",
        "CITY": "St Louis",
        "STATE": "MO",
        "CERT": "33785",
        "RSSD": "2713920"
    },
    {
        "CHARTER_NO": "14369",
        "NAME": "Stillman Banccorp National Association",
        "ADDRESS": "101 East Main Street",
        "CITY": "Stillman Valley",
        "STATE": "IL",
        "CERT": "9263",
        "RSSD": "407645"
    },
    {
        "CHARTER_NO": "14302",
        "NAME": "Stockmens National Bank in Cotulla",
        "ADDRESS": "206 N. Main Street",
        "CITY": "Cotulla",
        "STATE": "TX",
        "CERT": "14864",
        "RSSD": "818652"
    },
    {
        "CHARTER_NO": "12044",
        "NAME": "Stride Bank, National Association",
        "ADDRESS": "324 West Broadway",
        "CITY": "Enid",
        "STATE": "OK",
        "CERT": "4091",
        "RSSD": "278555"
    },
    {
        "CHARTER_NO": "18154",
        "NAME": "Summit National Bank",
        "ADDRESS": "133 Main Street",
        "CITY": "Hulett",
        "STATE": "WY",
        "CERT": "25054",
        "RSSD": "78559"
    },
    {
        "CHARTER_NO": "4742",
        "NAME": "Sunflower Bank, National Association",
        "ADDRESS": "8117 Preston Road",
        "CITY": "Dallas",
        "STATE": "TX",
        "CERT": "4767",
        "RSSD": "474759"
    },
    {
        "CHARTER_NO": "14991",
        "NAME": "Sunrise Banks, National Association",
        "ADDRESS": "5105 S. Crossing Place",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "18561",
        "RSSD": "860053"
    },
    {
        "CHARTER_NO": "9087",
        "NAME": "Superior National Bank",
        "ADDRESS": "235 Quincy Street",
        "CITY": "Hancock",
        "STATE": "MI",
        "CERT": "5058",
        "RSSD": "245557"
    },
    {
        "CHARTER_NO": "24350",
        "NAME": "Synovus Trust Company, National Association",
        "ADDRESS": "1148 Broadway",
        "CITY": "Columbus",
        "STATE": "GA",
        "CERT": "33962",
        "RSSD": "2262718"
    },
    {
        "CHARTER_NO": "24467",
        "NAME": "T Bank, National Association",
        "ADDRESS": "16200 Dallas Parkway, Suite 190",
        "CITY": "Dallas",
        "STATE": "TX",
        "CERT": "57703",
        "RSSD": "3284445"
    },
    {
        "CHARTER_NO": "23363",
        "NAME": "TCM Bank, National Association",
        "ADDRESS": "3501 E. Frontage Road",
        "CITY": "Tampa",
        "STATE": "FL",
        "CERT": "34535",
        "RSSD": "2687487"
    },
    {
        "CHARTER_NO": "22611",
        "NAME": "TD Bank USA, National Association",
        "ADDRESS": "2035 Limestone Road",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "33947",
        "RSSD": "2121196"
    },
    {
        "CHARTER_NO": "24096",
        "NAME": "TD Bank, National Association",
        "ADDRESS": "2035 Limestone Road",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "18409",
        "RSSD": "497404"
    },
    {
        "CHARTER_NO": "20157",
        "NAME": "Terrabank National Association",
        "ADDRESS": "3191 Coral Way",
        "CITY": "Miami",
        "STATE": "FL",
        "CERT": "26442",
        "RSSD": "238737"
    },
    {
        "CHARTER_NO": "10476",
        "NAME": "Texana Bank, National Association",
        "ADDRESS": "124 East Rush",
        "CITY": "Linden",
        "STATE": "TX",
        "CERT": "3302",
        "RSSD": "809650"
    },
    {
        "CHARTER_NO": "24693",
        "NAME": "Texas Advantage Community Bank, National Association",
        "ADDRESS": "1701 Fairway Plaza, Suite 18",
        "CITY": "Alvin",
        "STATE": "TX",
        "CERT": "58450",
        "RSSD": "3485215"
    },
    {
        "CHARTER_NO": "10420",
        "NAME": "Texas Gulf Bank, National Association",
        "ADDRESS": "1626 South Voss Road",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "3206",
        "RSSD": "514655"
    },
    {
        "CHARTER_NO": "4701",
        "NAME": "Texas Heritage National Bank",
        "ADDRESS": "107 Webb",
        "CITY": "Daingerfield",
        "STATE": "TX",
        "CERT": "3161",
        "RSSD": "824653"
    },
    {
        "CHARTER_NO": "11879",
        "NAME": "Texas National Bank",
        "ADDRESS": "201 S. Texas",
        "CITY": "Mercedes",
        "STATE": "TX",
        "CERT": "3337",
        "RSSD": "497954"
    },
    {
        "CHARTER_NO": "22807",
        "NAME": "Texas National Bank",
        "ADDRESS": "400 East Broadway",
        "CITY": "Sweetwater",
        "STATE": "TX",
        "CERT": "34014",
        "RSSD": "1435092"
    },
    {
        "CHARTER_NO": "18594",
        "NAME": "Texas National Bank of Jacksonville",
        "ADDRESS": "300 Neches Street",
        "CITY": "Jacksonville",
        "STATE": "TX",
        "CERT": "26181",
        "RSSD": "739355"
    },
    {
        "CHARTER_NO": "12308",
        "NAME": "Texas Republic Bank, National Association",
        "ADDRESS": "2595 Preston Road, Building 100",
        "CITY": "Frisco",
        "STATE": "TX",
        "CERT": "3400",
        "RSSD": "735067"
    },
    {
        "CHARTER_NO": "16799",
        "NAME": "The American National Bank of Mount Pleasant",
        "ADDRESS": "301 South Madison Avenue",
        "CITY": "Mount Pleasant",
        "STATE": "TX",
        "CERT": "22942",
        "RSSD": "764067"
    },
    {
        "CHARTER_NO": "17043",
        "NAME": "The American National Bank of Texas",
        "ADDRESS": "102 West Moore Avenue",
        "CITY": "Terrell",
        "STATE": "TX",
        "CERT": "23474",
        "RSSD": "599764"
    },
    {
        "CHARTER_NO": "3711",
        "NAME": "The Atlanta National Bank",
        "ADDRESS": "105 Southwest Church Street",
        "CITY": "Atlanta",
        "STATE": "IL",
        "CERT": "3601",
        "RSSD": "672238"
    },
    {
        "CHARTER_NO": "25279",
        "NAME": "The Bancorp Bank, National Association",
        "ADDRESS": "345 N Reid Place",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "35444",
        "RSSD": "2858960"
    },
    {
        "CHARTER_NO": "24526",
        "NAME": "The Bank of New York Mellon Trust Company, NA",
        "ADDRESS": "333 South Hope Street, Suite 2525",
        "CITY": "Los Angeles",
        "STATE": "CA",
        "CERT": "23472",
        "RSSD": "398668"
    },
    {
        "CHARTER_NO": "13770",
        "NAME": "The Bank, National Association",
        "ADDRESS": "2nd and Carl Albert Parkway",
        "CITY": "McAlester",
        "STATE": "OK",
        "CERT": "4146",
        "RSSD": "829050"
    },
    {
        "CHARTER_NO": "9734",
        "NAME": "The Bradford National Bank of Greenville",
        "ADDRESS": "100 East College Avenue",
        "CITY": "Greenville",
        "STATE": "IL",
        "CERT": "3799",
        "RSSD": "720746"
    },
    {
        "CHARTER_NO": "7827",
        "NAME": "The Brady National Bank",
        "ADDRESS": "101 S. Blackburn",
        "CITY": "Brady",
        "STATE": "TX",
        "CERT": "3109",
        "RSSD": "101952"
    },
    {
        "CHARTER_NO": "13678",
        "NAME": "The Brenham National Bank",
        "ADDRESS": "2211 South Day Street",
        "CITY": "Brenham",
        "STATE": "TX",
        "CERT": "3113",
        "RSSD": "227357"
    },
    {
        "CHARTER_NO": "2311",
        "NAME": "The Camden National Bank",
        "ADDRESS": "2 Elm Street",
        "CITY": "Camden",
        "STATE": "ME",
        "CERT": "4255",
        "RSSD": "593007"
    },
    {
        "CHARTER_NO": "3817",
        "NAME": "The Canandaigua National Bank and Trust Company",
        "ADDRESS": "72 South Main Street",
        "CITY": "Canandaigua",
        "STATE": "NY",
        "CERT": "6985",
        "RSSD": "161602"
    },
    {
        "CHARTER_NO": "23690",
        "NAME": "The Chicago Trust Company, National Association",
        "ADDRESS": "727 North Bank Lane",
        "CITY": "Lake Forest",
        "STATE": "IL",
        "CERT": "35063",
        "RSSD": "2719810"
    },
    {
        "CHARTER_NO": "10034",
        "NAME": "The Citizens First National Bank of Storm Lake",
        "ADDRESS": "529 Lake Avenue",
        "CITY": "Storm Lake",
        "STATE": "IA",
        "CERT": "4511",
        "RSSD": "424240"
    },
    {
        "CHARTER_NO": "10789",
        "NAME": "The Citizens National Bank",
        "ADDRESS": "417 Commercial",
        "CITY": "Greenleaf",
        "STATE": "KS",
        "CERT": "4678",
        "RSSD": "991555"
    },
    {
        "CHARTER_NO": "11573",
        "NAME": "The Citizens National Bank of Bluffton",
        "ADDRESS": "102 South Main Street",
        "CITY": "Bluffton",
        "STATE": "OH",
        "CERT": "6531",
        "RSSD": "738013"
    },
    {
        "CHARTER_NO": "10216",
        "NAME": "The Citizens National Bank of Hammond",
        "ADDRESS": "19 Main Street",
        "CITY": "Hammond",
        "STATE": "NY",
        "CERT": "14820",
        "RSSD": "855303"
    },
    {
        "CHARTER_NO": "4900",
        "NAME": "The Citizens National Bank of Hillsboro",
        "ADDRESS": "200 E. Elm Street",
        "CITY": "Hillsboro",
        "STATE": "TX",
        "CERT": "3255",
        "RSSD": "184656"
    },
    {
        "CHARTER_NO": "3988",
        "NAME": "The Citizens National Bank of Lebanon",
        "ADDRESS": "149 W. Main Street",
        "CITY": "Lebanon",
        "STATE": "KY",
        "CERT": "2753",
        "RSSD": "641449"
    },
    {
        "CHARTER_NO": "5259",
        "NAME": "The Citizens National Bank of McConnelsville",
        "ADDRESS": "100 East Main Street",
        "CITY": "McConnelsville",
        "STATE": "OH",
        "CERT": "6638",
        "RSSD": "685023"
    },
    {
        "CHARTER_NO": "7266",
        "NAME": "The Citizens National Bank of Meridian",
        "ADDRESS": "512 22nd Avenue",
        "CITY": "Meridian",
        "STATE": "MS",
        "CERT": "4993",
        "RSSD": "69333"
    },
    {
        "CHARTER_NO": "13692",
        "NAME": "The Citizens National Bank of Park Rapids",
        "ADDRESS": "300 West First Street",
        "CITY": "Park Rapids",
        "STATE": "MN",
        "CERT": "5223",
        "RSSD": "877752"
    },
    {
        "CHARTER_NO": "14255",
        "NAME": "The Citizens National Bank of Quitman",
        "ADDRESS": "100 East Stevens Street",
        "CITY": "Quitman",
        "STATE": "GA",
        "CERT": "14731",
        "RSSD": "774235"
    },
    {
        "CHARTER_NO": "11544",
        "NAME": "The Citizens National Bank of Somerset",
        "ADDRESS": "44 Public Square",
        "CITY": "Somerset",
        "STATE": "KY",
        "CERT": "2725",
        "RSSD": "410917"
    },
    {
        "CHARTER_NO": "13847",
        "NAME": "The Citizens National Bank of Woodsfield",
        "ADDRESS": "143 S. Main Street",
        "CITY": "Woodsfield",
        "STATE": "OH",
        "CERT": "6732",
        "RSSD": "386825"
    },
    {
        "CHARTER_NO": "5753",
        "NAME": "The City National Bank and Trust Company of Lawton, OK",
        "ADDRESS": "500 Montgomery Square",
        "CITY": "Lawton",
        "STATE": "OK",
        "CERT": "4132",
        "RSSD": "294751"
    },
    {
        "CHARTER_NO": "5276",
        "NAME": "The City National Bank of Colorado City",
        "ADDRESS": "228 Elm",
        "CITY": "Colorado City",
        "STATE": "TX",
        "CERT": "3144",
        "RSSD": "799854"
    },
    {
        "CHARTER_NO": "8745",
        "NAME": "The City National Bank of Metropolis",
        "ADDRESS": "423 Ferry Street",
        "CITY": "Metropolis",
        "STATE": "IL",
        "CERT": "3814",
        "RSSD": "298245"
    },
    {
        "CHARTER_NO": "10806",
        "NAME": "The City National Bank of San Saba",
        "ADDRESS": "209 E. Brown",
        "CITY": "San Saba",
        "STATE": "TX",
        "CERT": "5518",
        "RSSD": "714165"
    },
    {
        "CHARTER_NO": "3989",
        "NAME": "The City National Bank of Sulphur Springs",
        "ADDRESS": "201 Connally Street",
        "CITY": "Sulphur Springs",
        "STATE": "TX",
        "CERT": "5544",
        "RSSD": "596062"
    },
    {
        "CHARTER_NO": "5275",
        "NAME": "The City National Bank of Taylor",
        "ADDRESS": "212 North Main Street",
        "CITY": "Taylor",
        "STATE": "TX",
        "CERT": "5548",
        "RSSD": "181963"
    },
    {
        "CHARTER_NO": "994",
        "NAME": "The Clinton National Bank",
        "ADDRESS": "235 Sixth Avenue South",
        "CITY": "Clinton",
        "STATE": "IA",
        "CERT": "4439",
        "RSSD": "773443"
    },
    {
        "CHARTER_NO": "8573",
        "NAME": "The Commercial National Bank of Brady",
        "ADDRESS": "105 East Second Street",
        "CITY": "Brady",
        "STATE": "TX",
        "CERT": "3110",
        "RSSD": "42354"
    },
    {
        "CHARTER_NO": "10536",
        "NAME": "The Conway National Bank",
        "ADDRESS": "1400 Third Avenue",
        "CITY": "Conway",
        "STATE": "SC",
        "CERT": "2102",
        "RSSD": "631422"
    },
    {
        "CHARTER_NO": "1323",
        "NAME": "The Delaware National Bank of Delhi",
        "ADDRESS": "124 Main Street",
        "CITY": "Delhi",
        "STATE": "NY",
        "CERT": "7025",
        "RSSD": "236603"
    },
    {
        "CHARTER_NO": "2515",
        "NAME": "The Ephrata National Bank",
        "ADDRESS": "31 East Main Street",
        "CITY": "Ephrata",
        "STATE": "PA",
        "CERT": "7493",
        "RSSD": "425911"
    },
    {
        "CHARTER_NO": "6609",
        "NAME": "The Fairfield National Bank",
        "ADDRESS": "220 East Main Street",
        "CITY": "Fairfield",
        "STATE": "IL",
        "CERT": "3792",
        "RSSD": "640246"
    },
    {
        "CHARTER_NO": "8606",
        "NAME": "The Falls City National Bank",
        "ADDRESS": "100 S Front Street",
        "CITY": "Falls City",
        "STATE": "TX",
        "CERT": "3193",
        "RSSD": "441050"
    },
    {
        "CHARTER_NO": "9767",
        "NAME": "The Farmers and Merchants National Bank of Fairview",
        "ADDRESS": "312 North Main",
        "CITY": "Fairview",
        "STATE": "OK",
        "CERT": "4097",
        "RSSD": "73152"
    },
    {
        "CHARTER_NO": "8221",
        "NAME": "The Farmers and Merchants National Bank of Nashville",
        "ADDRESS": "120 W. St. Louis",
        "CITY": "Nashville",
        "STATE": "IL",
        "CERT": "3821",
        "RSSD": "513546"
    },
    {
        "CHARTER_NO": "3654",
        "NAME": "The Farmers' National Bank of Canfield",
        "ADDRESS": "20 South Broad Street",
        "CITY": "Canfield",
        "STATE": "OH",
        "CERT": "6540",
        "RSSD": "680813"
    },
    {
        "CHARTER_NO": "2409",
        "NAME": "The Farmers National Bank of Danville",
        "ADDRESS": "304 West Main Street",
        "CITY": "Danville",
        "STATE": "KY",
        "CERT": "2740",
        "RSSD": "785147"
    },
    {
        "CHARTER_NO": "4271",
        "NAME": "The Farmers National Bank of Lebanon",
        "ADDRESS": "136 West Main Street",
        "CITY": "Lebanon",
        "STATE": "KY",
        "CERT": "2754",
        "RSSD": "575348"
    },
    {
        "CHARTER_NO": "8345",
        "NAME": "The Fayette County National Bank of Fayetteville",
        "ADDRESS": "101 N. Court Street",
        "CITY": "Fayetteville",
        "STATE": "WV",
        "CERT": "6762",
        "RSSD": "488420"
    },
    {
        "CHARTER_NO": "2488",
        "NAME": "The First Central National Bank of St. Paris",
        "ADDRESS": "103 South Springfield Street",
        "CITY": "St. Paris",
        "STATE": "OH",
        "CERT": "15214",
        "RSSD": "538222"
    },
    {
        "CHARTER_NO": "18783",
        "NAME": "The First Citizens National Bank of Upper Sandusky",
        "ADDRESS": "100 North Sandusky",
        "CITY": "Upper Sandusky",
        "STATE": "OH",
        "CERT": "14355",
        "RSSD": "230423"
    },
    {
        "CHARTER_NO": "12094",
        "NAME": "The First Farmers National Bank of Waurika",
        "ADDRESS": "319 East D Street",
        "CITY": "Waurika",
        "STATE": "OK",
        "CERT": "4222",
        "RSSD": "353957"
    },
    {
        "CHARTER_NO": "5547",
        "NAME": "The First National Bank and Trust Co.",
        "ADDRESS": "302 Chickasha Avenue",
        "CITY": "Chickasha",
        "STATE": "OK",
        "CERT": "4062",
        "RSSD": "154154"
    },
    {
        "CHARTER_NO": "2725",
        "NAME": "The First National Bank and Trust Company",
        "ADDRESS": "345 East Grand Avenue",
        "CITY": "Beloit",
        "STATE": "WI",
        "CERT": "5285",
        "RSSD": "207845"
    },
    {
        "CHARTER_NO": "7115",
        "NAME": "The First National Bank and Trust Company of Broken Arrow",
        "ADDRESS": "121 South Main Street",
        "CITY": "Broken Arrow",
        "STATE": "OK",
        "CERT": "4050",
        "RSSD": "145554"
    },
    {
        "CHARTER_NO": "5252",
        "NAME": "The First National Bank and Trust Company of Miami",
        "ADDRESS": "2 N. Main Street",
        "CITY": "Miami",
        "STATE": "OK",
        "CERT": "4148",
        "RSSD": "837158"
    },
    {
        "CHARTER_NO": "324",
        "NAME": "The First National Bank and Trust Company of Newtown",
        "ADDRESS": "State and Centre Streets",
        "CITY": "Newtown",
        "STATE": "PA",
        "CERT": "7658",
        "RSSD": "1007417"
    },
    {
        "CHARTER_NO": "14296",
        "NAME": "The First National Bank at St. James",
        "ADDRESS": "202 First Avenue South",
        "CITY": "St. James",
        "STATE": "MN",
        "CERT": "14853",
        "RSSD": "794653"
    },
    {
        "CHARTER_NO": "14244",
        "NAME": "The First National Bank in Amboy",
        "ADDRESS": "220 East Main",
        "CITY": "Amboy",
        "STATE": "IL",
        "CERT": "14674",
        "RSSD": "656032"
    },
    {
        "CHARTER_NO": "13046",
        "NAME": "The First National Bank in Cooper",
        "ADDRESS": "11 West Side Square",
        "CITY": "Cooper",
        "STATE": "TX",
        "CERT": "3149",
        "RSSD": "767152"
    },
    {
        "CHARTER_NO": "14072",
        "NAME": "The First National Bank in Falfurrias",
        "ADDRESS": "200 S. St. Mary Street",
        "CITY": "Falfurrias",
        "STATE": "TX",
        "CERT": "14095",
        "RSSD": "442655"
    },
    {
        "CHARTER_NO": "20838",
        "NAME": "The First National Bank in Marlow",
        "ADDRESS": "301 West Main Street",
        "CITY": "Marlow",
        "STATE": "OK",
        "CERT": "26260",
        "RSSD": "17259"
    },
    {
        "CHARTER_NO": "3393",
        "NAME": "The First National Bank in Sioux Falls",
        "ADDRESS": "100 South Phillips Avenue",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "4016",
        "RSSD": "326858"
    },
    {
        "CHARTER_NO": "13579",
        "NAME": "The First National Bank in Tremont",
        "ADDRESS": "134 South Sampson Street",
        "CITY": "Tremont",
        "STATE": "IL",
        "CERT": "3749",
        "RSSD": "353546"
    },
    {
        "CHARTER_NO": "14222",
        "NAME": "The First National Bank in Trinidad",
        "ADDRESS": "100 East Main Street",
        "CITY": "Trinidad",
        "STATE": "CO",
        "CERT": "14584",
        "RSSD": "474058"
    },
    {
        "CHARTER_NO": "10823",
        "NAME": "The First National Bank of Absecon",
        "ADDRESS": "106 New Jersey Avenue",
        "CITY": "Absecon",
        "STATE": "NJ",
        "CERT": "6442",
        "RSSD": "188917"
    },
    {
        "CHARTER_NO": "8293",
        "NAME": "The First National Bank of Allendale",
        "ADDRESS": "301 East Main Street",
        "CITY": "Allendale",
        "STATE": "IL",
        "CERT": "12365",
        "RSSD": "990642"
    },
    {
        "CHARTER_NO": "6091",
        "NAME": "The First National Bank of Anson",
        "ADDRESS": "1021 12th Street",
        "CITY": "Anson",
        "STATE": "TX",
        "CERT": "3078",
        "RSSD": "366359"
    },
    {
        "CHARTER_NO": "9183",
        "NAME": "The First National Bank of Arenzville",
        "ADDRESS": "110 S Charles Street",
        "CITY": "Arenzville",
        "STATE": "IL",
        "CERT": "3599",
        "RSSD": "593333"
    },
    {
        "CHARTER_NO": "5786",
        "NAME": "The First National Bank of Aspermont",
        "ADDRESS": "136 West 7th Street",
        "CITY": "Aspermont",
        "STATE": "TX",
        "CERT": "3079",
        "RSSD": "138257"
    },
    {
        "CHARTER_NO": "5316",
        "NAME": "The First National Bank of Assumption",
        "ADDRESS": "141 North Chestnut Street",
        "CITY": "Assumption",
        "STATE": "IL",
        "CERT": "3600",
        "RSSD": "604033"
    },
    {
        "CHARTER_NO": "10911",
        "NAME": "The First National Bank of Ava",
        "ADDRESS": "Main Street",
        "CITY": "Ava",
        "STATE": "IL",
        "CERT": "3761",
        "RSSD": "858443"
    },
    {
        "CHARTER_NO": "3533",
        "NAME": "The First National Bank of Ballinger",
        "ADDRESS": "911 Hutchins Avenue",
        "CITY": "Ballinger",
        "STATE": "TX",
        "CERT": "3087",
        "RSSD": "160454"
    },
    {
        "CHARTER_NO": "13202",
        "NAME": "The First National Bank of Bangor",
        "ADDRESS": "1798 Commercial Street",
        "CITY": "Bangor",
        "STATE": "WI",
        "CERT": "5337",
        "RSSD": "627854"
    },
    {
        "CHARTER_NO": "4093",
        "NAME": "The First National Bank of Bastrop",
        "ADDRESS": "489 Highway 71 West",
        "CITY": "Bastrop",
        "STATE": "TX",
        "CERT": "3091",
        "RSSD": "18050"
    },
    {
        "CHARTER_NO": "2302",
        "NAME": "The First National Bank of Bellevue",
        "ADDRESS": "120 North Street",
        "CITY": "Bellevue",
        "STATE": "OH",
        "CERT": "6528",
        "RSSD": "243414"
    },
    {
        "CHARTER_NO": "4241",
        "NAME": "The First National Bank of Bellville",
        "ADDRESS": "100 East Main Street",
        "CITY": "Bellville",
        "STATE": "TX",
        "CERT": "3099",
        "RSSD": "91754"
    },
    {
        "CHARTER_NO": "5582",
        "NAME": "The First National Bank of Bemidji",
        "ADDRESS": "1600 Paul Bunyan Drive, NW",
        "CITY": "Bemidji",
        "STATE": "MN",
        "CERT": "5093",
        "RSSD": "363657"
    },
    {
        "CHARTER_NO": "8588",
        "NAME": "The First National Bank of Blanchester",
        "ADDRESS": "121 East Main Street",
        "CITY": "Blanchester",
        "STATE": "OH",
        "CERT": "6530",
        "RSSD": "735414"
    },
    {
        "CHARTER_NO": "8830",
        "NAME": "The First National Bank of Brooksville",
        "ADDRESS": "Locust Street",
        "CITY": "Brooksville",
        "STATE": "KY",
        "CERT": "2682",
        "RSSD": "798512"
    },
    {
        "CHARTER_NO": "10397",
        "NAME": "The First National Bank of Brownstown",
        "ADDRESS": "108 E. Main Street",
        "CITY": "Brownstown",
        "STATE": "IL",
        "CERT": "3770",
        "RSSD": "207041"
    },
    {
        "CHARTER_NO": "4934",
        "NAME": "The First National Bank of Carmi",
        "ADDRESS": "201 East Main Street",
        "CITY": "Carmi",
        "STATE": "IL",
        "CERT": "3777",
        "RSSD": "209148"
    },
    {
        "CHARTER_NO": "12395",
        "NAME": "The First National Bank of Cokato",
        "ADDRESS": "365 Broadway Avenue South",
        "CITY": "Cokato",
        "STATE": "MN",
        "CERT": "5115",
        "RSSD": "280558"
    },
    {
        "CHARTER_NO": "8322",
        "NAME": "The First National Bank of Coleraine",
        "ADDRESS": "W Highway 169",
        "CITY": "Coleraine",
        "STATE": "MN",
        "CERT": "5117",
        "RSSD": "311658"
    },
    {
        "CHARTER_NO": "13802",
        "NAME": "The First National Bank of Dennison",
        "ADDRESS": "105 Grant Street",
        "CITY": "Dennison",
        "STATE": "OH",
        "CERT": "6574",
        "RSSD": "935719"
    },
    {
        "CHARTER_NO": "9773",
        "NAME": "The First National Bank of Dighton",
        "ADDRESS": "105 E. Long Street",
        "CITY": "Dighton",
        "STATE": "KS",
        "CERT": "4654",
        "RSSD": "636753"
    },
    {
        "CHARTER_NO": "6487",
        "NAME": "The First National Bank of Dryden",
        "ADDRESS": "7 W. Main Street",
        "CITY": "Dryden",
        "STATE": "NY",
        "CERT": "7031",
        "RSSD": "241009"
    },
    {
        "CHARTER_NO": "7534",
        "NAME": "The First National Bank of Eagle Lake",
        "ADDRESS": "100 Commerce Street",
        "CITY": "Eagle Lake",
        "STATE": "TX",
        "CERT": "3179",
        "RSSD": "651952"
    },
    {
        "CHARTER_NO": "8575",
        "NAME": "The First National Bank of Eldorado",
        "ADDRESS": "100 SW Main Street",
        "CITY": "Eldorado",
        "STATE": "TX",
        "CERT": "3184",
        "RSSD": "665258"
    },
    {
        "CHARTER_NO": "6707",
        "NAME": "The First National Bank of Elmer",
        "ADDRESS": "Main Street",
        "CITY": "Elmer",
        "STATE": "NJ",
        "CERT": "6464",
        "RSSD": "609010"
    },
    {
        "CHARTER_NO": "8561",
        "NAME": "The First National Bank of Ely",
        "ADDRESS": "595 Aultman Street",
        "CITY": "Ely",
        "STATE": "NV",
        "CERT": "2273",
        "RSSD": "450669"
    },
    {
        "CHARTER_NO": "12739",
        "NAME": "The First National Bank of Evant",
        "ADDRESS": "115 S. Memory Lane",
        "CITY": "Evant",
        "STATE": "TX",
        "CERT": "3190",
        "RSSD": "379153"
    },
    {
        "CHARTER_NO": "9771",
        "NAME": "The First National Bank of Fairfax",
        "ADDRESS": "16 South East First Street",
        "CITY": "Fairfax",
        "STATE": "MN",
        "CERT": "5142",
        "RSSD": "938354"
    },
    {
        "CHARTER_NO": "11571",
        "NAME": "The First National Bank of Fleming",
        "ADDRESS": "201 N. Logan",
        "CITY": "Fleming",
        "STATE": "CO",
        "CERT": "3018",
        "RSSD": "306056"
    },
    {
        "CHARTER_NO": "12141",
        "NAME": "The First National Bank of Fletcher",
        "ADDRESS": "401 West Cole",
        "CITY": "Fletcher",
        "STATE": "OK",
        "CERT": "4098",
        "RSSD": "185251"
    },
    {
        "CHARTER_NO": "1950",
        "NAME": "The First National Bank of Fort Smith",
        "ADDRESS": "602 Garrison Avenue",
        "CITY": "Fort Smith",
        "STATE": "AR",
        "CERT": "3864",
        "RSSD": "397540"
    },
    {
        "CHARTER_NO": "8624",
        "NAME": "The First National Bank of Frederick",
        "ADDRESS": "314 Main Street",
        "CITY": "Frederick",
        "STATE": "SD",
        "CERT": "3985",
        "RSSD": "288152"
    },
    {
        "CHARTER_NO": "86",
        "NAME": "The First National Bank of Germantown",
        "ADDRESS": "17 N. Main Street",
        "CITY": "Germantown",
        "STATE": "OH",
        "CERT": "6592",
        "RSSD": "505916"
    },
    {
        "CHARTER_NO": "9262",
        "NAME": "The First National Bank of Gilbert",
        "ADDRESS": "2 North Broadway",
        "CITY": "Gilbert",
        "STATE": "MN",
        "CERT": "5150",
        "RSSD": "975452"
    },
    {
        "CHARTER_NO": "8521",
        "NAME": "The First National Bank of Gordon",
        "ADDRESS": "134 N. Main Street",
        "CITY": "Gordon",
        "STATE": "NE",
        "CERT": "5410",
        "RSSD": "3252"
    },
    {
        "CHARTER_NO": "3727",
        "NAME": "The First National Bank of Granbury",
        "ADDRESS": "101 E. Bridge Street",
        "CITY": "Granbury",
        "STATE": "TX",
        "CERT": "3228",
        "RSSD": "329952"
    },
    {
        "CHARTER_NO": "12982",
        "NAME": "The First National Bank of Grayson",
        "ADDRESS": "200 S. Carol Malone Boulevard",
        "CITY": "Grayson",
        "STATE": "KY",
        "CERT": "2695",
        "RSSD": "610913"
    },
    {
        "CHARTER_NO": "1083",
        "NAME": "The First National Bank of Groton",
        "ADDRESS": "161 Main Street",
        "CITY": "Groton",
        "STATE": "NY",
        "CERT": "7085",
        "RSSD": "917500"
    },
    {
        "CHARTER_NO": "7592",
        "NAME": "The First National Bank of Hartford",
        "ADDRESS": "101 South 3rd Avenue",
        "CITY": "Hartford",
        "STATE": "AL",
        "CERT": "2804",
        "RSSD": "112332"
    },
    {
        "CHARTER_NO": "11822",
        "NAME": "The First National Bank of Harveyville",
        "ADDRESS": "197 Main Street",
        "CITY": "Harveyville",
        "STATE": "KS",
        "CERT": "4683",
        "RSSD": "931458"
    },
    {
        "CHARTER_NO": "12995",
        "NAME": "The First National Bank of Hebbronville",
        "ADDRESS": "305 N. Smith Street",
        "CITY": "Hebbronville",
        "STATE": "TX",
        "CERT": "3248",
        "RSSD": "173959"
    },
    {
        "CHARTER_NO": "6906",
        "NAME": "The First National Bank of Henning",
        "ADDRESS": "Highways 78 and 108",
        "CITY": "Ottertail",
        "STATE": "MN",
        "CERT": "5162",
        "RSSD": "23456"
    },
    {
        "CHARTER_NO": "10566",
        "NAME": "The First National Bank of Hooker",
        "ADDRESS": "119 North Broadway Street",
        "CITY": "Hooker",
        "STATE": "OK",
        "CERT": "4123",
        "RSSD": "816256"
    },
    {
        "CHARTER_NO": "12384",
        "NAME": "The First National Bank of Hope",
        "ADDRESS": "112 Main Street",
        "CITY": "Hope",
        "STATE": "KS",
        "CERT": "4690",
        "RSSD": "870856"
    },
    {
        "CHARTER_NO": "6922",
        "NAME": "The First National Bank of Hughes Springs",
        "ADDRESS": "505 E. First",
        "CITY": "Hughes Springs",
        "STATE": "TX",
        "CERT": "3268",
        "RSSD": "849357"
    },
    {
        "CHARTER_NO": "8489",
        "NAME": "The First National Bank of Hugo",
        "ADDRESS": "321 4th Street",
        "CITY": "Hugo",
        "STATE": "CO",
        "CERT": "3029",
        "RSSD": "276551"
    },
    {
        "CHARTER_NO": "3180",
        "NAME": "The First National Bank of Hutchinson",
        "ADDRESS": "One North Main Street",
        "CITY": "Hutchinson",
        "STATE": "KS",
        "CERT": "4697",
        "RSSD": "754853"
    },
    {
        "CHARTER_NO": "21165",
        "NAME": "The First National Bank of Izard County",
        "ADDRESS": "2184 AR Highway 56",
        "CITY": "Calico Rock",
        "STATE": "AR",
        "CERT": "11252",
        "RSSD": "379649"
    },
    {
        "CHARTER_NO": "7768",
        "NAME": "The First National Bank of Jeanerette",
        "ADDRESS": "1331 East Main Street",
        "CITY": "Jeanerette",
        "STATE": "LA",
        "CERT": "4290",
        "RSSD": "622037"
    },
    {
        "CHARTER_NO": "8161",
        "NAME": "The First National Bank of Johnson",
        "ADDRESS": "125 Main Street",
        "CITY": "Johnson",
        "STATE": "NE",
        "CERT": "5422",
        "RSSD": "563457"
    },
    {
        "CHARTER_NO": "347",
        "NAME": "The First National Bank of Lacon",
        "ADDRESS": "111 South Broad Street",
        "CITY": "Lacon",
        "STATE": "IL",
        "CERT": "3688",
        "RSSD": "824738"
    },
    {
        "CHARTER_NO": "11312",
        "NAME": "The First National Bank of Lawrence County at Walnut Ridge",
        "ADDRESS": "206 West Main Street",
        "CITY": "Walnut Ridge",
        "STATE": "AR",
        "CERT": "3896",
        "RSSD": "799948"
    },
    {
        "CHARTER_NO": "6921",
        "NAME": "The First National Bank of Le Center",
        "ADDRESS": "701 Ash Street NE",
        "CITY": "Lonsdale",
        "STATE": "MN",
        "CERT": "5180",
        "RSSD": "986551"
    },
    {
        "CHARTER_NO": "6171",
        "NAME": "The First National Bank of Lindsay",
        "ADDRESS": "101 South Main",
        "CITY": "Lindsay",
        "STATE": "OK",
        "CERT": "4134",
        "RSSD": "296858"
    },
    {
        "CHARTER_NO": "10598",
        "NAME": "The First National Bank of Lipan",
        "ADDRESS": "101 E. Lipan Drive",
        "CITY": "Lipan",
        "STATE": "TX",
        "CERT": "3303",
        "RSSD": "811457"
    },
    {
        "CHARTER_NO": "3962",
        "NAME": "The First National Bank of Litchfield",
        "ADDRESS": "324 North State Street",
        "CITY": "Litchfield",
        "STATE": "IL",
        "CERT": "3807",
        "RSSD": "370347"
    },
    {
        "CHARTER_NO": "6169",
        "NAME": "The First National Bank of Livingston",
        "ADDRESS": "2121 Highway 190 West",
        "CITY": "Livingston",
        "STATE": "TX",
        "CERT": "3305",
        "RSSD": "630658"
    },
    {
        "CHARTER_NO": "13126",
        "NAME": "The First National Bank of Long Island",
        "ADDRESS": "10 Glen Head Road",
        "CITY": "Glen Head",
        "STATE": "NY",
        "CERT": "7072",
        "RSSD": "837000"
    },
    {
        "CHARTER_NO": "11798",
        "NAME": "The First National Bank of Louisburg",
        "ADDRESS": "1201 West Amity",
        "CITY": "Louisburg",
        "STATE": "KS",
        "CERT": "4722",
        "RSSD": "132451"
    },
    {
        "CHARTER_NO": "7605",
        "NAME": "The First National Bank of Manchester",
        "ADDRESS": "120 Town Square",
        "CITY": "Manchester",
        "STATE": "KY",
        "CERT": "2708",
        "RSSD": "719610"
    },
    {
        "CHARTER_NO": "3455",
        "NAME": "The First National Bank of Manning",
        "ADDRESS": "401 Main Street",
        "CITY": "Manning",
        "STATE": "IA",
        "CERT": "4477",
        "RSSD": "818540"
    },
    {
        "CHARTER_NO": "46",
        "NAME": "The First National Bank of McConnelsville",
        "ADDRESS": "86 North Kennebec Avenue",
        "CITY": "McConnelsville",
        "STATE": "OH",
        "CERT": "6637",
        "RSSD": "44929"
    },
    {
        "CHARTER_NO": "6488",
        "NAME": "The First National Bank of McIntosh",
        "ADDRESS": "260 Cleveland Avenue SW",
        "CITY": "McIntosh",
        "STATE": "MN",
        "CERT": "5196",
        "RSSD": "988256"
    },
    {
        "CHARTER_NO": "9810",
        "NAME": "The First National Bank of Mertzon",
        "ADDRESS": "106 S. Broadway",
        "CITY": "Mertzon",
        "STATE": "TX",
        "CERT": "3339",
        "RSSD": "500256"
    },
    {
        "CHARTER_NO": "2221",
        "NAME": "The First National Bank of Middle Tennessee",
        "ADDRESS": "200 East Main Street",
        "CITY": "McMinnville",
        "STATE": "TN",
        "CERT": "4952",
        "RSSD": "87234"
    },
    {
        "CHARTER_NO": "9050",
        "NAME": "The First National Bank of Milaca",
        "ADDRESS": "192 Second Avenue S.W.",
        "CITY": "Milaca",
        "STATE": "MN",
        "CERT": "5198",
        "RSSD": "924357"
    },
    {
        "CHARTER_NO": "9784",
        "NAME": "The First National Bank of Monterey",
        "ADDRESS": "Main Street",
        "CITY": "Monterey",
        "STATE": "IN",
        "CERT": "4364",
        "RSSD": "44040"
    },
    {
        "CHARTER_NO": "5774",
        "NAME": "The First National Bank of Moody",
        "ADDRESS": "101 7th Street",
        "CITY": "Moody",
        "STATE": "TX",
        "CERT": "3351",
        "RSSD": "108269"
    },
    {
        "CHARTER_NO": "12947",
        "NAME": "The First National Bank of Moose Lake",
        "ADDRESS": "400 Elm Avenue",
        "CITY": "Moose Lake",
        "STATE": "MN",
        "CERT": "5214",
        "RSSD": "706058"
    },
    {
        "CHARTER_NO": "13102",
        "NAME": "The First National Bank of Mount Dora",
        "ADDRESS": "714 N Donnelly Street",
        "CITY": "Mount Dora",
        "STATE": "FL",
        "CERT": "3579",
        "RSSD": "61832"
    },
    {
        "CHARTER_NO": "3959",
        "NAME": "The First National Bank of Nevada, Missouri",
        "ADDRESS": "100 West Walnut",
        "CITY": "Nevada",
        "STATE": "MO",
        "CERT": "4598",
        "RSSD": "827355"
    },
    {
        "CHARTER_NO": "11754",
        "NAME": "The First National Bank of Okawville",
        "ADDRESS": "203 East Walnut Street",
        "CITY": "Okawville",
        "STATE": "IL",
        "CERT": "3826",
        "RSSD": "333940"
    },
    {
        "CHARTER_NO": "8039",
        "NAME": "The First National Bank of Oneida",
        "ADDRESS": "603 North Main Street",
        "CITY": "Oneida",
        "STATE": "TN",
        "CERT": "4958",
        "RSSD": "966731"
    },
    {
        "CHARTER_NO": "228",
        "NAME": "The First National Bank of Orwell",
        "ADDRESS": "Main Street",
        "CITY": "Orwell",
        "STATE": "VT",
        "CERT": "6280",
        "RSSD": "177500"
    },
    {
        "CHARTER_NO": "6837",
        "NAME": "The First National Bank of Osakis",
        "ADDRESS": "211-13 Central",
        "CITY": "Osakis",
        "STATE": "MN",
        "CERT": "5221",
        "RSSD": "726458"
    },
    {
        "CHARTER_NO": "11343",
        "NAME": "The First National Bank of Pandora",
        "ADDRESS": "102 E. Main Street",
        "CITY": "Pandora",
        "STATE": "OH",
        "CERT": "6671",
        "RSSD": "571920"
    },
    {
        "CHARTER_NO": "9721",
        "NAME": "The First National Bank of Peterstown",
        "ADDRESS": "220 Market Street",
        "CITY": "Peterstown",
        "STATE": "WV",
        "CERT": "6787",
        "RSSD": "719030"
    },
    {
        "CHARTER_NO": "4155",
        "NAME": "The First National Bank of Primghar",
        "ADDRESS": "180 S. Hayes Avenue",
        "CITY": "Primghar",
        "STATE": "IA",
        "CERT": "4494",
        "RSSD": "343248"
    },
    {
        "CHARTER_NO": "11125",
        "NAME": "The First National Bank of Proctor",
        "ADDRESS": "211 Second Street",
        "CITY": "Proctor",
        "STATE": "MN",
        "CERT": "5232",
        "RSSD": "731957"
    },
    {
        "CHARTER_NO": "11706",
        "NAME": "The First National Bank of Quitaque",
        "ADDRESS": "320 East Main Street",
        "CITY": "Quitaque",
        "STATE": "TX",
        "CERT": "3401",
        "RSSD": "644963"
    },
    {
        "CHARTER_NO": "6910",
        "NAME": "The First National Bank of Raymond",
        "ADDRESS": "403 East Broad Street",
        "CITY": "Raymond",
        "STATE": "IL",
        "CERT": "3830",
        "RSSD": "421445"
    },
    {
        "CHARTER_NO": "11348",
        "NAME": "The First National Bank of Russell Springs",
        "ADDRESS": "Highways 127 and 80",
        "CITY": "Russell Springs",
        "STATE": "KY",
        "CERT": "2767",
        "RSSD": "173641"
    },
    {
        "CHARTER_NO": "8808",
        "NAME": "The First National Bank of Scott City",
        "ADDRESS": "501 Main Street",
        "CITY": "Scott City",
        "STATE": "KS",
        "CERT": "4769",
        "RSSD": "414652"
    },
    {
        "CHARTER_NO": "5628",
        "NAME": "The First National Bank of Shiner",
        "ADDRESS": "103 W. 7th",
        "CITY": "Shiner",
        "STATE": "TX",
        "CERT": "5529",
        "RSSD": "342362"
    },
    {
        "CHARTER_NO": "5466",
        "NAME": "The First National Bank of Sonora",
        "ADDRESS": "102 East Main",
        "CITY": "Sonora",
        "STATE": "TX",
        "CERT": "5531",
        "RSSD": "591366"
    },
    {
        "CHARTER_NO": "7015",
        "NAME": "The First National Bank of Sparta",
        "ADDRESS": "Broadway and Market Streets",
        "CITY": "Sparta",
        "STATE": "IL",
        "CERT": "3837",
        "RSSD": "246947"
    },
    {
        "CHARTER_NO": "10161",
        "NAME": "The First National Bank of Spearville",
        "ADDRESS": "303 N Main",
        "CITY": "Spearville",
        "STATE": "KS",
        "CERT": "4774",
        "RSSD": "197254"
    },
    {
        "CHARTER_NO": "3886",
        "NAME": "The First National Bank of St. Ignace",
        "ADDRESS": "132 N. State Street",
        "CITY": "St. Ignace",
        "STATE": "MI",
        "CERT": "5074",
        "RSSD": "381950"
    },
    {
        "CHARTER_NO": "8094",
        "NAME": "The First National Bank of Stanton",
        "ADDRESS": "119 N. St. Peter",
        "CITY": "Stanton",
        "STATE": "TX",
        "CERT": "5536",
        "RSSD": "458665"
    },
    {
        "CHARTER_NO": "9813",
        "NAME": "The First National Bank of Sterling City",
        "ADDRESS": "602 4th Street",
        "CITY": "Sterling City",
        "STATE": "TX",
        "CERT": "5538",
        "RSSD": "411062"
    },
    {
        "CHARTER_NO": "11383",
        "NAME": "The First National Bank of Sycamore",
        "ADDRESS": "South Sycamore Avenue",
        "CITY": "Sycamore",
        "STATE": "OH",
        "CERT": "6706",
        "RSSD": "553926"
    },
    {
        "CHARTER_NO": "11019",
        "NAME": "The First National Bank of Tom Bean",
        "ADDRESS": "109 Britton Street",
        "CITY": "Tom Bean",
        "STATE": "TX",
        "CERT": "5557",
        "RSSD": "193162"
    },
    {
        "CHARTER_NO": "13706",
        "NAME": "The First National Bank of Trinity",
        "ADDRESS": "145 South Robb Street",
        "CITY": "Trinity",
        "STATE": "TX",
        "CERT": "5559",
        "RSSD": "479567"
    },
    {
        "CHARTER_NO": "11305",
        "NAME": "The First National Bank of Wakefield",
        "ADDRESS": "400 Sunday Lake Street",
        "CITY": "Wakefield",
        "STATE": "MI",
        "CERT": "5076",
        "RSSD": "292850"
    },
    {
        "CHARTER_NO": "10180",
        "NAME": "The First National Bank of Waterloo",
        "ADDRESS": "228 South Main Street",
        "CITY": "Waterloo",
        "STATE": "IL",
        "CERT": "3842",
        "RSSD": "145545"
    },
    {
        "CHARTER_NO": "5635",
        "NAME": "The First National Bank of Waverly",
        "ADDRESS": "107 N. Market",
        "CITY": "Waverly",
        "STATE": "OH",
        "CERT": "6725",
        "RSSD": "263627"
    },
    {
        "CHARTER_NO": "7899",
        "NAME": "The First National Bank of Waynesboro",
        "ADDRESS": "626 Liberty Street",
        "CITY": "Waynesboro",
        "STATE": "GA",
        "CERT": "2160",
        "RSSD": "31134"
    },
    {
        "CHARTER_NO": "6830",
        "NAME": "The First National Bank of Williamson",
        "ADDRESS": "68 E. Second Avenue",
        "CITY": "Williamson",
        "STATE": "WV",
        "CERT": "6805",
        "RSSD": "917630"
    },
    {
        "CHARTER_NO": "14757",
        "NAME": "The Fisher National Bank",
        "ADDRESS": "102 East Division Street",
        "CITY": "Fisher",
        "STATE": "IL",
        "CERT": "17513",
        "RSSD": "739832"
    },
    {
        "CHARTER_NO": "23864",
        "NAME": "The Glenmede Trust Company, National Association",
        "ADDRESS": "One Liberty Place, 1650 Market Street, Suite 1200",
        "CITY": "Philadelphia",
        "STATE": "PA",
        "CERT": "35317",
        "RSSD": "2826017"
    },
    {
        "CHARTER_NO": "24173",
        "NAME": "The Goldman Sachs Trust Company, National Association",
        "ADDRESS": "200 Bellevue Parkway",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "57337",
        "RSSD": "3066025"
    },
    {
        "CHARTER_NO": "11642",
        "NAME": "The Granger National Bank",
        "ADDRESS": "200 W. Davilla",
        "CITY": "Granger",
        "STATE": "TX",
        "CERT": "3232",
        "RSSD": "272151"
    },
    {
        "CHARTER_NO": "14035",
        "NAME": "The Granville National Bank",
        "ADDRESS": "328 South McCoy Street",
        "CITY": "Granville",
        "STATE": "IL",
        "CERT": "13983",
        "RSSD": "560830"
    },
    {
        "CHARTER_NO": "2242",
        "NAME": "The Havana National Bank",
        "ADDRESS": "112 South Orange Street",
        "CITY": "Havana",
        "STATE": "IL",
        "CERT": "3677",
        "RSSD": "940731"
    },
    {
        "CHARTER_NO": "5842",
        "NAME": "The Home National Bank of Thorntown",
        "ADDRESS": "117 East Main Street",
        "CITY": "Thorntown",
        "STATE": "IN",
        "CERT": "14225",
        "RSSD": "696645"
    },
    {
        "CHARTER_NO": "644",
        "NAME": "The Honesdale National Bank",
        "ADDRESS": "733 Main Stt",
        "CITY": "Honesdale",
        "STATE": "PA",
        "CERT": "7526",
        "RSSD": "465618"
    },
    {
        "CHARTER_NO": "7745",
        "NAME": "The Huntington National Bank",
        "ADDRESS": "17 South High Street",
        "CITY": "Columbus",
        "STATE": "OH",
        "CERT": "6560",
        "RSSD": "12311"
    },
    {
        "CHARTER_NO": "11913",
        "NAME": "The Idabel National Bank",
        "ADDRESS": "1201 Southeast Washington",
        "CITY": "Idabel",
        "STATE": "OK",
        "CERT": "4241",
        "RSSD": "237954"
    },
    {
        "CHARTER_NO": "7814",
        "NAME": "The Jacksboro National Bank",
        "ADDRESS": "910 North Main Street",
        "CITY": "Jacksboro",
        "STATE": "TX",
        "CERT": "3275",
        "RSSD": "924058"
    },
    {
        "CHARTER_NO": "5614",
        "NAME": "The Karnes County National Bank of Karnes City",
        "ADDRESS": "301 E. Calvert Street",
        "CITY": "Karnes City",
        "STATE": "TX",
        "CERT": "3279",
        "RSSD": "979759"
    },
    {
        "CHARTER_NO": "13111",
        "NAME": "The Lamesa National Bank",
        "ADDRESS": "602 South 1st Street",
        "CITY": "Lamesa",
        "STATE": "TX",
        "CERT": "3292",
        "RSSD": "623052"
    },
    {
        "CHARTER_NO": "11715",
        "NAME": "The Lemont National Bank",
        "ADDRESS": "1201 State Street",
        "CITY": "Lemont",
        "STATE": "IL",
        "CERT": "3693",
        "RSSD": "480330"
    },
    {
        "CHARTER_NO": "13541",
        "NAME": "The Liberty National Bank in Paris",
        "ADDRESS": "305 Lamar Avenue",
        "CITY": "Paris",
        "STATE": "TX",
        "CERT": "3384",
        "RSSD": "1669"
    },
    {
        "CHARTER_NO": "13479",
        "NAME": "The Lincoln National Bank of Hodgenville",
        "ADDRESS": "41 Public Square",
        "CITY": "Hodgenville",
        "STATE": "KY",
        "CERT": "2750",
        "RSSD": "553944"
    },
    {
        "CHARTER_NO": "10079",
        "NAME": "The Litchfield National Bank",
        "ADDRESS": "316 North State Street",
        "CITY": "Litchfield",
        "STATE": "IL",
        "CERT": "3808",
        "RSSD": "372444"
    },
    {
        "CHARTER_NO": "1027",
        "NAME": "The Lyons National Bank",
        "ADDRESS": "35 William Street",
        "CITY": "Lyons",
        "STATE": "NY",
        "CERT": "7151",
        "RSSD": "323204"
    },
    {
        "CHARTER_NO": "23202",
        "NAME": "The Malvern National Bank",
        "ADDRESS": "1 Money Place",
        "CITY": "Malvern",
        "STATE": "AR",
        "CERT": "14644",
        "RSSD": "906241"
    },
    {
        "CHARTER_NO": "7911",
        "NAME": "The Marion National Bank",
        "ADDRESS": "302 East Main Street",
        "CITY": "Marion",
        "STATE": "KS",
        "CERT": "4728",
        "RSSD": "167752"
    },
    {
        "CHARTER_NO": "2449",
        "NAME": "The Merchants National Bank",
        "ADDRESS": "100 North High Street",
        "CITY": "Hillsboro",
        "STATE": "OH",
        "CERT": "6605",
        "RSSD": "701222"
    },
    {
        "CHARTER_NO": "6991",
        "NAME": "The Miners National Bank of Eveleth",
        "ADDRESS": "401 Grant Avenue",
        "CITY": "Eveleth",
        "STATE": "MN",
        "CERT": "5141",
        "RSSD": "43856"
    },
    {
        "CHARTER_NO": "24827",
        "NAME": "The MINT National Bank",
        "ADDRESS": "1213 Kingwood Drive",
        "CITY": "Kingwood",
        "STATE": "TX",
        "CERT": "58764",
        "RSSD": "3821626"
    },
    {
        "CHARTER_NO": "13198",
        "NAME": "The National Bank of Adams County of West Union",
        "ADDRESS": "218 N. Market Street",
        "CITY": "West Union",
        "STATE": "OH",
        "CERT": "6728",
        "RSSD": "290922"
    },
    {
        "CHARTER_NO": "14788",
        "NAME": "The National Bank of Andrews",
        "ADDRESS": "1501 N. Main",
        "CITY": "Andrews",
        "STATE": "TX",
        "CERT": "17603",
        "RSSD": "488653"
    },
    {
        "CHARTER_NO": "12229",
        "NAME": "The National Bank of Blacksburg",
        "ADDRESS": "100 South Main Street",
        "CITY": "Blacksburg",
        "STATE": "VA",
        "CERT": "6821",
        "RSSD": "754929"
    },
    {
        "CHARTER_NO": "1398",
        "NAME": "The National Bank of Coxsackie",
        "ADDRESS": "3-7 Reed Street",
        "CITY": "Coxsackie",
        "STATE": "NY",
        "CERT": "7018",
        "RSSD": "234506"
    },
    {
        "CHARTER_NO": "22652",
        "NAME": "The National Bank of Indianapolis",
        "ADDRESS": "107 North Pennsylvania Street, Suite 700",
        "CITY": "Indianapolis",
        "STATE": "IN",
        "CERT": "33860",
        "RSSD": "2132941"
    },
    {
        "CHARTER_NO": "3147",
        "NAME": "The National Bank of Malvern",
        "ADDRESS": "King and Warren Streets",
        "CITY": "Malvern",
        "STATE": "PA",
        "CERT": "7590",
        "RSSD": "977616"
    },
    {
        "CHARTER_NO": "1195",
        "NAME": "The National Bank of Middlebury",
        "ADDRESS": "30-32 Main Street",
        "CITY": "Middlebury",
        "STATE": "VT",
        "CERT": "6275",
        "RSSD": "173306"
    },
    {
        "CHARTER_NO": "4107",
        "NAME": "The National Capital Bank of Washington",
        "ADDRESS": "316 Pennsylvania Avenue, S.E.",
        "CITY": "Washington",
        "STATE": "DC",
        "CERT": "2093",
        "RSSD": "791821"
    },
    {
        "CHARTER_NO": "676",
        "NAME": "The National Grand Bank of Marblehead",
        "ADDRESS": "91 Pleasant Street",
        "CITY": "Marblehead",
        "STATE": "MA",
        "CERT": "2608",
        "RSSD": "863607"
    },
    {
        "CHARTER_NO": "1214",
        "NAME": "The National Iron Bank",
        "ADDRESS": "195 Main Street",
        "CITY": "Salisbury",
        "STATE": "CT",
        "CERT": "2496",
        "RSSD": "1008209"
    },
    {
        "CHARTER_NO": "12471",
        "NAME": "The Neffs National Bank",
        "ADDRESS": "5629 Pennsylvania Route 873",
        "CITY": "Neffs",
        "STATE": "PA",
        "CERT": "7646",
        "RSSD": "144913"
    },
    {
        "CHARTER_NO": "7005",
        "NAME": "The Northumberland National Bank",
        "ADDRESS": "245 Front Street",
        "CITY": "Northumberland",
        "STATE": "PA",
        "CERT": "7666",
        "RSSD": "70414"
    },
    {
        "CHARTER_NO": "11780",
        "NAME": "The Old Exchange National Bank of Okawville",
        "ADDRESS": "110 E. Walnut Street",
        "CITY": "Okawville",
        "STATE": "IL",
        "CERT": "3827",
        "RSSD": "411240"
    },
    {
        "CHARTER_NO": "12267",
        "NAME": "The Old Point National Bank of Phoebus",
        "ADDRESS": "1 West Mellen Street",
        "CITY": "Hampton",
        "STATE": "VA",
        "CERT": "6892",
        "RSSD": "186221"
    },
    {
        "CHARTER_NO": "9179",
        "NAME": "The Park National Bank",
        "ADDRESS": "50 North Third Street",
        "CITY": "Newark",
        "STATE": "OH",
        "CERT": "6653",
        "RSSD": "489623"
    },
    {
        "CHARTER_NO": "7892",
        "NAME": "The Pauls Valley National Bank",
        "ADDRESS": "101 W. Paul Avenue",
        "CITY": "Pauls Valley",
        "STATE": "OK",
        "CERT": "4173",
        "RSSD": "454658"
    },
    {
        "CHARTER_NO": "15733",
        "NAME": "The Pennsville National Bank",
        "ADDRESS": "170 South Broadway",
        "CITY": "Pennsville",
        "STATE": "NJ",
        "CERT": "19978",
        "RSSD": "828110"
    },
    {
        "CHARTER_NO": "10051",
        "NAME": "The Peoples National Bank of Checotah",
        "ADDRESS": "300 West Gentry",
        "CITY": "Checotah",
        "STATE": "OK",
        "CERT": "4059",
        "RSSD": "942454"
    },
    {
        "CHARTER_NO": "11595",
        "NAME": "The Perryton National Bank",
        "ADDRESS": "825 South Main Street",
        "CITY": "Perryton",
        "STATE": "TX",
        "CERT": "3388",
        "RSSD": "8462"
    },
    {
        "CHARTER_NO": "5658",
        "NAME": "The Peshtigo National Bank",
        "ADDRESS": "250 French Street",
        "CITY": "Peshtigo",
        "STATE": "WI",
        "CERT": "5317",
        "RSSD": "257345"
    },
    {
        "CHARTER_NO": "25302",
        "NAME": "The Preferred Legacy National Trust Bank",
        "ADDRESS": "4840 Higbee Avenue NW",
        "CITY": "Canton",
        "STATE": "OH",
        "CERT": "59357",
        "RSSD": "5887420"
    },
    {
        "CHARTER_NO": "22926",
        "NAME": "The Private Trust Company, National Association",
        "ADDRESS": "1422 Euclid Avenue",
        "CITY": "Cleveland",
        "STATE": "OH",
        "CERT": "34057",
        "RSSD": "2328285"
    },
    {
        "CHARTER_NO": "976",
        "NAME": "The Putnam County National Bank of Carmel",
        "ADDRESS": "43 Gleneida Avenue",
        "CITY": "Carmel",
        "STATE": "NY",
        "CERT": "6990",
        "RSSD": "287007"
    },
    {
        "CHARTER_NO": "5267",
        "NAME": "The Riddell National Bank",
        "ADDRESS": "1 East National Avenue",
        "CITY": "Brazil",
        "STATE": "IN",
        "CERT": "4318",
        "RSSD": "319047"
    },
    {
        "CHARTER_NO": "8905",
        "NAME": "The Salyersville National Bank",
        "ADDRESS": "Main Street",
        "CITY": "Salyersville",
        "STATE": "KY",
        "CERT": "2723",
        "RSSD": "472018"
    },
    {
        "CHARTER_NO": "13854",
        "NAME": "The Santa Anna National Bank",
        "ADDRESS": "610 Wallis Avenue",
        "CITY": "Santa Anna",
        "STATE": "TX",
        "CERT": "5520",
        "RSSD": "521064"
    },
    {
        "CHARTER_NO": "14315",
        "NAME": "The Security National Bank of Enid",
        "ADDRESS": "201 West Broadway",
        "CITY": "Enid",
        "STATE": "OK",
        "CERT": "14966",
        "RSSD": "119153"
    },
    {
        "CHARTER_NO": "3124",
        "NAME": "The Security National Bank of Sioux City, Iowa",
        "ADDRESS": "601 Pierce Street",
        "CITY": "Sioux City",
        "STATE": "IA",
        "CERT": "4506",
        "RSSD": "418249"
    },
    {
        "CHARTER_NO": "12543",
        "NAME": "The State National Bank of Big Spring",
        "ADDRESS": "901 Main Street",
        "CITY": "Big Spring",
        "STATE": "TX",
        "CERT": "3103",
        "RSSD": "169354"
    },
    {
        "CHARTER_NO": "12742",
        "NAME": "The State National Bank of Groom",
        "ADDRESS": "99 Broadway",
        "CITY": "Groom",
        "STATE": "TX",
        "CERT": "3237",
        "RSSD": "460556"
    },
    {
        "CHARTER_NO": "4137",
        "NAME": "The Stephenson National Bank and Trust",
        "ADDRESS": "1820 Hall Avenue",
        "CITY": "Marinette",
        "STATE": "WI",
        "CERT": "5306",
        "RSSD": "598048"
    },
    {
        "CHARTER_NO": "24092",
        "NAME": "The Tipton Latham Bank, National Association",
        "ADDRESS": "800 West Highway 50",
        "CITY": "Tipton",
        "STATE": "MO",
        "CERT": "1941",
        "RSSD": "984856"
    },
    {
        "CHARTER_NO": "22281",
        "NAME": "The Trust Company of Toledo, National Association",
        "ADDRESS": "1630 Timberwolf Drive",
        "CITY": "Holland",
        "STATE": "OH",
        "CERT": "33239",
        "RSSD": "1820979"
    },
    {
        "CHARTER_NO": "9803",
        "NAME": "The Turbotville National Bank",
        "ADDRESS": "Route 54, P.O. Box 37",
        "CITY": "Turbotville",
        "STATE": "PA",
        "CERT": "7789",
        "RSSD": "906410"
    },
    {
        "CHARTER_NO": "12018",
        "NAME": "The Upstate National Bank",
        "ADDRESS": "729 Proctor Avenue",
        "CITY": "Ogdensburg",
        "STATE": "NY",
        "CERT": "13748",
        "RSSD": "313009"
    },
    {
        "CHARTER_NO": "2036",
        "NAME": "The Vinton County National Bank",
        "ADDRESS": "112 West Main Street",
        "CITY": "McArthur",
        "STATE": "OH",
        "CERT": "6636",
        "RSSD": "754826"
    },
    {
        "CHARTER_NO": "5203",
        "NAME": "The Waggoner National Bank of Vernon",
        "ADDRESS": "1818 Texas Street",
        "CITY": "Vernon",
        "STATE": "TX",
        "CERT": "5569",
        "RSSD": "548267"
    },
    {
        "CHARTER_NO": "8694",
        "NAME": "The Yoakum National Bank",
        "ADDRESS": "301 W. Grand Avenue",
        "CITY": "Yoakum",
        "STATE": "TX",
        "CERT": "5595",
        "RSSD": "311265"
    },
    {
        "CHARTER_NO": "22883",
        "NAME": "Thomasville National Bank",
        "ADDRESS": "301 North Broad Street",
        "CITY": "Thomasville",
        "STATE": "GA",
        "CERT": "34068",
        "RSSD": "2344753"
    },
    {
        "CHARTER_NO": "25288",
        "NAME": "TIAA Trust, National Association",
        "ADDRESS": "8500 Andrew Carnegie Boulevard",
        "CITY": "Charlotte",
        "STATE": "NC",
        "CERT": "59344",
        "RSSD": "5859511"
    },
    {
        "CHARTER_NO": "25143",
        "NAME": "TIB National Association",
        "ADDRESS": "11701 Luna Road",
        "CITY": "Farmers Branch",
        "STATE": "TX",
        "CERT": "23647",
        "RSSD": "529958"
    },
    {
        "CHARTER_NO": "25239",
        "NAME": "Tioga State Bank, National Association",
        "ADDRESS": "1 North Main Street",
        "CITY": "Spencer",
        "STATE": "NY",
        "CERT": "9410",
        "RSSD": "910118"
    },
    {
        "CHARTER_NO": "12437",
        "NAME": "Titan Bank, National Association",
        "ADDRESS": "1701 East Hubbard Street",
        "CITY": "Mineral Wells",
        "STATE": "TX",
        "CERT": "3225",
        "RSSD": "328357"
    },
    {
        "CHARTER_NO": "24789",
        "NAME": "Touchmark National Bank",
        "ADDRESS": "3651 Old Milton Parkway",
        "CITY": "Alpharetta",
        "STATE": "GA",
        "CERT": "58687",
        "RSSD": "3645840"
    },
    {
        "CHARTER_NO": "25201",
        "NAME": "Town Bank, National Association",
        "ADDRESS": "850 West North Shore Drive",
        "CITY": "Hartland",
        "STATE": "WI",
        "CERT": "34717",
        "RSSD": "2693264"
    },
    {
        "CHARTER_NO": "8004",
        "NAME": "Transact Bank, National Association",
        "ADDRESS": "700 17th Street",
        "CITY": "Denver",
        "STATE": "CO",
        "CERT": "13986",
        "RSSD": "403254"
    },
    {
        "CHARTER_NO": "15738",
        "NAME": "Tri City National Bank",
        "ADDRESS": "6400 South 27th Street",
        "CITY": "Oak Creek",
        "STATE": "WI",
        "CERT": "18922",
        "RSSD": "242444"
    },
    {
        "CHARTER_NO": "17926",
        "NAME": "Triad Bank, National Association",
        "ADDRESS": "7646 East 61st Street",
        "CITY": "Tulsa",
        "STATE": "OK",
        "CERT": "24677",
        "RSSD": "283652"
    },
    {
        "CHARTER_NO": "24397",
        "NAME": "Trinity Bank, National Association",
        "ADDRESS": "3500 W Vickery Boulevard",
        "CITY": "Fort Worth",
        "STATE": "TX",
        "CERT": "57543",
        "RSSD": "3185896"
    },
    {
        "CHARTER_NO": "10523",
        "NAME": "Trustmark National Bank",
        "ADDRESS": "248 East Capitol Street",
        "CITY": "Jackson",
        "STATE": "MS",
        "CERT": "4988",
        "RSSD": "342634"
    },
    {
        "CHARTER_NO": "24",
        "NAME": "U.S. Bank National Association",
        "ADDRESS": "425 Walnut Street",
        "CITY": "Cincinnati",
        "STATE": "OH",
        "CERT": "6548",
        "RSSD": "504713"
    },
    {
        "CHARTER_NO": "23412",
        "NAME": "U.S. Bank Trust Company, National Association",
        "ADDRESS": "111 Southwest Fifth Avenue",
        "CITY": "Portland",
        "STATE": "OR",
        "CERT": "34588",
        "RSSD": "2567123"
    },
    {
        "CHARTER_NO": "24090",
        "NAME": "U.S. Bank Trust National Association",
        "ADDRESS": "1011 Centre Road",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "57047",
        "RSSD": "2916963"
    },
    {
        "CHARTER_NO": "23604",
        "NAME": "U.S. Bank Trust National Association SD",
        "ADDRESS": "141 North Main Avenue",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "34813",
        "RSSD": "2667920"
    },
    {
        "CHARTER_NO": "22874",
        "NAME": "UMB Bank & Trust, National Association",
        "ADDRESS": "2 South Broadway",
        "CITY": "St. Louis",
        "STATE": "MO",
        "CERT": "34065",
        "RSSD": "2337335"
    },
    {
        "CHARTER_NO": "23920",
        "NAME": "UMB Bank, National Association",
        "ADDRESS": "1010 Grand Avenue",
        "CITY": "Kansas City",
        "STATE": "MO",
        "CERT": "8273",
        "RSSD": "936855"
    },
    {
        "CHARTER_NO": "7236",
        "NAME": "Union National Bank",
        "ADDRESS": "One Fountain Square Plaza",
        "CITY": "Elgin",
        "STATE": "IL",
        "CERT": "3661",
        "RSSD": "963730"
    },
    {
        "CHARTER_NO": "25160",
        "NAME": "United Midwest Savings Bank, National Association",
        "ADDRESS": "101 South Main Street",
        "CITY": "Degraff",
        "STATE": "OH",
        "CERT": "32441",
        "RSSD": "809276"
    },
    {
        "CHARTER_NO": "23981",
        "NAME": "United National Bank",
        "ADDRESS": "722 North Broad Street",
        "CITY": "Cairo",
        "STATE": "GA",
        "CERT": "35427",
        "RSSD": "2914727"
    },
    {
        "CHARTER_NO": "21008",
        "NAME": "Unity National Bank of Houston",
        "ADDRESS": "2602 Blodgett Street",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "26351",
        "RSSD": "853251"
    },
    {
        "CHARTER_NO": "15790",
        "NAME": "Valley National Bank",
        "ADDRESS": "615 Main Avenue",
        "CITY": "Passaic",
        "STATE": "NJ",
        "CERT": "9396",
        "RSSD": "229801"
    },
    {
        "CHARTER_NO": "24121",
        "NAME": "Vanguard National Trust Company, National Association",
        "ADDRESS": "Vanguard Boulevard",
        "CITY": "Malvern",
        "STATE": "PA",
        "CERT": "57304",
        "RSSD": "3045383"
    },
    {
        "CHARTER_NO": "25147",
        "NAME": "Varo Bank, National Association",
        "ADDRESS": "11781 South Lone Peak Way, Suite 100",
        "CITY": "Draper",
        "STATE": "UT",
        "CERT": "59190",
        "RSSD": "5518023"
    },
    {
        "CHARTER_NO": "17174",
        "NAME": "Vast Bank, National Association",
        "ADDRESS": "110 N. Elgin Avenue",
        "CITY": "Tulsa",
        "STATE": "OK",
        "CERT": "23737",
        "RSSD": "347956"
    },
    {
        "CHARTER_NO": "13443",
        "NAME": "VeraBank, National Association",
        "ADDRESS": "201 West Main Street",
        "CITY": "Henderson",
        "STATE": "TX",
        "CERT": "3250",
        "RSSD": "56351"
    },
    {
        "CHARTER_NO": "23457",
        "NAME": "VersaBank USA National Association",
        "ADDRESS": "Main Street",
        "CITY": "Holdingford",
        "STATE": "MN",
        "CERT": "10160",
        "RSSD": "1011656"
    },
    {
        "CHARTER_NO": "25210",
        "NAME": "Viking Bank, National Association",
        "ADDRESS": "4277 Dakota Street",
        "CITY": "Alexandria",
        "STATE": "MN",
        "CERT": "32082",
        "RSSD": "484776"
    },
    {
        "CHARTER_NO": "25202",
        "NAME": "Village Bank & Trust, National Association",
        "ADDRESS": "234 West Northwest Highway",
        "CITY": "Arlington Heights",
        "STATE": "IL",
        "CERT": "34011",
        "RSSD": "2298995"
    },
    {
        "CHARTER_NO": "23616",
        "NAME": "Virginia National Bank",
        "ADDRESS": "222 East Main Street",
        "CITY": "Charlottesville",
        "STATE": "VA",
        "CERT": "34755",
        "RSSD": "2708122"
    },
    {
        "CHARTER_NO": "24685",
        "NAME": "Waterford Bank, National Association",
        "ADDRESS": "3900 North Mccord Road",
        "CITY": "Toledo",
        "STATE": "OH",
        "CERT": "58433",
        "RSSD": "3588424"
    },
    {
        "CHARTER_NO": "24469",
        "NAME": "Webster Bank, National Association",
        "ADDRESS": "1959 Summer Street",
        "CITY": "Stamford",
        "STATE": "CT",
        "CERT": "18221",
        "RSSD": "761806"
    },
    {
        "CHARTER_NO": "17202",
        "NAME": "Wellington Trust Company, National Association",
        "ADDRESS": "280 Congress Street",
        "CITY": "Boston",
        "STATE": "MA",
        "CERT": "23741",
        "RSSD": "692704"
    },
    {
        "CHARTER_NO": "11668",
        "NAME": "Wells Fargo Bank South Central, National Association",
        "ADDRESS": "2005 Taylor Street",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "5146",
        "RSSD": "2362458"
    },
    {
        "CHARTER_NO": "1",
        "NAME": "Wells Fargo Bank, National Association",
        "ADDRESS": "101 North Philips Avenue",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "CERT": "3511",
        "RSSD": "451965"
    },
    {
        "CHARTER_NO": "23201",
        "NAME": "Wells Fargo Delaware Trust Company, National Association",
        "ADDRESS": "2200 Concord Pike, 5th Floor",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "34465",
        "RSSD": "2531991"
    },
    {
        "CHARTER_NO": "21099",
        "NAME": "Wells Fargo National Bank West",
        "ADDRESS": "4455 Spring Mountain Road",
        "CITY": "Las Vegas",
        "STATE": "NV",
        "CERT": "27389",
        "RSSD": "1225761"
    },
    {
        "CHARTER_NO": "2597",
        "NAME": "Wells Fargo Trust Company, National Association",
        "ADDRESS": "2389 Washington Boulevard",
        "CITY": "Ogden",
        "STATE": "UT",
        "CERT": "13718",
        "RSSD": "688079"
    },
    {
        "CHARTER_NO": "24185",
        "NAME": "West Texas National Bank",
        "ADDRESS": "#6 Desta Drive, Suite 2400",
        "CITY": "Midland",
        "STATE": "TX",
        "CERT": "22957",
        "RSSD": "237066"
    },
    {
        "CHARTER_NO": "24683",
        "NAME": "West Valley National Bank",
        "ADDRESS": "2440 North Litchfield Road",
        "CITY": "Goodyear",
        "STATE": "AZ",
        "CERT": "58426",
        "RSSD": "3480069"
    },
    {
        "CHARTER_NO": "25281",
        "NAME": "Western Alliance Trust Company, National Association",
        "ADDRESS": "1 East Washington Street, Suite 1400",
        "CITY": "Phoenix",
        "STATE": "AZ",
        "CERT": "57288",
        "RSSD": "5805451"
    },
    {
        "CHARTER_NO": "6352",
        "NAME": "Western National Bank",
        "ADDRESS": "210 2nd Street, NW",
        "CITY": "Cass Lake",
        "STATE": "MN",
        "CERT": "5110",
        "RSSD": "278751"
    },
    {
        "CHARTER_NO": "13116",
        "NAME": "Western National Bank",
        "ADDRESS": "201 North Central Avenue",
        "CITY": "Duluth",
        "STATE": "MN",
        "CERT": "5131",
        "RSSD": "127055"
    },
    {
        "CHARTER_NO": "10971",
        "NAME": "Western National Bank",
        "ADDRESS": "523 Thayer Avenue",
        "CITY": "Chester",
        "STATE": "NE",
        "CERT": "4778",
        "RSSD": "199351"
    },
    {
        "CHARTER_NO": "25203",
        "NAME": "Wheaton Bank & Trust Company, National Association",
        "ADDRESS": "100 North Wheaton Avenue",
        "CITY": "Wheaton",
        "STATE": "IL",
        "CERT": "33803",
        "RSSD": "2044811"
    },
    {
        "CHARTER_NO": "23918",
        "NAME": "Wheaton College Trust Company, National Association",
        "ADDRESS": "501 College Avenue",
        "CITY": "Wheaton",
        "STATE": "IL",
        "CERT": "57150",
        "RSSD": "2960788"
    },
    {
        "CHARTER_NO": "22859",
        "NAME": "Wilmington Trust, National Association",
        "ADDRESS": "Rodney Square North, 1100 North Market Street",
        "CITY": "Wilmington",
        "STATE": "DE",
        "CERT": "34069",
        "RSSD": "2265456"
    },
    {
        "CHARTER_NO": "25142",
        "NAME": "Winter Park National Bank",
        "ADDRESS": "201 North New York Avenue",
        "CITY": "Winter Park",
        "STATE": "FL",
        "CERT": "59105",
        "RSSD": "5143788"
    },
    {
        "CHARTER_NO": "25196",
        "NAME": "Wintrust Bank, National Association",
        "ADDRESS": "231 South LaSalle Street",
        "CITY": "Chicago",
        "STATE": "IL",
        "CERT": "33935",
        "RSSD": "2239288"
    },
    {
        "CHARTER_NO": "10865",
        "NAME": "WNB Financial, National Association",
        "ADDRESS": "204 Main Street",
        "CITY": "Winona",
        "STATE": "MN",
        "CERT": "5280",
        "RSSD": "220059"
    },
    {
        "CHARTER_NO": "16892",
        "NAME": "Woodforest National Bank",
        "ADDRESS": "1330 Lake Robbins Drive",
        "CITY": "The Woodlands",
        "STATE": "TX",
        "CERT": "23220",
        "RSSD": "412751"
    },
    {
        "CHARTER_NO": "23926",
        "NAME": "Woodlands National Bank",
        "ADDRESS": "122 Main Street",
        "CITY": "Hinckley",
        "STATE": "MN",
        "CERT": "1417",
        "RSSD": "980951"
    },
    {
        "CHARTER_NO": "14955",
        "NAME": "Zapata National Bank",
        "ADDRESS": "703 Hidalgo Blvd",
        "CITY": "Zapata",
        "STATE": "TX",
        "CERT": "18454",
        "RSSD": "218261"
    },
    {
        "CHARTER_NO": "4341",
        "NAME": "Zions Bancorporation, National Association",
        "ADDRESS": "One South Main Street",
        "CITY": "Salt Lake City",
        "STATE": "UT",
        "CERT": "2270",
        "RSSD": "276579"
    },
    {
        "CHARTER_NO": "80145",
        "NAME": "Adyen N.V.",
        "ADDRESS": "274 Brannan Street",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "5616273"
    },
    {
        "CHARTER_NO": "80026",
        "NAME": "Arab Banking Corporation, B.S.C.",
        "ADDRESS": "140 East 45th Street, 38th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "130103"
    },
    {
        "CHARTER_NO": "80004",
        "NAME": "Australia & New Zealand Banking Group Limited",
        "ADDRESS": "277 Park Avenue, 31st Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "560812"
    },
    {
        "CHARTER_NO": "80041",
        "NAME": "Banco Bradesco S.A.",
        "ADDRESS": "450 Park Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "86509"
    },
    {
        "CHARTER_NO": "80029",
        "NAME": "Banco de la Republica Oriental del Uruguay",
        "ADDRESS": "489 5th Avenue, 22nd Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "132200"
    },
    {
        "CHARTER_NO": "80080",
        "NAME": "Bangkok Bank Public Company Limited",
        "ADDRESS": "29 Broadway, 19th Floor",
        "CITY": "New York City",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "565518"
    },
    {
        "CHARTER_NO": "80096",
        "NAME": "Bank of China",
        "ADDRESS": "444 South Flower Street, 39th Floor",
        "CITY": "Los Angeles",
        "STATE": "CA",
        "CERT": "58339",
        "RSSD": "1218361"
    },
    {
        "CHARTER_NO": "80091",
        "NAME": "Bank of China",
        "ADDRESS": "42-35 Main Street",
        "CITY": "Flushing",
        "STATE": "NY",
        "CERT": "33652",
        "RSSD": "125707"
    },
    {
        "CHARTER_NO": "80028",
        "NAME": "Bank of China",
        "ADDRESS": "1045 Avenue of the Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "33653",
        "RSSD": "908508"
    },
    {
        "CHARTER_NO": "80129",
        "NAME": "Bank of China Chicago Branch",
        "ADDRESS": "111 S. Wacker Drive, Suite 4800",
        "CITY": "Chicago",
        "STATE": "IL",
        "CERT": "0",
        "RSSD": "4461515"
    },
    {
        "CHARTER_NO": "80107",
        "NAME": "Bank of Communications Co., Ltd - New York Branch",
        "ADDRESS": "55 Broadway (A/K/A One Exchange Plaza)",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "1898781"
    },
    {
        "CHARTER_NO": "80127",
        "NAME": "Bank of Communications Co., Ltd., San Francisco Branch",
        "ADDRESS": "575 Market Street, Suite 3888",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "4357225"
    },
    {
        "CHARTER_NO": "80030",
        "NAME": "Bayerische Landesbank",
        "ADDRESS": "560 Lexington Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "599401"
    },
    {
        "CHARTER_NO": "80039",
        "NAME": "China Citic Bank International Limited",
        "ADDRESS": "323 West Valley Boulevard",
        "CITY": "Alhambra",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "806864"
    },
    {
        "CHARTER_NO": "80112",
        "NAME": "China Citic Bank International Limited",
        "ADDRESS": "410 Park Avenue, 11th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "3159262"
    },
    {
        "CHARTER_NO": "80087",
        "NAME": "CMB Wing Lung Bank Limited",
        "ADDRESS": "520 Newport Center Drive",
        "CITY": "Newport Beach",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "571564"
    },
    {
        "CHARTER_NO": "80132",
        "NAME": "CMB Wing Lung Bank Limited San Francisco Branch",
        "ADDRESS": "Steuart Tower, One Market Plaza, Suite 1200",
        "CITY": "San Francisco",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "4725141"
    },
    {
        "CHARTER_NO": "80022",
        "NAME": "Commonwealth Bank of Australia",
        "ADDRESS": "599 Lexington Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "569712"
    },
    {
        "CHARTER_NO": "80146",
        "NAME": "Credit Suisse AG New York Branch",
        "ADDRESS": "11 Madison Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "4512"
    },
    {
        "CHARTER_NO": "80121",
        "NAME": "Desjardins Florida Branch Limited",
        "ADDRESS": "1001 East Hallandale Beach Boulevard",
        "CITY": "Hallandale",
        "STATE": "FL",
        "CERT": "0",
        "RSSD": "5083316"
    },
    {
        "CHARTER_NO": "80094",
        "NAME": "Erste Group Bank Ag New York Branch",
        "ADDRESS": "75 Rockefeller Plaza, 12th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "233116"
    },
    {
        "CHARTER_NO": "80016",
        "NAME": "First Abu Dhabi Bank USA N.V.",
        "ADDRESS": "1430 K Street, N.W., Suite 400",
        "CITY": "Washington",
        "STATE": "DC",
        "CERT": "0",
        "RSSD": "647021"
    },
    {
        "CHARTER_NO": "80065",
        "NAME": "Gulf International Bank (UK) Limited",
        "ADDRESS": "330 Madison Avenue, 37th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "919812"
    },
    {
        "CHARTER_NO": "80010",
        "NAME": "Gulf International Bank B.S.C.",
        "ADDRESS": "335 Madison Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "253516"
    },
    {
        "CHARTER_NO": "80123",
        "NAME": "Icici Bank Limited",
        "ADDRESS": "575 Fifth Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "3712461"
    },
    {
        "CHARTER_NO": "80126",
        "NAME": "Itaú Chile New York Branch",
        "ADDRESS": "885 Third Avenue, 33rd Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "3930498"
    },
    {
        "CHARTER_NO": "80066",
        "NAME": "Metropolitan Bank and Trust Company",
        "ADDRESS": "10 East 53rd Street",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "33656",
        "RSSD": "449515"
    },
    {
        "CHARTER_NO": "80144",
        "NAME": "Mitsubishi UFJ Trust and Banking Corporation NY Branch",
        "ADDRESS": "1221 Avenue of Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "317810"
    },
    {
        "CHARTER_NO": "80143",
        "NAME": "MUFG Bank, Ltd Houston Agency",
        "ADDRESS": "1100 Louisiana, Suite 4850",
        "CITY": "Houston",
        "STATE": "TX",
        "CERT": "0",
        "RSSD": "538156"
    },
    {
        "CHARTER_NO": "80140",
        "NAME": "MUFG Bank, Ltd. Chicago Branch",
        "ADDRESS": "227 West Monroe Street, Suite 1550",
        "CITY": "Chicago",
        "STATE": "IL",
        "CERT": "0",
        "RSSD": "660637"
    },
    {
        "CHARTER_NO": "80142",
        "NAME": "MUFG Bank, Ltd. Dallas Agency",
        "ADDRESS": "500 North Akard Street",
        "CITY": "Dallas",
        "STATE": "TX",
        "CERT": "0",
        "RSSD": "1917011"
    },
    {
        "CHARTER_NO": "80141",
        "NAME": "MUFG Bank, Ltd. Los Angeles Branch",
        "ADDRESS": "445 South Figueroa Street, 27th Floor",
        "CITY": "Los Angeles",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "112967"
    },
    {
        "CHARTER_NO": "80138",
        "NAME": "MUFG Bank, Ltd. Primary NY Branch",
        "ADDRESS": "1251 Avenue of The Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "444819"
    },
    {
        "CHARTER_NO": "80139",
        "NAME": "MUFG Bank, Ltd. Secondary NY Branch",
        "ADDRESS": "1221 Avenue of The Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "4981871"
    },
    {
        "CHARTER_NO": "80011",
        "NAME": "National Australia Bank Limited",
        "ADDRESS": "277 Park Avenue, 19th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "41218"
    },
    {
        "CHARTER_NO": "80003",
        "NAME": "National Bank of Pakistan",
        "ADDRESS": "1875 Connecticut Avenue, Northwest",
        "CITY": "Washington",
        "STATE": "DC",
        "CERT": "0",
        "RSSD": "968726"
    },
    {
        "CHARTER_NO": "80071",
        "NAME": "Royal Bank of Canada",
        "ADDRESS": "1211 Avenue of the Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "158714"
    },
    {
        "CHARTER_NO": "80072",
        "NAME": "Royal Bank of Canada - WFC Branch",
        "ADDRESS": "Three World Financial Center, 200 Vesey Street",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "511412"
    },
    {
        "CHARTER_NO": "80133",
        "NAME": "Royal Bank of Canada Hudson Branch",
        "ADDRESS": "30 Hudson Street",
        "CITY": "Jersey City",
        "STATE": "NJ",
        "CERT": "0",
        "RSSD": "5087752"
    },
    {
        "CHARTER_NO": "80061",
        "NAME": "Shanghai Commercial Limited",
        "ADDRESS": "125 East 56th Street",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "64217"
    },
    {
        "CHARTER_NO": "80104",
        "NAME": "The Bank of East Asia, Limited",
        "ADDRESS": "388 East Valley Blvd, Suite 218",
        "CITY": "Alhambra",
        "STATE": "CA",
        "CERT": "0",
        "RSSD": "1858990"
    },
    {
        "CHARTER_NO": "80081",
        "NAME": "The Bank of East Asia, Limited",
        "ADDRESS": "540 Madison Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "958400"
    },
    {
        "CHARTER_NO": "80097",
        "NAME": "The Bank of East Asia, Limited",
        "ADDRESS": "540 MADISON AVENUE",
        "CITY": "NEW YORK",
        "STATE": "NY",
        "CERT": "33646",
        "RSSD": "1751420"
    },
    {
        "CHARTER_NO": "80089",
        "NAME": "The National Bank of Kuwait S.A.K.P.",
        "ADDRESS": "299 Park Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "969714"
    },
    {
        "CHARTER_NO": "80134",
        "NAME": "The Toronto-Dominion Bank, New York Branch",
        "ADDRESS": "1 Vanderbilt Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "450810"
    },
    {
        "CHARTER_NO": "80114",
        "NAME": "UBS AG New York (1285 Avenue of the Americas) Branch",
        "ADDRESS": "1285 Avenue of the Americas",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "965510"
    },
    {
        "CHARTER_NO": "80135",
        "NAME": "UBS AG Stamford Branch",
        "ADDRESS": "600 Washington Boulevard",
        "CITY": "Stamford",
        "STATE": "CT",
        "CERT": "0",
        "RSSD": "2618801"
    },
    {
        "CHARTER_NO": "80082",
        "NAME": "United Bank for Africa Plc, America",
        "ADDRESS": "575 Fifth Avenue",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "964616"
    },
    {
        "CHARTER_NO": "80009",
        "NAME": "Westpac Banking Corporation",
        "ADDRESS": "575 Fifth Avenue - 39th Floor",
        "CITY": "New York",
        "STATE": "NY",
        "CERT": "0",
        "RSSD": "629812"
    }
];

export { bankData };