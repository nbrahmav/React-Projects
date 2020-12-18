import React from 'react';

const Book = ({items}) => {
    return(
        <div className="booklist">
            {
                items.map((bookItem) => {
                    const {id,title, author,image,price, category} = bookItem;

                    return <article key={id} className="book">
                        <img src={image} alt={title} />
                        <div className="item-list">
                          <h4>{title}</h4>
                          <h4>${price}</h4>     
                         <p>{author}</p>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default Book;