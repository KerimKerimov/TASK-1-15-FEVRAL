window.addEventListener('load', news)

async function news(){
    const newsURL= 'https://newsapi.org/v2/everything?q=tesla&from=2023-12-19&sortBy=publishedAt&apiKey=9e83f60031e144e280e3a7de9566ffbe'

    try{
        const newsFetch= await fetch(newsURL)
        const newsFinsh= await newsFetch.json()
        console.log(newsFinsh)
        // const newsDoccc=document.querySelector('.news')
        for(let i=0;i<9;i++){
            document.querySelector('.news').innerHTML+=`
            <div class="  col-12 col-md-6 col-lg-4">
            <div class="card m-2">
             <img src=${newsFinsh.articles[i].urlToImage} class="card-img-top"  height="300px">
            <div class="card-body">
              <h5 class="card-title">${newsFinsh.articles[i].title}</h5>
              <p class="card-text">${newsFinsh.articles[i].description}</p>
              <a href=${newsFinsh.articles[i].url} class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>`
   
        }
        }
    catch(Err){}
}
// newsDoccc.innerHTML=`
// <div class="card" style="width: 18rem;">

// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`