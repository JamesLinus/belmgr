import {inject, computedFrom} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
// import {EditPerson} from './components/edit-person';

@inject(DialogService)
export class Welcome{
  heading = 'Welcome to the BEL Manager!';

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  // submit(){
  //   this.dialogService.open({ viewModel: EditPerson, model: { firstName: 'Owen' }}).then((result) => {
  //     if (!result.wasCancelled) {
  //       console.log('good');
  //       console.log(result.output);
  //     } else {
  //       console.log('bad');
  //     }
  //   });
  // }

  // positionManually(e) {
  //   const settings = {
  //     viewModel: EditPerson,
  //     model: { firstName: 'Owen' },
  //     position: (modalContainer) => {
  //       const { offsetWidth, offsetLeft, offsetTop } = e.target;

  //       const dialog = modalContainer.querySelector('ai-dialog');
  //       dialog.style.top = offsetTop + 'px';
  //       dialog.style.left = offsetLeft + offsetWidth + 'px';

  //       // quick override on the style
  //       dialog.style.margin = '0';
  //     }
  //   };

  //   this.dialogService.open(settings).then((result) => {
  //     if (!result.wasCancelled) {
  //       console.log('good');
  //       console.log(result.output);
  //     } else {
  //       console.log('bad');
  //     }
  //   });
  // }
}
