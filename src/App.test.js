import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import App from './App';

it('Match screenshot with a CI/CD pipeline',async () => {
  render(<App />);
  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
},10000);
