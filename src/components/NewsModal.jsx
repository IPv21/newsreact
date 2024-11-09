import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewsModal.css'

const NewsModal = ({ show, article, onClose }) => {

    if(!show) {
        return null
    } else {
        return (
            <div className='modal-overlay'>
                <div className='modal-content'>

                    <span className='close-button' onClick={onClose}>
                        <i className="i fa-solid fa-xmark"></i>
                    </span>
                    {article  && (
                              <>             <img src={article.image} alt="Modal Image"  className='modal-image'/>
                                            <h2 className='modal-title'>{article.title}</h2>
                                            <p className='modal-source'>Source: {article.source.name} </p>
                                            <p className='modal-date'>
    {new Date(article.publishedAt).toLocaleString(
        'en-us', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }
    )

    }
                                            </p>
                                            <p className='modal-content-text'>{article.content}</p>
                                            <a href={article.url} 
                                             target='_blank'
        rel='noreferrer'
        className='read-more-link'>Read More</a> </>
                    )}
                </div>
            </div>
        )
    }
    

}

export default NewsModal
