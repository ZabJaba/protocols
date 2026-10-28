import { describe, it, expect } from 'vitest';
import { filterTickets } from './filter-tickets';
import { DEMO_TICKETS } from '../../data/demo-tickets';

describe('filterTickets с поиском', () => {
  it('находит по подстроке без учёта регистра', () => {
    expect(filterTickets(DEMO_TICKETS, 'all', 'ПРОЕКТОР').map(t => t.id)).toEqual([2]);
  });

  it('убирает пробелы по краям', () => {
    expect(filterTickets(DEMO_TICKETS, 'all', '  проектор  ').map(t => t.id)).toEqual([2]);
  });

  it('пустой поиск не влияет на результат', () => {
    expect(filterTickets(DEMO_TICKETS, 'all', '   ').map(t => t.id)).toEqual([1, 2, 3]);
  });

  it('поиск работает совместно с режимом open', () => {
    expect(filterTickets(DEMO_TICKETS, 'open', 'сети')).toEqual([]);
  });

  it('возвращает пустой результат, если ничего не найдено', () => {
    expect(filterTickets(DEMO_TICKETS, 'all', 'кабель')).toEqual([]);
  });
});