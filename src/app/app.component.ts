import { Component, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { LazyLoaderService } from 'iwe7-lazy-load';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
     // 开始渲染懒组件
     this.lazyLoader.init(this.ele.nativeElement, this.view);
  }
  @ViewChild('ele') ele: ElementRef;
  constructor(
    public lazyLoader: LazyLoaderService,
    public view: ViewContainerRef
  ) { }

  ngOnInit() {
   
  }
}
