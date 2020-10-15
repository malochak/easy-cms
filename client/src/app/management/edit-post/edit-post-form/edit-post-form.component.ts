import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post-form',
  templateUrl: './edit-post-form.component.html',
  styleUrls: ['./edit-post-form.component.css']
})
export class EditPostFormComponent implements OnInit {

  title: string;
  author: string;
  content: string;

  error = {
    navigation: '',
    title: '',
    author: '',
    content: ''
  };

  defaultError = {
    navigation: '',
    title: '',
    author: '',
    content: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
