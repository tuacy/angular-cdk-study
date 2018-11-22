import {Component} from '@angular/core';
import {getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior} from '@angular/cdk/platform';

@Component({
  selector: 'app-cdk-platform',
  templateUrl: './cdk-platform.component.html',
  styleUrls: ['./cdk-platform.component.less']
})
export class CdkPlatformComponent  {

    supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
    supportsPassiveEventListeners = supportsPassiveEventListeners();
    supportsScrollBehavior = supportsScrollBehavior();

    constructor(public platform: Platform) {}
}
