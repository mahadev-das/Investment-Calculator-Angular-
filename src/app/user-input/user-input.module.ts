import { NgModule } from "@angular/core";
import { UserInput } from "./user-input";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[UserInput],
    exports:[UserInput],
    imports:[FormsModule]
})

export class UserInputModule{

}