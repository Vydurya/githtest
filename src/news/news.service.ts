import { Injectable } from '@nestjs/common';
import { Newsdto } from './news.dto';

@Injectable()
export class NewsService {

    private article: Newsdto[] = [];

    addnews(news: Newsdto){   
            this.article.push(news);
            return { message : `Article created`} ; 
    }

    getarticle(searchkey:string){
        const skey = searchkey.toLowerCase();
        let newlist = this.article.filter(s => s.headline.toLowerCase().includes(skey) );
        if(newlist.length == 0){
            return `No articles with word-${searchkey}`;
        }
        else if(this.article.length == 0){
            return `Article is empty`;
        }
        else{
        return newlist;
        }
    }
}
