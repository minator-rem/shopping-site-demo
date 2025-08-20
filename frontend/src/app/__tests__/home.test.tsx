import { render, screen } from '@testing-library/react';
import Home from '../page';

test('renders home', () => {
  render(<Home />);
  expect(screen.getByText(/learn/i)).toBeInTheDocument(); // 初期テンプレの文言などに合わせて調整
});
