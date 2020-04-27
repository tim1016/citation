import { Component, OnInit, NgZone } from "@angular/core";
const Cite = window.require('citation-js');

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "citationjs";

  async ngOnInit() {
    const example = await Cite.async("Q21972834");

    const output = example.format("bibliography", {
      format: "html",
      template: "apa",
      lang: "en-US",
    });

    document.body.innerHTML = output;
  }
}
