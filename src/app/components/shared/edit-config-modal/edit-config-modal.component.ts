import { Component, OnInit, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-config-modal',
  templateUrl: './edit-config-modal.component.html',
  styleUrls: ['./edit-config-modal.component.scss']
})
export class EditConfigModalComponent implements OnInit {

  private _closeCommand = new Subject<Boolean>();
  public closeCommand = this._closeCommand.asObservable();

  constructor(
    public router: Router,
    public zone: NgZone
  ) { }

  ngOnInit() {
  }

  close() {
    this._closeCommand.next(true);
  }

}
