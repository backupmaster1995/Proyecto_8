import React from 'react'
import PropTypes from 'prop-types';
import News from "./News"

export default function NewsList({APInews}) {
    return (
        <div className="row">
            {
                APInews.map((news)=> (
                    <News
                        key={news.url}
                        news={news}
                    />
                ))
            }
        </div>
    )
}

NewsList.propTypes = {
    APInews : PropTypes.array.isRequired
}



