import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AuthService} from "./auth.service";
import {environment} from "../../../environments/environment";
import {JwtToken} from "../models/auth/jwt-token.model";
import {SignInModel} from "../models/auth/sign-in.model";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {SignUpModel} from "../models/auth/sign-up.model";


describe('AuthService', () => {
    let service:AuthService, httpMock:HttpTestingController;
   
    beforeEach(() => { 
        TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers:[AuthService]});
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
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
    
    describe('#signUp',()=>{
        const apiUrl = environment.apiUrl+"users/sign-up/";
        it('should  perform sign up correctly',fakeAsync(()=>{
            const jwtToken:JwtToken = {
                refresh:"sxM3MA4RDj0FMCdEnA0LTVZlXd1r2mh6JCwmbIfHmpY=",
                access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aWN0b3Jrb3ZhbDM4QGdtYWlsLmNvbSIsImp0aSI6IjU5YmEwZGJmLWUzNDAtNDJiNy04NTc5LThkYjFiMDk2OTRmOCIsImlhdCI6MTU1NDg5ODcwNywicHJvZmlsZUlkIjoiMiIsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6IjY2ZjliZjJjLTViNDUtNGRiNy04NDQzLWQzNzNmYzA3OTk5MCIsImZpcnN0TmFtZSI6IlZpa3RvciIsImxhc3ROYW1lIjoiS292YWwiLCJlbWFpbCI6InZpY3RvcmtvdmFsMzhAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiI1NTQzNTM2NTM0NTM2MzQ2IiwiaXNFbWFpbFZlcmlmaWVkIjoiVHJ1ZSIsImF2YXRhclVybCI6Imh0dHBzOi8vdGVhbW5ldHlibG9ic3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvaW1hZ2VzLzgyMzUzMjY5LTkxZDAtNDY5Zi04Y2IyLWI0YTdjZmIyZGMwYi5wbmciLCJyb2xlcyI6WyJVc2VyIiwiU3lzdGVtIEFkbWluIl0sIm5iZiI6MTU1NDg5ODcwNywiZXhwIjoxNTU0OTA1OTA3LCJpc3MiOiJUZWFtbmV0eVdlYkFwaSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzYxODUvIn0.Iw-mSglFJ5PfN4noZkSh7zLeYCld-JSZkwHRr_4HdFI"
            };

            const user:SignUpModel = {
                username:"userName",
                password:"password",
                email:"someEmailgmail.com",
                phone:"380982332432"
            };
            let response:JwtToken,errors;

            service.signUp(user).subscribe(
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
    
    it('should save tokens',()=>{
        let fakeTokens:JwtToken = {
            access:"accessToken",
            refresh:"refreshToken"
        };
        spyOn(service,'setAccessToken');
        spyOn(service,'setRefreshToken');
        service.saveTokens(fakeTokens);
        expect(service.setAccessToken).toHaveBeenCalledWith('accessToken');
        expect(service.setAccessToken).toHaveBeenCalledTimes(1);
        expect(service.setRefreshToken).toHaveBeenCalledWith('refreshToken');
        expect(service.setRefreshToken).toHaveBeenCalledTimes(1);
    });
    
    it('should refresh tokens',fakeAsync(()=>{
        const apiUrl = environment.apiUrl+"users/token/refresh/";
        let response, fakeTokens:JwtToken = {
            access:"accessToken",
            refresh:"refreshToken"
        };
        spyOn(service,'getRefreshToken').and.returnValue('refreshToken');
        service.refreshAccessToken().subscribe(res=>response = res);
        const requestWrapper = httpMock.expectOne({url:apiUrl});
        requestWrapper.flush(fakeTokens);
        tick();
        expect(response).toBe(fakeTokens);
        expect(service.getRefreshToken).toHaveBeenCalled();
        expect(requestWrapper.request.body).toEqual({refresh:'refreshToken'});
    }));
    
    it('should return access token',()=>{
        const fakeToken = 'accessToken';
        spyOn(localStorage,'getItem').and.returnValue(fakeToken);
        const res = service.getAccessToken();
        expect(res).toEqual(fakeToken);
    });
    
    it('should return refresh token',()=>{
        const fakeToken = 'refreshToken';
        spyOn(localStorage,'getItem').and.returnValue(fakeToken);
        const res = service.getRefreshToken();
        expect(res).toEqual(fakeToken);
    });
    
    it('should set access token',()=>{
        const fakeToken = 'token';
        spyOn(localStorage,'setItem');
        service.setAccessToken(fakeToken);
        expect(localStorage.setItem).toHaveBeenCalledWith('accessToken',fakeToken);
    });

    it('should set refresh token',()=>{
        const fakeToken = 'token';
        spyOn(localStorage,'setItem');
        service.setRefreshToken(fakeToken);
        expect(localStorage.setItem).toHaveBeenCalledWith('refreshToken',fakeToken);
    });
    
    it('should logout correctly',()=>{
        spyOn(localStorage,'removeItem');
        service.logout();
        expect(localStorage.removeItem).toHaveBeenCalledWith('accessToken');
        expect(localStorage.removeItem).toHaveBeenCalledWith('refreshToken');
        expect(localStorage.removeItem).toHaveBeenCalledTimes(2);
    })
    
    
});
