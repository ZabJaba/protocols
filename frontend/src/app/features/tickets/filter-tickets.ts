import { Ticket } from '../../models/ticket';

export type TicketFilter = 'all' | 'open' | 'new';

export function filterTickets(
  items: readonly Ticket[],
  mode: TicketFilter,
): Ticket[] {
  // TODO(LR1-03): all — все; open — всё, кроме closed; new — только new.
  // Не меняйте исходный массив и его объекты. Пустой массив — временная заглушка.
  return [];
}
