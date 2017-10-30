import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'blog-dialog',
  templateUrl: 'blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent {
  public targetLink: string;

  constructor(
    public dialogRef: MatDialogRef<BlogDialogComponent>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.targetLink = data.link;
  }

  close(): void {
    this.dialogRef.close();
  }
}
