
          import Component from '@glimmer/component';
          import { hbs } from 'ember-cli-htmlbars';
          import { setComponentTemplate } from '@ember/component';
          import './example-component.css';
          const TEMPLATE = hbs('<div data-test-example>{{this.message}}</div>')
          export default class ExampleComponent extends Component {
            message = "it worked"
          }
          setComponentTemplate(TEMPLATE, ExampleComponent);
        