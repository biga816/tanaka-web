import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// shared
import { PostModel } from '../../+shared/models/post.model';
import * as format from 'date-fns/format';

@Component({
  selector: 'blog-dialog',
  templateUrl: 'blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent {
  public targetLink: string;
  public post: PostModel;

  constructor(
    public dialogRef: MatDialogRef<BlogDialogComponent>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eltRef:ElementRef
  ) {
    this.post = this.data.post;
  }

  close(): void {
    this.dialogRef.close();
  }

  getDateFormat(date) {
    return format(date, 'YYYY/MM/DD');
  }
}
