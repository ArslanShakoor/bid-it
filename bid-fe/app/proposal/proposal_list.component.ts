import { Component } from "@angular/core";
import { Proposal } from "./proposal"

@Component({
	moduleId: module.id,
	selector: "component-list",
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent{
  proposal_one: Proposal = new Proposal(92, "Arslan", "http://google.com", 11,
  	"Ruby On Rails", 17, 2, "example@example.com")
  proposal_two: Proposal = new Proposal(12, "Arslan", "http://google.com", 11,
  	"Ruby On Rails", 17, 2, "example@example.com")
  proposal_three: Proposal = new Proposal(16, "Arslan", "http://google.com", 11,
  	"Ruby On Rails", 17, 2, "example@example.com")
  proposals: Proposal[] = [
  this.proposal_one,
  this.proposal_two,
  this.proposal_three,	
  ]

}