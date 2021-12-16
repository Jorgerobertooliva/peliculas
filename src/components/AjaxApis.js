import React, {Component} from "react";
 
let url = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_video=false&page=1")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
          },
          // Nota: es importante manejar errores aquí y no en 
          // un bloque catch() para que no interceptemos errores
          // de errores reales en los componentes.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            
            <table class="center">
            <tr>
                <th><h2>Nombre Película</h2></th>
                <th><h2>Portada</h2></th>
            </tr>
            {items.map(item => (
                
                
                    <tr>
                        <th><li key={item.id}>
                {item.title} 
              </li></th>
                        <th><img src={url+item.poster_path} alt={item.title} /></th>
                    </tr>
                
              

              
             
            ))}
          </table>
        );
      }
    }
  }