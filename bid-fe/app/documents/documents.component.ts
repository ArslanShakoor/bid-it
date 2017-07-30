import { Component } from "@angular/core";
import { Document } from "./document";

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentComponent{
	documents: Document[] = [{
		title: "first doc",
		description: "first doc testing",
		file_url: "http://first file",
		created_at: "03/11/2017",
		image_url: "http://file.jpg"
    },
    {
		title: "2nd doc",
		description: "first doc testing",
		file_url: "http://first file",
		created_at: "03/11/2017",
		image_url: "http://file.jpg"
    },
    {
		title: "3rd  doc",
		description: "first doc testing",
		file_url: "http://first file",
		created_at: "03/11/2017",
		image_url: "http://file.jpg"
    }
    ]




}