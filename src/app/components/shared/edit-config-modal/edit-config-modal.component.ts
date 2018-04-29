import {
  Component,
  Input,
  NgZone,
  OnInit
  } from '@angular/core';
import { ConfigBuilder } from '../../../classes/config-builder';
import { ConfigListComponent } from '../../tabs/config/config-list/config-list.component';
import { ConfigsInterface, RuleInterface, GroupInterface } from '../../../../interfaces';
import { DatabaseService } from '../../../services/firebase/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel, MatSnackBar, MatSlideToggleChange } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { v4 as uuid } from 'uuid';
import { GoogleService } from '../../../services/google/google.service';

@Component({
  selector: 'app-edit-config-modal',
  templateUrl: './edit-config-modal.component.html',
  styleUrls: ['./edit-config-modal.component.scss']
})
export class EditConfigModalComponent implements OnInit {

  private _closeCommand = new Subject<Boolean>();
  private groups: Array<GroupInterface>;
  
  public valid: boolean = true;
  public editingRuleID: string;
  public config: ConfigsInterface;
  public configLoaded: Promise<boolean>;
  public closeCommand = this._closeCommand.asObservable();

  constructor(
    public zone: NgZone,
    public router: Router,
    public google: GoogleService,
    public snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    public database: DatabaseService
  ) {}

  private getGroupIndex(groupID: string): number {
    return this.config.groups.findIndex(group => {
      return group.id === groupID;
    });
  }

  private getRuleIndex(groupID: string, ruleID: string) {
    return this.config.groups[this.getGroupIndex(groupID)]
      .rules.findIndex(rule => {
        return rule.id === ruleID;
      });
  }

  private verifyValidation(): boolean {
    return ConfigBuilder.verifyConfig(this.config);
  }

  ngOnInit() {
    if (this.database.editingConfig) {
      this.database.getConfig(this.database.editingConfig, data => {
        this.config = data;
        this.configLoaded = Promise.resolve(true);
      })
    }
  }

  openFolderPicker(groupID: string, folderType: string) {
    let folderPickedListener = this.google.folderPicked$.subscribe(folder => {
      if (folderType === 'source') {
        this.config.groups[this.getGroupIndex(groupID)].source = {
          name: folder.name,
          folderID: folder.id
        }
      } else {
        this.config.groups[this.getGroupIndex(groupID)].destination = {
          name: folder.name,
          folderID: folder.id
        }
      }
      folderPickedListener.unsubscribe();
    }, cancelled => {
      if (cancelled) {
        folderPickedListener.unsubscribe();
      }
    });
    this.google.openFilePicker();
  }
  
  addGroup() {
    let newConfigUUID = uuid();
    this.config.groups.push({
      id: newConfigUUID,
      destination: {
        name: ''
      },
      source: {
        name: ''
      },
      name: '',
      rules: []
    });
    this.addRule(newConfigUUID);
    this.valid = false;
  }

  addRule(groupID: string) {
    let newRuleUUID = uuid();
    this.config.groups[this.getGroupIndex(groupID)].rules
    .push({
        id: newRuleUUID,
        name: ''
      })
      this.editingRuleID = newRuleUUID;
    this.valid = false;
  }

  ruleChanged(newRule: RuleInterface, ruleID: string, groupID: string) {
    this.config.groups[this.getGroupIndex(groupID)]
      .rules[this.getRuleIndex(groupID, ruleID)] = newRule;
    this.editingRuleID = '';
    this.valid = this.verifyValidation();
  }

  done() {
    if (this.verifyValidation()) {
      this.database.updateConfig(this.config)
      this.close();
    } else {
      this.snackBar.open('Complete your edits!', 'OK', {
        duration: 5000
      });
    }
  }
  rootToggleChange(event: MatSlideToggleChange,
    folderType: string, 
    groupID: string
  ) {
    var groupIndex = this.getGroupIndex(groupID);
    if (event.checked) {
      this.config.groups[groupIndex][folderType] = {
        folderID: 'root',
        name: 'My Drive'
      }
    } else {
      this.config.groups[groupIndex][folderType] = {
        folderID: undefined,
        name: null
      }
    }
    
  }

  close() {
    this._closeCommand.next(true);
  }
}
