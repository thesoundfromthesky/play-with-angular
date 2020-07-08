export interface HTMLInputEvent extends Event {
  target: Partial<HTMLInputElement> & EventTarget;
}
