import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
 

class App extends React.Component {

    async onSearchSubmit(term){
        //asyn based data fetching 
        const response = await Unsplash.get('search/photos' , {
            params: {query: term},

        });
        console.log(response.data.results.length);

        // normal fetching of data using access key
        // axios.get('https://api.unsplash.com/photos' , 
        // {
        //     params: {query: term},
        //     headers: {
        //         Authorization: 'Client-ID 50f9214be67e04cb9d09617dce68b437befe29dab0532a7e67b688e6b15661f5'
        //     }
        // }
        // ).then(response => {
        //     console.log(response.data[0].urls);
        // })
        //console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;