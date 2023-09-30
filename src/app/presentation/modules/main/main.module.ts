import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MainComponent } from '@app/presentation/modules/main/main.component'
import { MainRoutingModule } from '@app/presentation/modules/main/main.routing.module'

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
