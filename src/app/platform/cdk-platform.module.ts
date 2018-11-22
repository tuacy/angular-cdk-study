import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkPlatformRoutingModule} from './cdk-platform-routing.module';
import {CdkPlatformComponent} from './cdk-platform.component';
import {PlatformModule} from '@angular/cdk/platform';

@NgModule({
    imports: [
        CommonModule,
        PlatformModule,
        CdkPlatformRoutingModule
    ],
    declarations: [CdkPlatformComponent]
})
export class CdkPlatformModule {
}
