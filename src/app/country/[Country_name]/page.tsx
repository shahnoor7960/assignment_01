
export default function CountryName({ params }:{params:{Country_name:string}})
 {
    const countries:{
        name:string,
        population:number,
        capital:string
    }[]=[{
        name:"Pakistan",
        population:1000,
        capital:"Islamabad"
    },
    {
        name:"India",
        population:2000,
        capital:"Delhi"
    },
    {
        name:"Korea",
        population:3000,
        capital:"Seoul"
    },
    {
        name:"Turkey",
        population:4000,
        capital:"Istambul"
    },
    {
        name:"Japan",
        population:5000,
        capital:"Tokyo"
    }
]


function findCountry(dynamic_segment:string){
return countries.find(
    country=>country.name.toLowerCase()
==dynamic_segment.toLowerCase()
)
}
const result=findCountry(params.Country_name);
    return (
     <div>
        {
            result ? (
                <> <h1>Country Name:{result.name}</h1>
      <h1>Capital:{result.capital} </h1>
      <h1>Population:{result.population} </h1>
                </>
            ):(
<h1>
    country not found
</h1>
            )
        }
     
      </div>
    );
  }
  