async function getCountryByName(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch country');
    }
    
    return response.json();
    
  }
  
  export default async function CountryPage({ params }) {
    console.log("This is params", await params);
    
    try {
      const countries = await getCountryByName(params.name);
     
      console.log("countries data:", countries); 
      const country = countries[0];
  
      if (!country) {
        return <div>Country not found</div>;
      }
  
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>
          
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Official Name</h2>
              <p>{country.name.official}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Capital</h2>
              <p>{country.capital?.[0] || 'No capital'}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Region</h2>
              <p>{country.region}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Population</h2>
              <p>{country.population.toLocaleString()}</p>
            </div>
            
            {country.flags?.svg && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Flag</h2>
                <img 
                  src={country.flags.svg} 
                  alt={`Flag of ${country.name.common}`}
                  className="w-64 border"
                />
              </div>
            )}
          </div>
        </div>
      );
    } catch (error) {
      return <div>Error: {error.message}</div>;
    }
  }