window.addEventListener('load', news)

async function news(){
    const newsURL='https://dummyjson.com/products'

    try{
        const newsFetch= await fetch(newsURL)
        const newsFinsh= await newsFetch.json()
        console.log(newsFinsh)
        const newsDoccc=document.querySelector('.news')
        for(let i=0;i<9;i++){
            document.querySelector('.news').innerHTML+=`
            <div class="col-12 col-md-6 col-lg-4">
            <div class="cardd border-0 rounded border border-secondary p-3 mb-4">
              <div class="card-imgs d-flex justify-content-center align-items-center">
                <img
                  src=${newsFinsh.products[i].images[0]} style="height:300px "
                  alt=""
                />
              </div>
              <div class="card-bottom">
                <div class="card-title "><h3> ${newsFinsh.products[i].title}</h3></div>
                <div class="card-text"> ${newsFinsh.products[i].description}</div>
                <button class="card-date btn btn-light my-3 "> ${newsFinsh.products[i].price}$</button>
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