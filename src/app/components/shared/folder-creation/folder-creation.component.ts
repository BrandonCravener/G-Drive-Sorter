import { Component, OnInit, Output } from '@angular/core';
import { GoogleService } from '../../../services/google/google.service';
import { MatSlideToggleChange } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-folder-creation',
  templateUrl: './folder-creation.component.html',
  styleUrls: ['./folder-creation.component.scss']
})
export class FolderCreationComponent {
  public namingOptions = [
    {
      name: 'Text',
      value: 'text'
    },
    {
      name: 'Sorting Date',
      value: 'date'
    }
  ];
  public createFolder = {
    parent: {
      folderID: undefined,
      name: null
    },
    prefix: {
      type: null,
      value: ''
    },
    name: {
      type: null,
      value: ''
    },
    suffix: {
      type: null,
      value: ''
    }
  };
  public parentFolderIsRoot: boolean = false;

  constructor(private google: GoogleService) {}

  openFolderPicker() {
    let folderPickedListener = this.google.folderPicked$.subscribe(
      pickedFolder => {
        this.createFolder.parent = {
          folderID: pickedFolder.id,
          name: pickedFolder.name
        };
        folderPickedListener.unsubscribe();
      },
      err => {
        console.error(err);
        folderPickedListener.unsubscribe();
      }
    );
    this.google.openFilePicker();
  }

  rootToggleChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.parentFolderIsRoot = true;
    } else {
      this.parentFolderIsRoot = false;
    }
  }

  reset() {
    console.log(this.reset);
    this.createFolder = {
      parent: {
        folderID: undefined,
        name: null
      },
      prefix: {
        type: null,
        value: ''
      },
      name: {
        type: null,
        value: ''
      },
      suffix: {
        type: null,
        value: ''
      }
    };
    this.parentFolderIsRoot = false;
  }
}
