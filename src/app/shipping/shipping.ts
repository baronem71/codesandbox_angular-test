import { Component, OnInit } from "@angular/core";
import { CartService } from '../cart.service';

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.html",
  styleUrls: ["./shipping.css"]
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
