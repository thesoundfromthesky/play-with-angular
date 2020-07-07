import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "layout-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  today = Date.now()
  constructor() {}

  ngOnInit() {}
}
