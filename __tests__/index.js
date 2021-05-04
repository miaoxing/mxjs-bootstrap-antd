import sass from 'sass';

describe('test', () => {
  test('Breadcrumb', () => {
    const result = sass.renderSync({
      file: 'Breadcrumb/style/index.scss',
    });

    expect(result.css.toString()).toContain('.breadcrumb');
  });
});
