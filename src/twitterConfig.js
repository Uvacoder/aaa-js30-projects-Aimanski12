

export const APIKey = {
  consumer_key: '4NWVCCCfGQhAPqTb6my6CKeDU',
  consumer_secret: '0Irb6u7zqHJpK8cCRzzcjjqRywp0w2mlkWz1hXNCCFstHpStdK',
  access_token: '870018684181458945-o5LYTfpRYfcQCb6yiojxh6GLArs7Soo',
  access_token_secret: 'QbGbX7omLKMQhWtfPrlqhKW3bMHVYQ7N2y8HD08y0AEIy',
}


export const tweetData = (data) => {
  let d = data

   let tweet = d.map(t => {
      return {
        user: {
          name: t.user.name,
          screenName: t.user.screen_name,
          userImage: t.user.profile_image_url_https,
          location: t.user.location,
          
        },
        created: t.created_at,
        media: t.entities.media ? t.entities.media[0].media_url_https : false,
        hashtags: t.entities.hashtags.length > 0 ? 
                      sort(t.entities.hashtags, 'hash') : false,
        mentions: t.entities.user_mentions.length > 0 ? 
                      sort(t.entities.user_mentions, 'screen_name') : false,
        links: t.entities.urls.length > 0 ? 
                      t.entities.urls[0].expanded_url : false,
        textContent: t.text,
        likes: t.retweeted_status ? 
                      t.retweeted_status.favorite_count : t.favorite_count,
        retweetedTimes: t.retweet_count,
        retweetted: t.retweeted_status ? true :  false,
        retweetContent: t.retweeted_status ? reTweet(t.retweeted_status) : null,
      
      }
    })
  return tweet
}
 

const sort = (val, name) => {
  let items = val.map(a  => {
    if(name === 'screen_name'){
      return a.screen_name
    }
    if(name === 'hash'){
      return a.text
    }
  })
  return items
}
    
    
const reTweet = (r) => {
  // console.log(r)
  let rTwt = {
    user: {
      name: r.user.name,
      screenName: r.user.screen_name,
      userImage: r.user.profile_image_url_https,
      location: r.user.location,
      textContent: r.text,
    },
    created: r.created_at,
  }
  return rTwt
}