import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


import { HomepageComponent } from './homepage/homepage.component'
import { DocumentComponent } from './documents/documents.component'
import { ProposalListComponent } from './proposal/proposal_list.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent  },
  {path: 'documents', component: DocumentComponent  },
  {path: 'proposals', component: ProposalListComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

	})

export class AppRoutingModule{ }
