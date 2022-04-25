// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let timeriid;
let container = document.getElementById("movies");

let data = JSON.parse(localStorage.getItem("amount"));

console.log(data);
    let hhh = document.getElementById("wallet");
    hhh.innerText = data;

const getdata = async (input) => {

    let url = `https://www.omdbapi.com/?s=${input}&apikey=4ffaa686`;

  try{
     let res = await fetch(url);

     let data1 = await res.json();
    const data2 = data1.Search;
    
    return data2;
     
    append(data2)
  }catch(err){
        console.log("err");
  }

}

const append = (info) => {

   container.innerHTML=null;
   info.map((el) =>{

    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = el.Title;

    let image = document.createElement("img");
    image.src = el.Poster;

    let button = document.getElementById("book_now")
    div.append(title,image,button);

    container.append(div);
   
});
}



const main = async() => {
    let input = document.getElementById("search").value;

    let info = await getdata(input);

    if(info == undefined){
        return false;
    }

    append(info);

   
}

const debounce = (main , delay)=>{
    if(timeriid){
        clearTimeout(timeriid);
    }

    timeriid = setTimeout(()=> {
        main();
    }, delay); 
}
  

 


    





