import HttpUtil from '../util/httpUtil'

const baseUrl = 'http://gank.io/api'

// http://gank.io/api/data/Android/10/1
// http://localhost:3000/gank/data/Android/10/1

let handleGank = async (ctx, next) => {
    let url = ctx.req.url;
    // console.log('gank url-->' + url)
    if (url.indexOf("/gank") > -1) {
        let queryUrl = url.replace('/gank', '')
        queryUrl = baseUrl + queryUrl;
        console.log('queryUrl url-->' + queryUrl)
        let result = await HttpUtil.get({
            url: queryUrl
        })
        ctx.body = JSON.stringify(result)
    }
    await next()
};

module.exports = handleGank
