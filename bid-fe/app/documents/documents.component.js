"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentComponent = (function () {
    function DocumentComponent() {
        this.pageTitle = "Documents List";
        this.documents = [{
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
        ];
    }
    DocumentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html'
        })
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=documents.component.js.map