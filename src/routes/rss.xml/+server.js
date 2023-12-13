import { Feed } from 'feed'

export const GET = () => {
    const site = 'https://bigfatcat-0725.github.io/' // 당신 사이트로 수정하세요.
   
    const feed = new Feed({
        title: '이것저것 제공하는 곳 | RSS Feed',
        description: '이것저것 제공하는 곳의 RSS | 필요한 모든 것을 제공합니다.',
        link: site,
        id: site,
        language: 'ko',
        copyright: 'dev | bigfatcat0725',
        author: {
            name: 'bigfatcat0725',
            email: 'bigfatcat0725@gmail.com'
        }
    })

    feed.addItem({
        title: '간단한 1RM 계산기',
        id: site,
        link: `${site}/1rm-calculator`,
        description: '간단하게 1RM을 계산해보세요.',
    })

  

    return new Response(feed.rss2(), { headers: { 'Content-Type': 'text/xml; charset=utf-8' } })
}