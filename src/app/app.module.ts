import { NgModule } from "@angular/core";
import { Header } from "./header/header";
import { Result } from "./result/result";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations:[App,Header,Result],
    bootstrap:[App],
    imports:[BrowserModule,UserInputModule]
})

export class AppModule{}