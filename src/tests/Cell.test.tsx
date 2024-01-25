import { describe, expect, it } from 'vitest';
import { Cell } from '../components/Cell';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BoardProvider } from '../contexts/BoardContext';

describe('Cell test', () => {
  it('should display an empty cell', () => {
    const wrapper = render(<Cell num={0} />);
    expect(wrapper).toBeTruthy();
  });

  it('should display a cell with an X', async () => {
    const wrapper = render(
      <BoardProvider>
        <Cell num={0} />
      </BoardProvider>,
    );
    const user = userEvent.setup();

    await user.click(wrapper.container.querySelector('#cell1')!);

    expect(wrapper.container.querySelector('#cell1')?.innerHTML).toContain('X');
  });

  it('should not change to O when clicked again', async () => {
    const wrapper = render(
      <BoardProvider>
        <Cell num={0} />
      </BoardProvider>,
    );
    const user = userEvent.setup();

    await user.click(wrapper.container.querySelector('#cell1')!);
    await user.click(wrapper.container.querySelector('#cell1')!);

    expect(wrapper.container.querySelector('#cell1')?.innerHTML).not.toContain('O');
  });
});
