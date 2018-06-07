/**
 * A enumerable of Google Drive file types
 *
 * @export
 * @enum {number}
 */
export enum DriveMimeType {
  audio = 'application/vnd.google-apps.audio',
  document = 'application/vnd.google-apps.document',
  drawing = 'application/vnd.google-apps.drawing',
  file = 'application/vnd.google-apps.file',
  folder = 'application/vnd.google-apps.folder',
  form = 'application/vnd.google-apps.form',
  fustiontable = 'application/vnd.google-apps.fusiontable',
  map = 'application/vnd.google-apps.map',
  photo = 'application/vnd.google-apps.photo',
  presentation = 'application/vnd.google-apps.presentation',
  script = 'application/vnd.google-apps.script',
  site = 'application/vnd.google-apps.site',
  spreadsheet = 'application/vnd.google-apps.spreadsheet',
  unknown = 'application/vnd.google-apps.unknown',
  video = 'application/vnd.google-apps.video',
  thirdParty = 'application/vnd.google-apps.drive-sdk'
}

/**
 * A utility class to build Google Drive query's
 *
 * @export
 * @class DriveQueryBuilder
 */
export class DriveQueryBuilder {
  /**
   * The current generated query
   *
   * @private
   * @type {string}
   * @memberof DriveQueryBuilder
   */
  private query = '';

  /**
   * Returns the current query
   *
   * @returns {string} The built query
   * @memberof DriveQueryBuilder
   */
  get(): string {
    return this.query;
  }

  /**
   * Creates an instance of DriveQueryBuilder.
   * @param {string} parentFolderID The ID of the folder to search in
   * @param {boolean} disableTrashed Whether or not to include file in trash
   * @memberof DriveQueryBuilder
   */
  constructor(parentFolderID: string, disableTrashed: boolean) {
    if (parentFolderID) {
      this.query += `'${parentFolderID}' in parents`;
    }
    if (disableTrashed) {
      this.query += ' and trashed=false';
    }
  }

  /**
   * Add a file type to ignore to the query
   *
   * @param {DriveMimeType} mimeType The file type to ignore
   * @memberof DriveQueryBuilder
   */
  excludeType(mimeType: DriveMimeType): DriveQueryBuilder {
    this.query += ` and mimeType != '${mimeType}'`;
    return this;
  }

  /**
   * Add a file type to require to the query
   *
   * @param {DriveMimeType} mimeType The file type to require
   * @memberof DriveQueryBuilder
   */
  requiresType(mimeType: DriveMimeType): DriveQueryBuilder {
    this.query += ` and mimeType = '${mimeType}'`;
    return this;
  }

  /**
   * Add a name content's requirement to the query
   *
   * @param {string} string The string the name needs
   * @memberof DriveQueryBuilder
   */
  nameContains(string: string): DriveQueryBuilder {
    this.query += ` and name contains '${string}'`;
    return this;
  }

  /**
   * Add a name content's to exclude from the query
   *
   * @param {string} string
   * @memberof DriveQueryBuilder
   */
  nameExcludes(string: string): DriveQueryBuilder {
    this.query += ` and not name contains '${string}'`;
    return this;
  }

  /**
   * Adds a owner requirement to the query
   *
   * @param {string} email The owners email address
   * @memberof DriveQueryBuilder
   */
  hasOwner(email: string): DriveQueryBuilder {
    this.query += ` and ${email} in owners`;
    return this;
  }

  /**
   * Adds a owner exclusion to the query
   *
   * @param {string} email The owners email address to exclude
   * @memberof DriveQueryBuilder
   */
  excludesOwner(email: string): DriveQueryBuilder {
    this.query += ` and not ${email} in  owners`;
    return this;
  }

  /**
   * Require the file to be created after the supplied date
   *
   * @param {Date} date The date the file should be created after
   * @memberof DriveQueryBuilder
   */
  createdAfter(date: Date): DriveQueryBuilder {
    this.query += ` and createdTime >= '${date.toISOString().split('.')[0]}'`;
    return this;
  }

  /**
   * Require the file to be created before the supplied date
   *
   * @param {Date} date The date the file should be created before
   * @memberof DriveQueryBuilder
   */
  createdBefore(date: Date): DriveQueryBuilder {
    this.query += ` and createdTime <= '${date.toISOString().split('.')[0]}'`;
    return this;
  }

  /**
   * Require the file to be modified after the supplied date
   *
   * @param {Date} date The date the file should be modified after
   * @memberof DriveQueryBuilder
   */
  modifiedAfter(date: Date): DriveQueryBuilder {
    this.query += ` and modifiedTime >= '${date.toISOString().split('.')[0]}'`;
    return this;
  }

  /**
   * Require the file to be modified before the supplied date
   *
   * @param {Date} date The date the file should be modified before
   * @memberof DriveQueryBuilder
   */
  modifiedBefore(date: Date): DriveQueryBuilder {
    this.query += ` and modifiedTime <= '${date.toISOString().split('.')[0]}'`;
    return this;
  }

  /**
   * Require the file to be opened after the supplied date
   *
   * @param {Date} date The date the file beeds to be opened after
   * @memberof DriveQueryBuilder
   */
  openedAfter(date: Date): DriveQueryBuilder {
    this.query += ` and viewedByMeTime >= '${
      date.toISOString().split('.')[0]
    }'`;
    return this;
  }

  /**
   * Require the file to be opened before the supplied date
   *
   * @param {Date} date The date the file beeds to be opened before
   * @memberof DriveQueryBuilder
   */
  openedBefore(date: Date): DriveQueryBuilder {
    this.query += ` and viewedByMeTime <= '${
      date.toISOString().split('.')[0]
    }'`;
    return this;
  }

  /**
   * Require the document name, description, content, or indexable text to have the supplied text
   *
   * @param {string} text The text the document needs to have
   * @memberof DriveQueryBuilder
   */
  fullTextContains(text: string): DriveQueryBuilder {
    this.query += ` and fullText contains '${text}'`;
    return this;
  }
}
