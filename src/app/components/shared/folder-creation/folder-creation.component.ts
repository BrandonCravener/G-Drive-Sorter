import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FolderCreation } from '../../../../interfaces';
import { GoogleService } from '../../../services/google/google.service';
import { MatSlideToggleChange, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-folder-creation',
  templateUrl: './folder-creation.component.html',
  styleUrls: ['./folder-creation.component.scss']
})
export class FolderCreationComponent implements AfterViewInit {
  @Input() inputFolder: FolderCreation;

  @Output() valueChange = new EventEmitter();

  private valueAttributes = ['prefix', 'name', 'suffix'];

  public namingOptions = [
    {
      name: 'Text',
      value: 'text'
    },
    {
      name: 'Sorting Date',
      value: 'date'
    },
    {
      name: 'None',
      value: 'none'
    }
  ];
  public createFolder: FolderCreation = {
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

  public finished: boolean = false;

  public get value(): FolderCreation {
    if (this.validate()) {
      return this.createFolder;
    } else {
      return null;
    }
  }

  constructor(private google: GoogleService, private snackbar: MatSnackBar) {}

  ngAfterViewInit() {
    if (this.inputFolder) {
      setTimeout(_ => {
        this.createFolder = this.inputFolder;
      });
    }
  }

  opened() {
    setTimeout(_ => {
      this.finished = false;
    });
  }

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
      this.createFolder.parent = {
        folderID: 'root',
        name: 'My Drive'
      };
    } else {
      this.parentFolderIsRoot = false;
      this.createFolder.parent = {
        folderID: undefined,
        name: null
      };
    }
  }

  validate(): boolean {
    const folder = this.createFolder;
    if (folder) {
      if (folder.parent.folderID !== undefined) {
        let anyInvalid = false;
        let numNone = 0;
        this.valueAttributes.forEach(attribute => {
          if (folder[attribute].type === 'none') {
            numNone += 1;
          }
          if (folder[attribute].type === 'text') {
            if (folder[attribute].value.length <= 0) {
              anyInvalid = true;
            }
          }
          if (folder[attribute].type === null) {
            anyInvalid = true;
          }
        });
        if (numNone === 3) {
          anyInvalid = true;
        }
        return !anyInvalid;
      }
    }
    return false;
  }

  done() {
    if (this.validate()) {
      this.valueChange.emit(this.createFolder);
      this.finished = true;
    }
  }

  reset() {
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
    this.finished = false;
  }
}
