import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { presets } from '../presets';

@Component({
  selector: 'app-preset-config',
  templateUrl: './preset-config.component.html',
  styleUrls: ['./preset-config.component.scss']
})
export class PresetConfigComponent implements OnInit {
  private _closeCommand = new Subject<Boolean>();
  
  public closeCommand = this._closeCommand.asObservable();

  public presets = presets;

  constructor(public zone: NgZone, public router: Router) {}

  ngOnInit() {}

  close() {
    this._closeCommand.next(true);
  }
  
  addPreset(presetID: string) {
    
  }
}
