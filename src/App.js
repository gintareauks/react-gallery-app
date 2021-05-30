import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config'

// Component imports 
import Nav from './Components/Nav'
import PhotoList from './Components/PhotoList'
import Search from './Components/SearchForm'
import NotFound from './Components/NotFound';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            deerPhotos: [],
            bisonPhotos: [],
            birdPhotos: [],
            tag: '',
            loading: true
        }
    }

    // Handle search based on the user input
    handleSearch = (query = 'deet') => {
        this.setState({loading: true});
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                if(query === 'deer') {
                this.setState({ deerPhotos: response.data.photos.photo, loading: false});
            }
            else if (query === 'bison') {
                this.setState({ bisonPhotos: response.data.photos.photo, loading: false})
            } 
            else if (query === 'bird') {
                this.setState({ birdPhotos: response.data.photos.photo, leading: false})
            }
            else {
                this.setState({
                    photos: response.data.photos.photo,
                    tag: query, 
                    loading: false
                })
            }
    })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    // Call Handle Search when App component mounted
    componentDidMount() {
        this.handleSearch('deer');
        this.handleSearch('bison');
        this.handleSearch('bird');
    }

    // Rendering App component 
    render() {
        return (
            <BrowserRouter>
                <Search handleSearch = {this.handleSearch}/>
                <Nav />
                <div className="container">
                <Switch>
                    <Route exact path='/' render = {() => <Redirect to='/deer'/>} />

                    <Route exact path='/deer' render = {() =>
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <PhotoList tag='Deers' photos = {this.state.deerPhotos}/>
                    }/>

                    <Route exact path='/bison' render = {() => 
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <PhotoList tag='Bisons' photos = {this.state.bisonPhotos}/>       
                    }/>

                    <Route exact path='/bird' render = {() => 
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <PhotoList tag='Birds' photos = {this.state.birdPhotos}/>
                    }/>

                    <Route exact path='/search/:tag' render = {() =>
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <PhotoList tag={this.state.tag} photos = {this.state.photos}/>
                    }/>

                    <Route component={NotFound}/>

                </Switch>
                </div>
            </BrowserRouter>
          )
    }
}

export default App;

