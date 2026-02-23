import { TestBed } from '@angular/core/testing';

import { InterviewPracticeService } from './interview-practice.service';

describe('InterviewPracticeService', () => {
  let service: InterviewPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
