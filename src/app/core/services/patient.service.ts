import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { inject, Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseCrudService<Patient> {
  constructor() {
    super(inject(HttpClient), 'patients'); 
  }


}