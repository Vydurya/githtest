import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Newsdto } from './news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsservice:NewsService){}

    @Post()
    createnews(@Body() news:Newsdto){
        return this.newsservice.addnews(news);
    }

    @Get(':searchkey')
    searchnews(@Param('searchkey') searchkey:string ){
        return this.newsservice.getarticle(searchkey);
    }

}