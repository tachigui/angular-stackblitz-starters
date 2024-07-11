import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogStore {
  private readonly serializeablelogs = signal<SerializableLog[]>([]);
  public readonly logs = computed(() =>
    this.serializeablelogs().map(({ id, message, timestamp }) => ({
      id,
      message,
      timestamp: new Date(timestamp),
    }))
  );

  constructor() {
    this.log('LogStore constructor');
  }

  public log(message: string): void {
    const log: SerializableLog = {
      id: crypto.randomUUID(),
      timestamp: new Date().getTime(),
      message,
    };
    this.serializeablelogs.update((value) =>
      [...value, log].sort((f, s) => f.timestamp - s.timestamp)
    );
  }
}

interface SerializableLog {
  id: string;
  message: string;
  timestamp: number;
}

interface Log {
  id: string;
  message: string;
  timestamp: Date;
}
