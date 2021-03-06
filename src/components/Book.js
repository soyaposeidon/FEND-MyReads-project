import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    render() {
        const { book, handleChange } = this.props

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={book && book.imageLinks && book.imageLinks.thumbnail && { backgroundImage: `url(${book.imageLinks.thumbnail})`, width: '100%', height: '100%' }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={book.shelf || "none"} onChange={(event) => handleChange(event, book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
    static propTypes = {
        book: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired
    }
}

export default Book