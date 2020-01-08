import { ScenicModule } from './scenic.module';

describe('ScenicModule', () => {
  let scenicModule: ScenicModule;

  beforeEach(() => {
    scenicModule = new ScenicModule();
  });

  it('should create an instance', () => {
    expect(scenicModule).toBeTruthy();
  });
});
