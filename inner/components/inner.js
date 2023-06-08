
          import Component from '@glimmer/component';
          import { hbs } from 'ember-cli-htmlbars';
          import { setComponentTemplate } from '@ember/component';
          const TEMPLATE = hbs("<div class='inner'>it works</div>")
          export default class ExampleComponent extends Component {}
          setComponentTemplate(TEMPLATE, ExampleComponent);
        