import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainComponent } from '@app/presentation/modules/main/main.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'adicionar',
    loadChildren: () =>
      import('@app/presentation/modules/main/main.routing.module').then(
        m => m.MainRoutingModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
