import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CountToModule } from 'angular-count-to';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
// import { AgmCoreModule } from '@agm/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GoogleMapsModule } from "@angular/google-maps";

import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

@NgModule({
  declarations: [DefaultComponent, EcommerceComponent],
  imports: [
    CommonModule,
    ChartistModule,
    CarouselModule,
    NgChartsModule,
    NgApexchartsModule,
    SharedModule,
    GoogleMapsModule,
    CKEditorModule,
    CountToModule,
    NgbModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
