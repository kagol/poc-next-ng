import { AfterViewInit, Component, OnInit, signal, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NextClientService } from '@opentiny/next-ng';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected title = 'ng-demo-next';
  protected sessionId = signal('');
  protected version = VERSION.full;

  constructor(
    private nextClientService: NextClientService,
  ) {}

  async ngOnInit() {
    const { sessionId } = await this.nextClientService.useNextClient({
      clientInfo: { name: 'my-project', version: '1.0.0' },
      proxyOptions: { url: 'https://agent.icjs.ink/sse', token: '' }
    })

    this.sessionId.set(sessionId)
  }

  ngAfterViewInit() {
    this.nextClientService.connect()
  }
}
