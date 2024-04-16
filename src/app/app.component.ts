import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { RouterModule } from "@angular/router";
import {routes} from "./app.routes";

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simpleApp';
}
