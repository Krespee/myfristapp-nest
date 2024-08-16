import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HomeController {
    @Get("/")
    index(@Req() request: Request, @Res() response: Response){
        response.status(200).json({
            "message": "hello WOrld"
        }) 
    }

    @Get("ticket/:num")
    getNumber(@Param("num", ParseIntPipe) num: number){
        return num + 14
    }
    
    @Get("active/:status")
    isUserActive(@Param("status", ParseBoolPipe) status: boolean){
        return status
    }

    @Get("greet")
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name:string, age:number}){
        return `hello ${query.name}, you are ${query.age} years old`
    }

    @Get("error")
    @HttpCode(500)
    errorPage(){
        return "404 not foudndd"
    }

    @Get("notfound")
    @HttpCode(404)
    notFoundPage(){
        return "404 not foundd"
    }


}
