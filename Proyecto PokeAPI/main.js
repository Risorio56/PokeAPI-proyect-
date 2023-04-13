
// const arr = [];
// const pokemonData = async(id)=>{
//     let respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
//     let datos = await respuesta.json();
//     let imagen = datos.sprites.other.home.front_default;
//     let nombre = datos.forms[0].name;
    
//     for (i=1; i<=3; i++) {
//         let result2 = arr.push(pokemonData (i))
//          console.log (result2)
//      }   
// }
// pokemonData()


// const arr=[];
// const pokemonData = async(id)=>{
// for (let i=1;i<=3;i++){
//     try{
//         let respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
//         let datos = await respuesta.json()
//         let imagen =  await datos.sprites.other.home.front_default;
//         // console.log(datos.sprites.other.home.front_default);
//         let nombre = await datos.forms[0].name;
//         let result=arr.push(datos.sprites.other.home.front_default);
        
//         console.log(result)
        
//     }
    
//     catch (error){
//         console.log(error);
//     }
//     finally {
//         console.log("todo ok");
//     }
//    }}
//    pokemonData()


// let img = data.forms[0].name;
// let nomb = data.sprites.other.home.front_default
// console.log (data);

//Empieza, lo anterior son pruebas hasta que descifre como se hacia.


const arr = [];

const pokemonData = async (cont) => {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${cont}`);
    const data= await response.json();
    arr.push({nombre:(data.forms[0].name), imagen:(data.sprites.other.home.front_default), tipo: (data.types[0].type.name)});
    return data; 
}

const init= async () => {
    for (let i=1; i<=151; i++){
        await pokemonData(i);
        main$$ = document.querySelector("#pokedex");
        main$$.innerHTML += `<li class="${arr[i-1].tipo}">${arr[i-1].nombre} <img class="img" src="${arr[i-1].imagen}"></li>`;
    }
    console.log (arr)  
}
init()







