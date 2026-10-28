import { Component, computed, signal } from '@angular/core';
import { DEMO_TICKETS } from '../../data/demo-tickets';
import { TicketStatus } from '../../models/ticket';
import { filterTickets, TicketFilter } from '../../features/tickets/filter-tickets';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  readonly tickets = signal(DEMO_TICKETS);
  readonly filter = signal<TicketFilter>('all');
  readonly search = signal('');
  // Соединение состояния с чистой функцией уже подготовлено.
  readonly visibleTickets = computed(() => filterTickets(this.tickets(), this.filter(), this.search()));
  readonly statusLabels: Record<TicketStatus, string> = {
    new: 'Новая', in_progress: 'В работе', closed: 'Закрыта',
  };

  setFilter(mode: TicketFilter): void {
    this.filter.set(mode);
  }

  setSearch(value: string): void {
    this.search.set(value);
  }
}