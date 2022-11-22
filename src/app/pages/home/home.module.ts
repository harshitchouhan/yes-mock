import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeHeaderComponent } from "./../../components/home-header/home-header.component";
import { HomeFooterComponent } from "./../../components/home-footer/home-footer.component";

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeFooterComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
