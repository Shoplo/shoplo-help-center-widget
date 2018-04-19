import { StripRootCategoriesPipe } from './strip-root-categories.pipe';

describe('StripRootCategoriesPipe', () => {
  it('create an instance', () => {
    const pipe = new StripRootCategoriesPipe();
    expect(pipe).toBeTruthy();
  });
});
