import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ScaffoldComponent } from '@app/presentation/components/scaffold/scaffold.component'

@NgModule({
  declarations: [ScaffoldComponent],
  imports: [CommonModule],
  exports: [ScaffoldComponent],
})
export class ScaffoldModule {}
