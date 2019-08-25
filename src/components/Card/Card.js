import React, { Component } from 'react'
import data from '../Card/Data';
import './Card.css';

export default class Card extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        }
    }
    changeCounter = (num) => {
        if(this.state.counter === data.length -1 && num > 0) {
            this.setState({counter: 0});
        } else if(this.state.counter <= 0 && num <0) {
            this.setState({counter: data.length -1});
        } else {
            this.setState({counter: this.state.counter + num})
        }
    }

    render() {
        let movies = data[this.state.counter].favoriteMovies.map((val, i, arr) => {
            return <li>{val}</li>;
        })
        return (
            <div>
                <main className='card-body'>
                    <h1 className='num-counter'>{this.state.counter + 1}/{data.length}</h1>
                    <h1>{data[this.state.counter].name.first} {data[this.state.counter].name.last}</h1>
                    <h1>From: {data[this.state.counter].city}, {data[this.state.counter].country}</h1>
                    <h1>Job Title: {data[this.state.counter].title}</h1>
                    <h1>Employer: {data[this.state.counter].employer}</h1>
                    <br />
                    <h1>Favorite Movies:</h1>
                    <ol className='movie-list'>
                        {movies}
                    </ol>
                </main>
                <div className='buttons'>
                    <h2 className='previous-button' onClick= {() => this.changeCounter(-1)}>{`< Previous`}</h2>
                    <h2 className='next-button' onClick={() => this.changeCounter(1)}>Next ></h2>
                </div>
            </div>
        )
    }
}
