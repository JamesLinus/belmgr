import {customElement, bindable, bindingMode, LogManager} from 'aurelia-framework';
import {relationsList} from './resources/relations-list';

let logger = LogManager.getLogger('statement');

@bindable({
  name:'evidence', //name of the property on the class
  attribute:'evidence', //name of the attribute in HTML e.g. x.bind=""
  changeHandler:'evidenceChanged', //name of the method to invoke when the property changes
  defaultBindingMode: bindingMode.twoWay, //default binding mode used with the .bind command
  defaultValue: undefined //default value of the property, if not bound or set in HTML
})
@bindable({name:"belSubject", attribute:"bel-subject", defaultBindingMode: bindingMode.twoWay})
@bindable({name:"belRelationship", attribute:"bel-relationship", defaultBindingMode: bindingMode.twoWay})
@bindable({name:"belObject", attribute:"bel-object", defaultBindingMode: bindingMode.twoWay})
@customElement('bel-statement')
export class BelStatement {

  // TODO pull relationsList from OpenBEL API
  constructor() {
    logger.debug('RelationsList: ', relationsList);
  }

  // Pulling parent's context into scope
  bind(context) {
    this.$parent = context;
  }

  belSubjectChanged(value) {
    logger.debug('BELsubject changed: ', this.belsubject);
  }

  evidenceChanged(value) {
    logger.debug('StatementChanged: ', this.evidence);
  }

}
