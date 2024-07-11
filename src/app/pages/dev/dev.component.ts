import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LogListComponent } from '../../features/log/log-list.component';
import { LogStore } from '../../features/log/store/log.store';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, LogListComponent],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss',
})
export class DevComponent {
  private readonly logStore = inject(LogStore);

  public onClick() {
    this.logStore.log('DevComponent onClick()');
  }
}
