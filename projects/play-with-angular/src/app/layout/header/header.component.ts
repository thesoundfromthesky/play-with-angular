import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';

import { TokenService } from '../../auth/services/token.service';
@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly menuItems: NbMenuItem[] = [
    {
      title: 'about me',
      link: '/',
      fragment: 'about-me',
      home: true,
    },
    {
      title: 'projects',
      link: '/',
      fragment: 'projects',
    },
    {
      title: 'skills',
      link: '/',
      fragment: 'skills',
    },
    {
      title: 'contact',
      link: '/',
      fragment: 'contact',
    },
    { title: 'resume', url: 'assets/downloads/resume_euihyeok_lee.pdf' },
  ];

  readonly userItems: NbMenuItem[] = [
    { title: 'profile', link: '/auth/profile' },
    { title: 'logout', link: '/auth/logout' },
  ];

  constructor(
    public readonly nbAuthService: NbAuthService,
    private readonly nbSidebarService: NbSidebarService,
    public readonly tokenService: TokenService
  ) {}

  toggleSidebar() {
    this.nbSidebarService.toggle(true);
  }
}
