const log = console.log;
log('test');

const companies = [
    { name: 'Alpha', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Betha', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Gama', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Delta', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Omicron', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Eta', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Kappa', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Lambda', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Omega', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 5, 54, 21, 44, 61, 13, 13, 15, 45, 25, 64, 32];
//filter

const filteredAges = ages.filter((age) => age > 20);
log('filteredAges');

const filterDuplicated = ages.filter((item, index) => ages.indexOf(item) !== index);
log('Filter', filterDuplicated);

const retailCompanies = companies.filter((company) => {
    if (company.category === 'Retail') {
        return true;
    }
});
log('retailCompanies', retailCompanies);

//map
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
log('map', ageMap);

// sort
const companiesSort = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
log('sort', companiesSort);

//sort alphabetically
const companiesSortAlphabetical = companies.sort((c1, c2) => (c1.name > c2.name ? 1 : c2.name > c1.name ? -1 : 0));
log('Sort Alpahabetically', companiesSortAlphabetical);

//Reduce
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
log('reduce', totalYears);

//groupBy using reduce
const groupBy = (key, arr) =>
    arr.reduce(
        (cache, companie) => ({ ...cache, [companie[key]]: companie[key] in cache ? cache[companie[key]].concat(companie) : [companie] }),
        {}
    );

log('group by using reduce', groupBy('category', companies));
