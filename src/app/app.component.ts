import { Component, OnInit } from "@angular/core";
import Cite from "citation-js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "citationjs";

  ngOnInit() {
    let example = new Cite("Q21972834");

    let output = example.format("bibliography", {
      format: "html",
      template: "apa",
      lang: "en-US",
    });

    console.log(output);
  }
}
