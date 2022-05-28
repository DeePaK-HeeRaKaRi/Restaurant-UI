import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "./cart.service";

@NgModule({
    imports:[CommonModule],
    providers: []
})
// This orders module should initialize only once for the first time
export class CartOrder{
    constructor(cartService:CartService){
        cartService.initCartLocalStorage()
    }
}