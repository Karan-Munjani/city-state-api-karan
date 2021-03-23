# city-state-api-karan
Main API Url: http://city-state-api-karan.herokuapp.com/api/

:cid => Country Id => i.e. India=IN, UnitedS tates=US etc..
:sid => State Id => i.e. Gujrat=GJ, Maharashtra=MH etc..


Here are some of the endpoints to make GET req:


Countries:
/getAllCountries
/getCountryByCode/:cid

States:
/getStatesOfCountry/:cid
/getStateByCode/:sid

Cities:
/getAllCities
/getCitiesOfCountry/:cid
/getCitiesOfState/:cid/:sid
