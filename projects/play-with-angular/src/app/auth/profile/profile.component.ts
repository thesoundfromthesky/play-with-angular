import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  Inject,
  ErrorHandler,
} from '@angular/core';
import { ProfileFacadeService } from '../../store';
import {
  NbRegisterComponent,
  NbAuthService,
  NB_AUTH_OPTIONS,
} from '@nebular/auth';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../../core/config';
import { Subject } from 'rxjs';
import { takeUntil, concatMap } from 'rxjs/operators';
import { ErrorService } from '../../core/error/error.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HTMLInputEvent } from '../../shared';

@Component({
  selector: 'auth-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent extends NbRegisterComponent implements OnDestroy {
  readonly destroy$ = new Subject<void>();
  isUsername = true;
  imgSrc: string | ArrayBuffer | undefined | null;
  formData: FormData | undefined;

  constructor(
    private readonly profileFacadeService: ProfileFacadeService,
    public service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly configService: ConfigService,
    private readonly errorHandler: ErrorHandler,
    private readonly tokenService: TokenService,
    private readonly authService: AuthService
  ) {
    super(service, options, cd, router);
    this.user = { login: {}, name: {}, emails: [] };
    this.profileFacadeService.dispatchGetProfile();
    this.getProfile();
    this.subscribeErrors();
  }
  toggleSubmit() {
    this.submitted = !this.submitted;
  }

  resetSubmitted() {
    this.submitted = false;
  }

  checkUsername(username: string) {
    this.isUsername = username ? true : false;
  }

  onFileChange({ target: { files, name } }: HTMLInputEvent) {
    const file = (files as any)[0].file;
    this.errors = [];
    if (!file) {
      this.imgSrc = undefined;
      return;
    }

    const maxSize = 1024 * 1024;

    if (file.size > maxSize) {
      const error = JSON.stringify({
        error: { message: 'File too large', name: 'Error' },
      });
      throw new Error(error);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.formData = new FormData();
      this.formData.append(name as string, file);
      this.imgSrc = reader.result;
      this.cd.markForCheck();
    };
  }

  applyAvatar() {
    this.authService.uploadAvatar(this.formData).subscribe();
  }

  getProfile() {
    this.profileFacadeService.getProfile()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (profile:any) => {
          this.user = {
            ...profile,
            login: { ...profile.login },
            name: { ...profile.name },
            emails: profile.emails.map(({ value }:any) => ({ value })),
          };
          this.checkUsername(profile.login.username);
          this.cd.markForCheck();
        },
      });
  }

  deleteProfile(id: string) {
    this.profileFacadeService
      .dispatchDeleteProfile(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.tokenService.clearToken();
          this.router.navigateByUrl('/');
        },
      });
  }

  subscribeErrors() {
    (this.errorHandler as ErrorService).errorsAsObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => {
          const { error } = value as any;
          if (Array.isArray(error.message)) {
            this.errors = error.message.map((e: any) =>
              this.errors.push(e.message)
            );
          } else {
            this.errors = [error.message];
          }
          this.resetSubmitted();
          this.cd.detectChanges();
        },
      });
  }

  onSubmit() {
    this.toggleSubmit();
    this.profileFacadeService
      .dispatchUpdateProfile(this.user)
      .pipe(
        concatMap(() => {
          this.toggleSubmit();
          return this.tokenService.refreshToken();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  goToUrl(e: Event, url: string, media: string, token: string): void {
    if (e) {
      this.document.location.href = `${this.configService.baseUrl}${url}?state=${token}`;
    } else {
      this.profileFacadeService.dispatchDeleteSocial(media);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
