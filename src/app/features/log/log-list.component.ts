import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { LogStore } from './store/log.store';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-log-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, DatePipe],
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.scss',
})
export class LogListComponent {
  public readonly logs = inject(LogStore).logs;
}
