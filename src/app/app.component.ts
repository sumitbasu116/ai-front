import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from "./pages/chat/chat.component";
import { CricketComponent } from "./pages/cricket/cricket.component";
import { ImageComponent } from "./pages/image/image.component";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatComponent, CricketComponent, ImageComponent, SidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ai-front';
}
