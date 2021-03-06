import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export interface ConfirmModel {
    keyword: string;
    title: string;
    message: string;
}
@Component({
  selector: 'app-confirm',
  templateUrl: './modals.component.html'
})
export class ModalsComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    keyword: string;
    title: string;
    message: string;
    constructor(dialogService: DialogService) {
        super(dialogService);
    }
    confirm() {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    }
}