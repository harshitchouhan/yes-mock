import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";

@Component({
  selector: "app-advertisment",
  templateUrl: "./advertisment.component.html",
  styleUrls: ["./advertisment.component.scss"],
})
export class AdvertismentComponent implements OnInit {
  checked = true;

  subs = new Subscription();

  adSequence = "adSequence";
  data = [
    {
      id: 1,
      url: "assets/images/lightgallry/01.jpg",
      html: `
      <div class="card">
        <div class="card-body pb-0">
          <div class="ribbon ribbon-clip ribbon-secondary">1</div>
          <div class="row">
            <div class="col-12">
              <img src="assets/images/lightgallry/01.jpg" alt="Banner" class="w-100 handle" />
            </div>
            <div class="col-12 col-md-1 d-flex align-items-center">
              <label class="col-form-label m-r-10">Active</label>
              <div class="media-body text-start icon-state">
                <label class="switch m-0">
                  <input type="checkbox" [checked]="checked" (change)="checked = !checked" /><span class="switch-state" [ngClass]="{ 'bg-success': checked, 'bg-danger': !checked }"></span>
                </label>
              </div>
            </div>
            <div class="col-12 col-md-1 offset-md-9 d-flex">
              <span class="text-danger f-32 delete"><i class="icofont icofont-bin delete" id="1"></i></span>
            </div>
          </div>
        </div>
      </div>
      `,
    },
    {
      id: 2,
      url: "assets/images/lightgallry/01.jpg",
      html: `
      <div class="card">
        <div class="card-body pb-0">
          <div class="ribbon ribbon-clip ribbon-secondary">2</div>
          <div class="row">
            <div class="col-12 ">
              <img src="assets/images/lightgallry/02.jpg" alt="Banner" class="w-100 handle" />
            </div>
            <div class="col-md-1 d-flex align-items-center">
              <label class="col-form-label m-r-10">Active</label>
              <div class="media-body text-start icon-state">
                <label class="switch m-0">
                  <input type="checkbox" [checked]="checked" (change)="checked = !checked" /><span class="switch-state" [ngClass]="{ 'bg-success': checked, 'bg-danger': !checked }"></span>
                </label>
              </div>
            </div>
            <div class="col-md-1 offset-9 d-flex">
              <span class="text-danger f-32 delete"><i class="icofont icofont-bin delete" id="2"></i></span>
            </div>
          </div>
        </div>
      </div>
      `,
    },
    {
      id: 3,
      url: "assets/images/lightgallry/01.jpg",
      html: `
      <div class="card">
        <div class="card-body pb-0">
          <div class="ribbon ribbon-clip ribbon-secondary">3</div>
          <div class="row">
            <div class="col-12">
              <img src="assets/images/lightgallry/01.jpg" alt="Banner" class="w-100 handle" />
            </div>
            <div class="col-md-1 d-flex align-items-center">
              <label class="col-form-label m-r-10">Active</label>
              <div class="media-body text-start icon-state">
                <label class="switch m-0">
                  <input type="checkbox" [checked]="checked" (change)="checked = !checked" /><span class="switch-state" [ngClass]="{ 'bg-success': checked, 'bg-danger': !checked }"></span>
                </label>
              </div>
            </div>
            <div class="col-md-1 offset-9 d-flex">
              <span class="text-danger f-32 delete"><i class="icofont icofont-bin delete" id="3"></i></span>
            </div>
          </div>
        </div>
      </div>
      `,
    },
    {
      id: 4,
      url: "assets/images/lightgallry/01.jpg",
      html: `
      <div class="card">
        <div class="card-body pb-0">
          <div class="ribbon ribbon-clip ribbon-secondary">4</div>
          <div class="row">
            <div class="col-12">
              <img src="assets/images/lightgallry/01.jpg" alt="Banner" class="w-100 handle" />
            </div>
            <div class="col-md-1 d-flex align-items-center">
              <label class="col-form-label m-r-10">Active</label>
              <div class="media-body text-start icon-state">
                <label class="switch m-0">
                  <input type="checkbox" [checked]="checked" (change)="checked = !checked" /><span class="switch-state" [ngClass]="{ 'bg-success': checked, 'bg-danger': !checked }"></span>
                </label>
              </div>
            </div>
            <div class="col-md-1 offset-9 d-flex">
              <span class="text-danger f-32 delete"><i class="icofont icofont-bin delete" id="4"></i></span>
            </div>
          </div>
        </div>
      </div>
      `,
    },
    {
      id: 5,
      url: "assets/images/lightgallry/01.jpg",
      html: `
      <div class="card">
        <div class="card-body pb-0">
          <div class="ribbon ribbon-clip ribbon-secondary">5</div>
          <div class="row">
            <div class="col-12">
              <img src="assets/images/lightgallry/01.jpg" alt="Banner" class="w-100 handle" />
            </div>
            <div class="col-md-1 d-flex align-items-center">
              <label class="col-form-label m-r-10">Active</label>
              <div class="media-body text-start icon-state">
                <label class="switch m-0">
                  <input type="checkbox" [checked]="checked" (change)="checked = !checked" /><span class="switch-state" [ngClass]="{ 'bg-success': checked, 'bg-danger': !checked }"></span>
                </label>
              </div>
            </div>
            <div class="col-md-1 offset-9 d-flex">
              <span class="text-danger f-32 delete"><i class="icofont icofont-bin delete" id="5"></i></span>
            </div>
          </div>
        </div>
      </div>
      `,
    },
    {
      id: 6,
      url: "assets/images/lightgallry/01.jpg",
      html: `
      <div class="card">
        <div class="card-body pb-0">
          <div class="ribbon ribbon-clip ribbon-secondary">6</div>
          <div class="row">
            <div class="col-12 handle">
              <img src="assets/images/lightgallry/01.jpg" alt="Banner" class="w-100 handle" />
            </div>
            <div class="col-md-1 d-flex align-items-center">
              <label class="col-form-label m-r-10">Active</label>
              <div class="media-body text-start icon-state">
                <label class="switch m-0">
                  <input type="checkbox" [checked]="checked" (change)="checked = !checked" /><span class="switch-state" [ngClass]="{ 'bg-success': checked, 'bg-danger': !checked }"></span>
                </label>
              </div>
            </div>
            <div class="col-md-1 offset-9 d-flex">
              <span class="text-danger f-32 delete"><i class="icofont icofont-bin delete" id="6"></i></span>
            </div>
          </div>
        </div>
      </div>
      `,
    },
  ];

  public removeEventListener: () => void;

  constructor(private dragulaService: DragulaService, private renderer: Renderer2, private elementRef: ElementRef) {
    dragulaService.createGroup("adSequence", {
      moves: (el, container, handle) => {
        return handle.className.includes("handle");
      },
    });
  }

  ngOnInit() {
    this.removeEventListener = this.renderer.listen(this.elementRef.nativeElement, "click", (event) => {
      console.log();
      if (event.target.className.includes("delete")) {
        console.log(event);
      }
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy("adSequence");
  }
}
