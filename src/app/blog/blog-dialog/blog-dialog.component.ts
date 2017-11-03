import { Component, OnInit, Inject, ViewChild } from '@angular/core';
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
  @ViewChild('cont') contEl: any;

  public targetLink: string;
  public post: PostModel;
  public isFullScreeem: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BlogDialogComponent>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.post = this.data.post;
  }

  close(): void {
    this.dialogRef.close();
  }

  getDateFormat(date) {
    return format(date, 'YYYY/MM/DD');
  }

  scroll(event: any): void {
    this.isFullScreeem = (this.contEl.nativeElement.scrollTop > 32);
  }
}
