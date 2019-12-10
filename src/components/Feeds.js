import React, {Component, Fragment} from 'react'
import Retweet from './Retweet'
import moment from 'moment'

class Feed extends Component{


  hashtags(hashtag, tags){
    let content  = hashtag.map(h => {
      return (<i
                className='hashtags'
                onClick={()=>this.props.clickTags(h)}> {tags}{h}</i>)
    })
    return content
  }

  time(t){
    var a = moment.now()
    var b = moment(t).utc().valueOf()

    let tx = ''
    let timeDif = a - b
    if(timeDif < 86400) tx = this.parseText(timeDif / 24 / 3600 * 60) + 'h'
    if(timeDif < 3600 ) tx = this.parseText(timeDif / 3600 * 60) + 'm'
    if(timeDif < 1 ) tx = 'now'
    return tx
  }

  parseText(t){
    return Math.floor(t)
  }


  render(){

    let feed;

    if(this.props.noData === 0) {
      feed = <div className="feed">
                <h5>No results found</h5>
             </div>
    }

    if(this.props.feeds.length > 0){
      feed = this.props.feeds.map((f, i )=> {
        
        return (<Fragment key={i}>
                  <div className="feed">
                    { f.retweetted ? 
                      <div className="tweet-header">
                        <p><i className="fas fa-retweet"></i> <i>@{f.user.sceenName}</i> retweeted</p>
                      </div> : null }

                    <div className="tweet-info">

                      <div className="tweet-info-image">
                        <img src={f.user.userImage} alt={f.user.name} />
                      </div>

                      <div className="tweet-info-text">
                        <div className="tweet-info-details">
                          <p className="tweet-person-info"><b>{f.user.name}</b> <i>@{f.user.screenName}</i> - {this.time(f.created)}</p>
                          <p className="tweet-text">{f.textContent}</p>
                        </div>

                        { f.retweetted ? 
                            <Retweet 
                              userImage={f.retweetContent.user.userImage}
                              name={f.retweetContent.user.name}
                              screenName={f.retweetContent.user.screenName}
                              textContent={f.retweetContent.user.textContent}
                              media={f.media}
                              time={this.time(f.retweetContent.created)}/> : 
                                f.media ? 
                                  <div className="tweet-image-content">
                                    <img src={f.media} alt={f.user.name}/>
                                  </div> : null }

                        <div className='tweet-hash'>
                          <p>{f.hashtags ? 
                            this.hashtags(f.hashtags, '#') : null}</p>
                          <p className='mentions'>{f.mentions ? 
                            this.hashtags(f.mentions, '@') : null}</p>
                        </div>

                        <div className='tweet-favorites'>
                          <p><i className="far fa-heart"></i> {f.likes}</p>
                          <p><i className="fas fa-retweet"></i> {f.retweetedTimes}</p>
                        </div>

                      </div>
                    </div> 
                  </div> 
                </Fragment>)
      })
    }

    return (
      <Fragment>
        {feed}
      </Fragment>
    )}
}

export default Feed
