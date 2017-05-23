docpadConfig = {
    templateData:
        site:
            url: "http://thinkjava.net"
            title: "ThinkJava - сообщество харьковских java разработчиков"
            keywords: "java, development"
            description: ""
                
        styles: [
            "css/bootstrap.css"
            "css/bootstrap-theme.css"
            "css/font-awesome.css"
            "http://fonts.googleapis.com/css?family=Open+Sans:400,800,700italic,700"
            "css/main.css"
                ""
        ]
            
        scripts: [
            "http://code.jquery.com/jquery-1.11.0.min.js"
            "js/bootstrap.js"
        ]
        getCuttedContent: (content) ->
            i = content.search('<!-- more -->')
            if i >= 0
                content[0..i-1]
            else
                content

        hasReadMore: (content) ->
            content.search('<!-- more -->') >= 0
        
            
    collections:
        posts: (database) ->
            database.findAllLive({type:$has:'blog'}, [date: -1])
        archive: (database) ->
            database.findAllLive({archived:true}, [date: -1])
        landingArchive: (database) ->
            database.findAllLive({archived:true, landing:true}, [date: -1])
        landing: (database) ->
            database.findAllLive({landing:true}, [date: -1])
        annonce: (database) ->
            database.findAllLive({annonce:true}, [date: -1])
            
    plugins:
        cleanurls:
            static: true
        rss:
            default:
                  collection: 'posts'
                  url: '/rss.xml'
              
        moment:
            lang: 'ru'
            formats: [
                {raw: 'date', format: 'DD.MM.YYYY', formatted: 'humanDate'}
                {raw: 'date', format: 'DD-MM-YYYY', formatted: 'computerDate'}
                {raw: 'annonceDate', format: 'YYYY-MM-DD[T]HH:mm:ss.sss[Z]', formatted: 'annonceDateStr'}
                {raw: 'annonceDate', format: 'YYYY-MM-DD HH:mm', formatted: 'annonceDateTime'}                
                {raw: 'annonceDate', format: 'D MMMM', formatted: 'annonceDateShort'}                
            ]

        sitemap:
            cachetime: 600000
            changefreq: 'weekly'
            priority: 0.5
            filePath: 'sitemap.xml'
    environments:
        static:
            templateData:
                site:
                    url: "https://thinkjava.io"
        development:
            templateData:
                site:
                    url: "http://localhost:9778"
}

module.exports = docpadConfig

