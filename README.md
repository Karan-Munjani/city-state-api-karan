# city-state-api-karan
## Main API Url: http://city-state-api-karan.herokuapp.com/api/


### Some termionology
#### :cid => Country Id => i.e. India=IN, UnitedS tates=US etc..
#### :sid => State Id => i.e. Gujrat=GJ, Maharashtra=MH etc..


#### Here are some of the endpoints to make GET req:


1. Countries:
- /getAllCountries
- /getCountryByCode/:cid

2. States:
- /getStatesOfCountry/:cid
- /getStateByCode/:sid

3. Cities:
- /getAllCities
- /getCitiesOfCountry/:cid
- /getCitiesOfState/:cid/:sid

#### Will Update more detailed doc and other routes also.
