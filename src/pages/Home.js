import React from 'react'
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';


export default function Home() {
    const [loading,setLoading] = React.useState(false);
    const [searchTerm,setsearchTerm] = React.useState('ad');
    const [cocktails,setcocktails] = React.useState([]);

    React.useEffect(()=>{

        console.log("object");
setLoading(true);
        async function getDrinks(){
    
            try{
                const response =  await  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await response.json();

                const {drinks} = data;

                if(drinks){
                    console.log('Drinks', drinks);

                    const newCockTails = drinks.map(item=>{
                       // console.log(item);
                            const {idDrink,strDrink,strDrinkThumb,
                            strAlcoholic,strGlass,strCategory
                            }=item;
                            return {id:idDrink,name:strDrink,image:strDrinkThumb
                            ,info:strAlcoholic,glass:strGlass,category:strCategory
                            };
                    });

                    setcocktails(newCockTails);
                }
                else{
                    setcocktails([]);
                    console.log('No Dirnks'); 
                     }

                     setLoading(false);

            }
            catch(error){
                console.log('Error: ', error);
            }
       
    }

    getDrinks();


    },[searchTerm]);
    return (
        <main>
            <SearchForm setsearchTerm={setsearchTerm}/>
            <CocktailsList loading={loading} cocktails={cocktails}/>
        </main>
    )
}
