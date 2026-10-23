import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIcons } from './social-icons';

describe('SocialIcons', () => {
  let component: SocialIcons;
  let fixture: ComponentFixture<SocialIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to contact section when email item is clicked', () => {
    const dummyElement = document.createElement('div');
    dummyElement.id = 'contact';
    dummyElement.scrollIntoView = () => {};
    const scrollSpy = vi.spyOn(dummyElement, 'scrollIntoView');
    document.body.appendChild(dummyElement);

    const emailItem = component.socials.find(s => s.name === 'Email')!;
    const mockEvent = new MouseEvent('click', { cancelable: true });
    const preventDefaultSpy = vi.spyOn(mockEvent, 'preventDefault');

    component.handleClick(emailItem, mockEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth' });

    dummyElement.remove();
  });
});
