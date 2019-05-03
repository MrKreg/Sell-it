import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {AuthService} from "./auth.service";
import {environment} from "../../../environments/environment";
import {JwtToken} from "../models/auth/jwt-token.model";
import {SignInModel} from "../models/auth/sign-in.model";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('AuthService', () => {
    const apiUrl = environment.apiUrl;
    let service:AuthService, httpMock:HttpTestingController;
    beforeEach(() => { 
        TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers:[AuthService]});
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
    });
    
    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);
        expect(service).toBeTruthy();
    });
    
    describe('#signIn',()=>{
        const apiUrl = environment.apiUrl+"users/token/obtain/";
        it('should  perform sign in correctly',fakeAsync(()=>{
                const jwtToken:JwtToken = {
                    refresh:"sxM3MA4RDj0FMCdEnA0LTVZlXd1r2mh6JCwmbIfHmpY=",
                    access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aWN0b3Jrb3ZhbDM4QGdtYWlsLmNvbSIsImp0aSI6IjU5YmEwZGJmLWUzNDAtNDJiNy04NTc5LThkYjFiMDk2OTRmOCIsImlhdCI6MTU1NDg5ODcwNywicHJvZmlsZUlkIjoiMiIsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6IjY2ZjliZjJjLTViNDUtNGRiNy04NDQzLWQzNzNmYzA3OTk5MCIsImZpcnN0TmFtZSI6IlZpa3RvciIsImxhc3ROYW1lIjoiS292YWwiLCJlbWFpbCI6InZpY3RvcmtvdmFsMzhAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiI1NTQzNTM2NTM0NTM2MzQ2IiwiaXNFbWFpbFZlcmlmaWVkIjoiVHJ1ZSIsImF2YXRhclVybCI6Imh0dHBzOi8vdGVhbW5ldHlibG9ic3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvaW1hZ2VzLzgyMzUzMjY5LTkxZDAtNDY5Zi04Y2IyLWI0YTdjZmIyZGMwYi5wbmciLCJyb2xlcyI6WyJVc2VyIiwiU3lzdGVtIEFkbWluIl0sIm5iZiI6MTU1NDg5ODcwNywiZXhwIjoxNTU0OTA1OTA3LCJpc3MiOiJUZWFtbmV0eVdlYkFwaSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzYxODUvIn0.Iw-mSglFJ5PfN4noZkSh7zLeYCld-JSZkwHRr_4HdFI"
                };
            
                const user:SignInModel = {
                    username:"userName",
                    password:"password"
                };
                let response:JwtToken,errors;

                service.signIn(user).subscribe(
                    res => response = res,
                    err => errors = err
                );

                const requestWrapper = httpMock.expectOne({url:apiUrl});
                requestWrapper.flush(jwtToken);
                tick();
                expect(requestWrapper.request.method).toEqual('POST');
                expect(requestWrapper.request.url).toEqual(apiUrl);
                expect(response).toEqual(jwtToken);
                expect(errors).toBeUndefined();
            }))
    });
    
    
});
