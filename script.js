const inpSearch = document.getElementById('inpSearch')
const btn = document.getElementById('btnSearch')
const con = document.querySelector('.wrapper-country')

btn.addEventListener('click',() =>{
    let countryName = inpSearch.value;

    if (countryName=== ''){
        con.innerHTML=`<h3>Must enter name of Country...</h3>`;}
    else if(countryName!=''){
            con.innerHTML=`<h3>Wrong name!</h3>`;
        }


    if(countryName) {
    let finalUrl= `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    
        fetch(finalUrl).then((res) => res.json())
        .then((data) =>{
            con.innerHTML=`
        <div class="wrapper-country">
            <div class="wrapper-detail">
                <img src="${data[0].flags.svg}">
            </div>
            
            <div class="wrapper-detail" id="wrapper-detail">
                <h4>country:</h4>
                <span>${countryName}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>population:</h4>
                <span>${data[0].population}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>continents:</h4>
                <span>${data[0].continents[0]}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>Languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>area:</h4>
                <span>${data[0].area} Km²</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>currencies:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} / ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>subregion:</h4>
                <span>${data[0].subregion}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>timezones:</h4>
                <span>${data[0].timezones}</span>
            </div>

            <div class="wrapper-detail" id="wrapper-detail">
                <h4>tld:</h4>
                <span>${data[0].tld}</span>
            </div>
        </div>`;
        
        }).catch('Not Found')
    }})
