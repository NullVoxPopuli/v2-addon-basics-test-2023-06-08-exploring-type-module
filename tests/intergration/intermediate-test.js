
            import { module, test } from 'qunit';
            import { setupRenderingTest } from 'ember-qunit';
            import { render } from '@ember/test-helpers';
            import hbs from 'htmlbars-inline-precompile';

            module('Integration | intermediate', function(hooks) {
              setupRenderingTest(hooks);

              test('v1 addon can invoke v2 addon through the app tree', async function(assert) {
                await render(hbs('<Hello />'));
                assert.dom('.intermediate-hello .inner').containsText('it works');
              });
            });
          