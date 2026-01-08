import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.html',
  styleUrls: ['./join-us.css']
})
export class JoinUs {

  title = 'Join Our Mailing List!';
  subtitle =
    'Join and meet thousands of academicians around the globe and stay updated!';

  user = {
    firstName: '',
    lastName: '',
    email: '',
    institution: ''
  };
}
