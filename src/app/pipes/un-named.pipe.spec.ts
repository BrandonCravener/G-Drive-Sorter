import { UnNamedPipe } from './un-named.pipe';

describe('UnNamedPipe', () => {
  it('create an instance', () => {
    const pipe = new UnNamedPipe();
    expect(pipe).toBeTruthy();
  });
});
