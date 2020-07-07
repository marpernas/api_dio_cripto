const apikey = {
  key: "here your KEYAPI in https://pro.coinmarketcap.com/",
};

fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY="+ apikey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    return response.json();
  })
  .then((api) => {
        
    let texto = "";

    for(let i=0; i< 10;i++){
  
      // Show API Information
  
      texto = texto + `
      
      <div class="media">
          <img src="./img/litecoin.png" alt="coin" class="align-sef-center mr-3" width="100" height="60">
          <div class="media-body">
              <h5 class="mt-2">${api.data[i].name}</h5>
              <p>${api.data[i].symbol} - ${api.data[i].first_historical_data}</p>
          </div>
      </div>
      
      `;
  
      document.getElementById("coins").innerHTML = texto;
  
    }
  })
  .catch((error) => {
    console.log(error.message);
  });


  
