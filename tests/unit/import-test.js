
           import { module, test } from 'qunit';
           import example from 'v2-addon/import-from-npm';
           module('Unit | import', function(hooks) {
             test('v2 addons can import() from NPM', async function(assert) {
              assert.equal(await example(), 'content from third-party');
             });
           });
          