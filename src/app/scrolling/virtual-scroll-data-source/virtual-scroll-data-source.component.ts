import {Component} from '@angular/core';
import {CustomerDataSource} from "./customer-data-source";

@Component({
  selector: 'app-virtual-scroll-data-source',
  templateUrl: './virtual-scroll-data-source.component.html',
  styleUrls: ['./virtual-scroll-data-source.component.less']
})
export class VirtualScrollDataSourceComponent {

ds = new CustomerDataSource();

}
