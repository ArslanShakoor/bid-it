import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


import { HomepageComponent } from './homepage/homepage.component'
import { DocumentComponent } from './documents/documents.component'
import { ProposalListComponent } from './proposal/proposal_list.component'
import { ProposalNewComponent } from './proposal/proposal-new.component'
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent  },
  {path: 'documents', component: DocumentComponent  },
  {path: 'proposals', component: ProposalListComponent },
  {path: 'proposal/new', component: ProposalNewComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

	})

export class AppRoutingModule{ }
