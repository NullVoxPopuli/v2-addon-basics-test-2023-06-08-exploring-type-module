
            import { module, test } from 'qunit';
            import { visit } from '@ember/test-helpers';
            import { setupApplicationTest } from 'ember-qunit';
            import { getOwnConfig } from '@embroider/macros';

            module('Acceptance | index', function(hooks) {
              setupApplicationTest(hooks);

              test('hello world', async function(assert) {
                await visit('/');
                assert.ok(document.querySelector('[data-test-example]'), 'it worked');
              });
            });
          