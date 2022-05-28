import { OrderItems } from "./order-items.model";
import { User } from "./user.model";

export class Order {
    id?:String;
    orderItems: OrderItems[]=[];
    // orderItems?: OrderItems;
    shippingAddress1?:String;
    shippingAddress2?:String;
    city?:String;
    zip?:String;
    country?:String;
    phone?:String;
    status?:String;
    totalPrice?:String;
    user?:User;
    dateOrdered?:any;
}
