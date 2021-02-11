import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
//import { InMemoryDataService } from "./in-memory-data.service";

//import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar";
import { ProductListComponent } from "./product-list/product-list";
import { ProductAlertsComponent } from "./product-alerts/product-alerts";
import { ProductDetailsComponent } from "./product-details/product-details";
import { CartComponent } from "./cart/cart";
import { ShippingComponent } from "./shipping/shipping";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
// import { HeroesComponent } from "./heroes/heroes.component";
// import { HeroSearchComponent } from "./hero-search/hero-search.component";
// import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent }
    ])
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false
    // })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
    // DashboardComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // MessagesComponent,
    // HeroSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
