import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import Header from './components/Header'
import Books from './components/Books'
import Spinner from './components/Spinner'
import Empty from './components/Empty'
import Book from './components/Book'

class App extends Component {

  constructor(){
    super();
    this.state = {
      books: {},
      booksFound: 'none',
      selectedBook: 'none',
      searchText: '' 
    }
  }

  search = async (search) => {
    this.setState({
      booksFound: 'searching'
    })

    const API_Key = `Enter your API_Key here`
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&orderBy=newest&prettyPrint=true&key=${API_Key}`
    await axios.get(url)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          if(res.data.totalItems === 0){
            this.setState({
              booksFound: 'no books found'
            })
          }
          if(res.data.totalItems > 0){
            let a = (this.filter(res.data.items))
            this.setState({
              books: a,
              booksFound: 'all'
            })
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  filter = (items) => {
    let books = items.map(item => {
      return {
        image: item.volumeInfo.imageLinks ?
          item.volumeInfo.imageLinks.thumbnail : false,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        categories: item.volumeInfo.categories ?
          item.volumeInfo.categories : 'General Publications',
        description: item.volumeInfo.description,
        ratings: item.volumeInfo.averageRating ?
          item.volumeInfo.averageRating : 0,
        totalRatings: item.volumeInfo.ratingsCount ?
          item.volumeInfo.ratingsCount : 0,
        publisher: item.volumeInfo.publisher ?
          item.volumeInfo.publisher : 'Not provided',
        published_date: item.volumeInfo.publishedDate ?
          item.volumeInfo.publishedDate : 'Not provided',
        pages: item.volumeInfo.pageCount,
        salable: item.saleInfo.saleability === 'FOR_SALE' ? {
          price: item.saleInfo.retailPrice,
          link: item.saleInfo.buyLink
        } : false,
      }
    })
    return books
  }

  selBook(book){
    this.setState({booksFound: 'searching'})

    setTimeout(()=>{
      this.setState({
        selectedBook: book,
        booksFound: 'selected'
      })
    }, 300)
  }

  render(){
    return (
      <div className="App">
        <div className="app_container">

          <Header 
            click={(text)=>this.search(text)} />

          <div className="body">
            { this.state.booksFound === 'none' ? 
              <Empty text={this.state.booksFound}/> : 
                this.state.booksFound === 'no books found' ? 
                  <Empty text={this.state.booksFound}/> :
                    this.state.booksFound === 'all' ? 
                      <Books 
                        books={this.state.books}
                        selectBook={(book)=>this.selBook(book)}/> : 
                          this.state.booksFound === 'searching' ? 
                            <Spinner /> : this.state.booksFound === 'selected' ?
                              <Book 
                                book={this.state.selectedBook}/> : null }
          </div>
      </div>
    </div>
    )
  }
}

export default App;