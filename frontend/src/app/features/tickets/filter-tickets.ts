import { Ticket } from '../../models/ticket';

export type TicketFilter = 'all' | 'open' | 'new';

export function filterTickets(
  items: readonly Ticket[],
  mode: TicketFilter,
  search = '',
): Ticket[] {
  let filtered: Ticket[];
  if (mode === 'all') filtered = [...items];
  else if (mode === 'open') filtered = items.filter(item => item.status !== 'closed');
  else filtered = items.filter(item => item.status === 'new');

  const query = search.trim().toLowerCase();
  if (!query) return filtered;
  return filtered.filter(item => item.title.toLowerCase().includes(query));
}